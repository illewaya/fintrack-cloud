import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Resources',
      links: [
        { label: 'Setup Wizard', path: '/setup-wizard' },
        { label: 'Business Structures', path: '/business-structures' },
        { label: 'Industries', path: '/industries' },
        { label: 'Downloads', path: '/downloads' },
      ],
    },
    {
      title: 'Guides',
      links: [
        { label: 'Registration', path: '/registration' },
        { label: 'Tax Centre', path: '/tax' },
        { label: 'Finance', path: '/finance' },
        { label: 'Learning', path: '/learn' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Government Directory', path: '/government' },
        { label: 'Funding Centre', path: '/funding' },
        { label: 'AI Assistant', path: '/assistant' },
        { label: 'Dashboard', path: '/dashboard' },
      ],
    },
  ]

  return (
    <footer className="bg-png-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-png-gold rounded-lg flex items-center justify-center text-png-black font-bold">
                FT
              </div>
              <h3 className="text-xl font-bold">FinTrack PNG</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              The comprehensive resource for starting, registering, and growing a business in Papua New Guinea.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Port Moresby, Papua New Guinea</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@fintrackpng.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+675 XXX XXXX</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-png-gold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-png-gold transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-png-red my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {currentYear} FinTrack PNG. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-png-gold transition">Privacy Policy</a>
            <a href="#" className="hover:text-png-gold transition">Terms of Service</a>
            <a href="#" className="hover:text-png-gold transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
