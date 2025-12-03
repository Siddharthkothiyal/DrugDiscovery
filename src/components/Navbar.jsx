import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-light/70 backdrop-blur-md text-accent shadow-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-semibold tracking-tight">
            MoleculeAI
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/predict', label: 'Predict' },
              { to: '/about', label: 'About' },
              { to: '/docs', label: 'Docs' },
              { to: '/login', label: 'Login' },
            ].map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-secondary ${isActive ? 'text-secondary' : ''}`
                }
              >
                <span className="hover-lift">{item.label}</span>
              </NavLink>
            ))}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-secondary hover-lift"
            >
              GitHub
            </a>
          </nav>
          <button onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-xl border border-accent/20">Menu</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-light/95 border-t border-accent/10">
          <div className="px-4 py-3 space-y-2">
            {[
              { to: '/', label: 'Home' },
              { to: '/predict', label: 'Predict' },
              { to: '/about', label: 'About' },
              { to: '/docs', label: 'Docs' },
              { to: '/login', label: 'Login' },
            ].map(item => (
              <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className={({ isActive }) => `block rounded-xl px-3 py-2 ${isActive ? 'bg-primary/20 text-secondary' : 'hover:bg-primary/10'}`}>
                {item.label}
              </NavLink>
            ))}
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="block rounded-xl px-3 py-2 hover:bg-primary/10">GitHub</a>
          </div>
        </div>
      )}
    </header>
  )
}
