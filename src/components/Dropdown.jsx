export default function Dropdown({ value, onChange, options }) {
  return (
    <label className="block">
      <div className="mb-2 font-semibold text-accent">Property</div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-secondary/60 bg-light/50 px-3 py-2 text-accent focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </label>
  )
}
