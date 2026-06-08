import { Link, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/builder', label: 'Build a Hamper' },
  { to: '/catalog', label: 'Catalog' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="bg-brand-cream border-b border-brand-taupe/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🎁</span>
            <span className="text-xl font-bold text-brand-burgundy font-primary">Blessings</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-brand-taupe hover:text-brand-burgundy transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/builder"
            className="bg-brand-gold text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-gold/90 transition-colors shadow-sm"
          >
            Start Building
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-burgundy mt-auto relative overflow-hidden">
      {/* Paisley border strip across top */}
      <div className="motif-footer-border" />
      {/* Diamond lattice background pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'url(/motifs/diamond-lattice.svg)', backgroundRepeat: 'repeat', backgroundSize: '100px' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎁</span>
              <span className="text-lg font-bold text-white font-primary">Blessings</span>
            </div>
            <p className="text-brand-gold-light/80 text-sm max-w-md leading-relaxed">
              The perfect gift is out there. We'll find it. Thoughtful gifting, zero effort — every hamper hand-curated and delivered with love.
            </p>
            <p className="text-brand-gold-light/60 text-xs mt-4 italic">
              "The Lord bless you and keep you" — Numbers 6:24
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4 font-primary">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-brand-gold-light/70 hover:text-brand-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand-gold uppercase tracking-wider mb-4 font-primary">Contact</h3>
            <ul className="space-y-2 text-brand-gold-light/70 text-sm">
              <li>hello@blessings.gifts</li>
              <li>1-800-BLESSINGS</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-gold/20 mt-8 pt-8 text-center text-brand-gold-light/50 text-sm">
          &copy; {new Date().getFullYear()} Blessings. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
