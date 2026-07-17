import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { label: 'Setup Wizard', path: '/setup-wizard' },
    { label: 'Business Structures', path: '/business-structures' },
    { label: 'Industries', path: '/industries' },
    { label: 'Registration', path: '/registration' },
    { label: 'Tax Centre', path: '/tax' },
    { label: 'Finance', path: '/finance' },
    { label: 'Downloads', path: '/downloads' },
    { label: 'Learning', path: '/learn' },
    { label: 'Government', path: '/government' },
    { label: 'Funding', path: '/funding' },
    { label: 'AI Assistant', path: '/assistant' },
  ]

  return (
    <nav className="bg-png-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl hover:text-png-gold transition">
            <div className="w-8 h-8 bg-png-gold rounded-lg flex items-center justify-center text-png-black font-bold">
              FT
            </div>
            <span className="hidden sm:inline">FinTrack PNG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="px-3 py-2 text-sm font-medium hover:bg-png-red hover:text-white rounded transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="px-4 py-2 text-sm font-medium hover:text-png-gold transition"
            >
              Dashboard
            </Link>
            <Link
              to="/admin"
              className="px-4 py-2 text-sm font-medium bg-png-red hover:bg-png-gold hover:text-png-black rounded transition"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 hover:bg-png-red rounded transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-png-red">
            <div className="space-y-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2 hover:bg-png-red rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-png-red pt-4 mt-4 space-y-2">
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-png-red rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin"
                  className="block px-4 py-2 bg-png-red hover:bg-png-gold hover:text-png-black rounded transition"
                  onClick={() => setIsOpen(false)}
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
