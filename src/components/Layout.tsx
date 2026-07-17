import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const { logout } = useAuth()
  const location = useLocation()

  const navItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Invoices', href: '/invoices' },
    { label: 'Expenses', href: '/expenses' },
    { label: 'Reports', href: '/reports' },
    { label: 'Cash Flow', href: '/cash-flow' },
    { label: 'Learning', href: '/financial-literacy' },
    { label: 'Settings', href: '/settings' },
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold">FinTrack</h1>
          <p className="text-blue-200 text-sm">PNG Accounting</p>
        </div>

        <nav className="space-y-2 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`block px-4 py-2 rounded-lg transition ${
                isActive(item.href)
                  ? 'bg-blue-800 text-white'
                  : 'text-blue-100 hover:bg-blue-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-blue-800">
          <button
            onClick={logout}
            className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  )
}
