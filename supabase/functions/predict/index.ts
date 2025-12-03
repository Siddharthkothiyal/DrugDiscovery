export async function handleRequest(req: Request): Promise<Response> {
  const body = await req.json()
  const smiles = String(body?.smiles || '')
  const task = String(body?.task || '')
  if (!smiles) return new Response(JSON.stringify({ error: 'invalid' }), { status: 400 })
  // @ts-ignore
  const { default: tf } = await import('https://esm.sh/@tensorflow/tfjs@4.20.0')
  const modelUrl = new URL('./model.json', import.meta.url)
  const raw = await fetch(modelUrl).then(r => r.text())
  const parsed = JSON.parse(raw)
  const features = extract(smiles)
  const x = tf.tensor2d([features], [1, features.length])
  const W = tf.tensor2d(parsed.W)
  const b = tf.tensor1d(parsed.b)
  const y = tf.tidy(() => x.matMul(W).add(b).sigmoid())
  const arr = await y.array()
  const [tox, sol, dl, logp] = arr[0]
  const out = {
    smiles,
    task,
    metrics: {
      toxicity: tox.toFixed(2),
      solubility: (sol * 10).toFixed(2) + ' mg/mL',
      drugLikeness: dl.toFixed(2),
      logP: (logp * 5 - 1).toFixed(2),
    },
    interpretation: 'Estimated using lightweight TF model.',
  }
  return new Response(JSON.stringify(out), { headers: { 'content-type': 'application/json' } })
}

function extract(s: string) {
  const len = s.length
  const c = (s.match(/C/g) || []).length
  const o = (s.match(/O/g) || []).length
  const n = (s.match(/N/g) || []).length
  const eq = (s.match(/=/g) || []).length
  return [len / 40, c / 20, o / 10, n / 10, eq / 10]
}

export default { fetch: handleRequest }
