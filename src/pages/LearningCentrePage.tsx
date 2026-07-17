import { BookOpen } from 'lucide-react'

export default function LearningCentrePage() {
  const articles = [
    'How to Start a Business in PNG',
    'Business Ideas in PNG',
    'Pricing Your Products',
    'Marketing Your Business',
    'Social Media for Business',
    'Cash Flow Management',
    'Bookkeeping Basics',
    'Hiring and Managing Staff',
    'Growing Your Business',
    'Exporting from PNG',
    'Digital Business Opportunities',
    'Artificial Intelligence for Business',
    'Cybersecurity for Small Business',
    'Customer Service Excellence',
    'Business Planning',
    'Financial Management',
    'Tax Planning',
    'Business Compliance',
    'Risk Management',
    'Business Succession Planning',
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Learning Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Articles and guides on business management and growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl border-l-4 border-png-red transition"
            >
              <div className="mb-4">
                <BookOpen className="w-8 h-8 text-png-red" />
              </div>
              <h3 className="text-lg font-bold text-png-black mb-3">
                {article}
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive guide to help you succeed in this area of business management
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
