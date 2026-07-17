import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-png-light flex items-center justify-center py-8 sm:py-12 lg:py-16">
      <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl font-bold text-png-red mb-4">404</h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-8">
            Sorry, the page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </div>

        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition transform hover:scale-105"
        >
          <Home className="w-5 h-5 mr-2" />
          Go to Home <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  )
}
