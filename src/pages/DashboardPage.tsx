import { Link } from 'react-router-dom'
import { User, Bookmark, FileText, CheckCircle, Bell, Download } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-png-black mb-2">
            Welcome Back, User!
          </h1>
          <p className="text-gray-600">Manage your business resources and progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <User className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Profile</h3>
            <p className="text-gray-600 text-sm">Manage your business information</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Bookmark className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Bookmarks</h3>
            <p className="text-gray-600 text-sm">Your saved guides and resources</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <FileText className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Saved Progress</h3>
            <p className="text-gray-600 text-sm">Your setup wizard progress</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <CheckCircle className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Checklists</h3>
            <p className="text-gray-600 text-sm">Your compliance checklists</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Bell className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Tax Reminders</h3>
            <p className="text-gray-600 text-sm">Upcoming tax deadlines</p>
          </Link>

          <Link
            to="#"
            className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg border-l-4 border-png-red transition"
          >
            <Download className="w-8 h-8 text-png-red mb-4" />
            <h3 className="text-lg font-bold text-png-black mb-2">Downloads</h3>
            <p className="text-gray-600 text-sm">Your downloaded templates</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
