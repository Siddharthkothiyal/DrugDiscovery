export default function FileUploader({ onFileText }) {
  const handleFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const text = await file.text()
    onFileText(text.trim())
  }
  return (
    <label className="block">
      <div className="mb-2 font-semibold text-accent">Upload File</div>
      <input
        type="file"
        accept=".txt,.smi,.csv"
        onChange={handleFile}
        className="w-full rounded-xl border border-secondary/60 bg-light/50 px-3 py-2 text-accent"
      />
    </label>
  )
}
