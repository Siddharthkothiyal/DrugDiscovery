import docsBg from '../../Photos/documentation.jpg'

export default function Docs() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${docsBg})` }}>
      <div className="absolute inset-0 bg-light/60 backdrop-blur-sm"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-accent">API Structure</h2>
        <div className="mt-3 rounded-2xl bg-light p-4 shadow-soft hover-lift">
          <pre className="text-sm text-accent/80">
{`POST /api/predict
Body:
{
  "smiles": "CCO",
  "task": "toxicity"
}
Response:
{
  "toxicity": "0.42",
  "solubility": "2.10 mg/mL",
  "drugLikeness": "0.71",
  "logP": "1.23"
}`}
          </pre>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">Folder Structure</h2>
        <div className="mt-3 rounded-2xl bg-light p-4 shadow-soft hover-lift">
          <pre className="text-sm text-accent/80">
{`src/
  components/
  pages/
  utils/
tailwind.config.js
postcss.config.js
vite.config.js`}
          </pre>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">Toolchain</h2>
        <p className="mt-2 text-accent/80">Built with React, Vite, TailwindCSS. Routing via React Router.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">Future Improvements</h2>
        <ul className="mt-2 list-disc pl-6 text-accent/80">
          <li>Real molecule rendering</li>
          <li>Model backend integration</li>
          <li>Batch predictions and export</li>
        </ul>
      </section>
      </div>
    </div>
  )
}
