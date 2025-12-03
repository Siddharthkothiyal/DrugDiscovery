import aboutBg from '../../Photos/aboutpage.jpg'

export default function About() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${aboutBg})` }}>
      <div className="absolute inset-0 bg-light/60 backdrop-blur-sm"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <section>
        <h2 className="text-2xl font-bold text-accent">What is drug discovery?</h2>
        <p className="mt-2 text-accent/80">Drug discovery explores compounds to identify safe, effective therapies.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">What are SMILES?</h2>
        <p className="mt-2 text-accent/80">SMILES represent molecules as strings enabling computation and storage.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">What are descriptors?</h2>
        <p className="mt-2 text-accent/80">Descriptors quantify molecular properties used in modeling and analysis.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">What is QSAR?</h2>
        <p className="mt-2 text-accent/80">QSAR models relate structure to activity, predicting properties from features.</p>
      </section>
      <section>
        <h2 className="text-2xl font-bold text-accent">Our Approach</h2>
        <div className="relative mt-6">
          <div className="grid md:grid-cols-4 gap-6">
            {['Ingest', 'Represent', 'Model', 'Interpret'].map((step, idx) => (
              <div key={step} className="rounded-2xl bg-white/70 border border-secondary p-6 shadow-soft hover-lift hover:border-primary">
                <div className="w-10 h-10 rounded-full bg-primary mb-3 float-slow"></div>
                <div className="text-accent font-semibold">{idx + 1}. {step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
