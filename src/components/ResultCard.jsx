export default function ResultCard({ title, entries }) {
  return (
    <div className="rounded-2xl bg-light p-6 shadow-soft hover-lift">
      <div className="font-semibold text-accent mb-4">{title}</div>
      <div className="grid grid-cols-2 gap-3">
        {entries.map((e, i) => (
          <div key={i} className="flex justify-between">
            <span className="text-accent/70">{e.label}</span>
            <span className="text-accent font-medium">{e.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
