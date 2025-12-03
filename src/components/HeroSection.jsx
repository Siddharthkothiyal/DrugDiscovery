export default function HeroSection() {
  return (
    <section className="ai-gradient">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-accent">
             Predict Moleclar Property Using AI
            </h1>
            <p className="mt-4 text-accent/80">
              Analyze drug molecules instantly using machine learning and cheminformatics.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href="/predict"
                className="inline-flex items-center rounded-2xl bg-primary/80 backdrop-blur text-accent px-6 py-3 font-semibold shadow-soft hover:bg-secondary transition-colors glow-soft"
              >
                Start Predicting
              </a>
              <a
                href="/docs"
                className="inline-flex items-center rounded-2xl border border-accent text-accent px-6 py-3 font-semibold hover:bg-accent/5 transition-colors"
              >
                Documentation
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-2xl bg-white/70 border border-secondary flex items-center justify-center shadow-soft mesh-bg">
              <div className="w-40 h-40 rounded-full bg-primary/50 orbit float-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
