import { useState } from 'react'
import Dropdown from './Dropdown.jsx'
import FileUploader from './FileUploader.jsx'
import Loader from './Loader.jsx'
import { dummyPredict } from '../utils/dummyPredict.js'
import { invokePredict } from '../utils/api.js'

export default function PredictionForm({ onResult }) {
  const [smiles, setSmiles] = useState('')
  const [task, setTask] = useState('toxicity')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    let result
    try {
      result = await invokePredict(smiles, task)
    } catch (e) {
      result = await dummyPredict({ smiles, task })
    }
    setLoading(false)
    onResult(result)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white border-2 border-secondary p-6 shadow-soft hover-lift">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <div className="mb-2 font-semibold text-accent">SMILES</div>
            <textarea
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              placeholder="e.g., CC(=O)OC1=CC=CC=C1C(=O)O"
              className="w-full h-32 rounded-xl border border-secondary/60 bg-light/50 px-3 py-2 text-accent focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <FileUploader onFileText={setSmiles} />
          <Dropdown
            value={task}
            onChange={setTask}
            options={[
              { value: 'toxicity', label: 'Toxicity' },
              { value: 'solubility', label: 'Solubility' },
              { value: 'drug-likeness', label: 'Drug-likeness' },
              { value: 'bioactivity', label: 'Bioactivity' },
            ]}
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="w-full rounded-2xl border-2 border-dotted border-accent p-6 text-center text-accent mesh-bg">
            Molecule visualization will appear here.
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-primary/80 backdrop-blur text-accent px-6 py-3 font-semibold shadow-soft hover:bg-secondary transition-colors glow-soft"
          >
            {loading ? <Loader /> : 'Predict'}
          </button>
        </div>
      </div>
    </form>
  )
}
