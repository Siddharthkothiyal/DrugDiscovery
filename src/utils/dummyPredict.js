export async function dummyPredict({ smiles, task }) {
  await new Promise(r => setTimeout(r, 800))
  const base = {
    toxicity: Math.random().toFixed(2),
    solubility: (Math.random() * 10).toFixed(2) + ' mg/mL',
    drugLikeness: (Math.random() * 1).toFixed(2),
    logP: (Math.random() * 5 - 1).toFixed(2),
    interpretation: 'The molecule shows moderate properties with acceptable profiles.',
  }
  return {
    smiles,
    task,
    metrics: {
      toxicity: base.toxicity,
      solubility: base.solubility,
      drugLikeness: base.drugLikeness,
      logP: base.logP,
    },
    interpretation: base.interpretation,
  }
}
