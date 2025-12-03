export default function Footer() {
  return (
    <footer className="bg-accent/90 backdrop-blur text-white mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-semibold">MoleculeAI</div>
          <p className="text-sm opacity-80">AI Drug Discovery Web App</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Links</div>
          <ul className="space-y-1">
            <li><a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a className="hover:underline" href="mailto:contact@molecule.ai">Contact</a></li>
            <li><span className="opacity-80">Credits: Cheminformatics community</span></li>
          </ul>
        </div>
        <div className="md:text-right">
          <div className="opacity-75 text-sm">© {new Date().getFullYear()} MoleculeAI</div>
        </div>
      </div>
    </footer>
  )
}
