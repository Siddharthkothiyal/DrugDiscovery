export default function FeatureCard({ title, description }) {
  return (
    <div className="rounded-2xl bg-white/70 border border-secondary p-6 shadow-soft hover-lift transition-colors hover:border-primary">
      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 float-slow">
        <span className="text-accent font-semibold">•</span>
      </div>
      <div className="text-accent font-semibold">{title}</div>
      {description && <p className="mt-2 text-accent/80 text-sm">{description}</p>}
    </div>
  )
}
