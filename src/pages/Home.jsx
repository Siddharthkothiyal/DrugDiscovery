import HeroSection from '../components/HeroSection.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import homeBg from '../../Photos/HomePage.png'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="absolute inset-0 bg-light/60 backdrop-blur-sm"></div>
      <div className="relative">
        <HeroSection />
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard title="Predict toxicity" />
            <FeatureCard title="Predict solubility" />
            <FeatureCard title="Drug-likeness scoring" />
            <FeatureCard title="Molecule visualization" />
          </div>
        </section>
      </div>
    </div>
  )
}
