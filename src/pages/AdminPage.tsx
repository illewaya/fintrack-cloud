import { Link } from 'react-router-dom'
import { FileText, Users, Download, BarChart3, Mail, Settings } from 'lucide-react'

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-png-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600">Manage FinTrack PNG content and users</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <FileText className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Content Management</h3>
            <p className="text-gray-600 text-sm">Publish and edit guides</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Users className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">User Management</h3>
            <p className="text-gray-600 text-sm">Manage member accounts</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Download className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Downloads</h3>
            <p className="text-gray-600 text-sm">Manage templates</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <BarChart3 className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm">View usage statistics</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Mail className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Newsletters</h3>
            <p className="text-gray-600 text-sm">Send updates to users</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Settings className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Settings</h3>
            <p className="text-gray-600 text-sm">System configuration</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
