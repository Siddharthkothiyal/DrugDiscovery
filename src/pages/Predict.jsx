import { useState } from 'react'
import PredictionForm from '../components/PredictionForm.jsx'
import ResultCard from '../components/ResultCard.jsx'
import { saveMolecule } from '../utils/api.js'
import predictBg from '../../Photos/predictpage.jpg'
import checkDrugImg from '../../Photos/checKdrug.jpg'

export default function Predict() {
  const [result, setResult] = useState(null)
  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${predictBg})` }}>
      <div className="absolute inset-0 bg-light/60 backdrop-blur-sm"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-accent">Predict Molecular Properties</h2>
        <p className="text-accent/80">Input SMILES or upload a file and choose a property.</p>
      </div>
      <PredictionForm onResult={setResult} />
      {result && (
        <section className="mt-10 grid md:grid-cols-3 gap-6">
          <ResultCard
            title="Results"
            entries={[
              { label: 'Toxicity', value: result.metrics.toxicity },
              { label: 'Solubility', value: result.metrics.solubility },
              { label: 'Drug-likeness', value: result.metrics.drugLikeness },
              { label: 'logP', value: result.metrics.logP },
            ]}
          />
          <div className="rounded-2xl bg-primary/80 backdrop-blur p-6 text-accent shadow-soft shimmer">
            <div className="font-semibold mb-2">AI Interpretation</div>
            <p>{result.interpretation}</p>
            <button onClick={async ()=>{ try { await saveMolecule({ smiles: result.smiles, task: result.task, metrics: result.metrics }) } catch(e){} }} className="mt-4 rounded-xl border border-accent px-3 py-2">Save Molecule</button>
          </div>
          <div className="rounded-2xl border-2 border-dotted border-accent p-0 overflow-hidden">
            <img src={checkDrugImg} alt="Molecule" className="w-full h-full object-cover opacity-80" />
          </div>
        </section>
      )}
      </div>
    </div>
  )
}
