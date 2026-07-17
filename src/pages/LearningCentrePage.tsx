import { BookOpen, ArrowRight } from 'lucide-react'

export default function LearningCentrePage() {
  const articles = [
    {
      title: 'How to Start a Business in PNG',
      description: 'Complete guide to starting your business from registration to first sale',
      category: 'Getting Started',
      readTime: '15 min'
    },
    {
      title: 'Business Ideas in PNG',
      description: 'Explore profitable business opportunities suitable for PNG market',
      category: 'Business Ideas',
      readTime: '12 min'
    },
    {
      title: 'Pricing Your Products',
      description: 'Learn pricing strategies to maximize profit while staying competitive',
      category: 'Sales & Marketing',
      readTime: '10 min'
    },
    {
      title: 'Marketing Your Business',
      description: 'Effective marketing strategies for PNG businesses with limited budget',
      category: 'Sales & Marketing',
      readTime: '14 min'
    },
    {
      title: 'Social Media for Business',
      description: 'Use social media platforms to promote and grow your business',
      category: 'Digital Marketing',
      readTime: '11 min'
    },
    {
      title: 'Cash Flow Management',
      description: 'Master cash flow to keep your business financially healthy',
      category: 'Finance',
      readTime: '13 min'
    },
    {
      title: 'Bookkeeping Basics',
      description: 'Essential bookkeeping practices for small businesses',
      category: 'Finance',
      readTime: '12 min'
    },
    {
      title: 'Hiring and Managing Staff',
      description: 'Best practices for recruiting, training, and managing employees',
      category: 'HR & Management',
      readTime: '15 min'
    },
    {
      title: 'Growing Your Business',
      description: 'Strategies for scaling and expanding your business operations',
      category: 'Growth',
      readTime: '16 min'
    },
    {
      title: 'Exporting from PNG',
      description: 'Guide to exporting PNG products to international markets',
      category: 'International Trade',
      readTime: '14 min'
    },
    {
      title: 'Digital Business Opportunities',
      description: 'Online business models and e-commerce opportunities',
      category: 'Digital Business',
      readTime: '13 min'
    },
    {
      title: 'Artificial Intelligence for Business',
      description: 'How AI can improve efficiency and productivity in your business',
      category: 'Technology',
      readTime: '12 min'
    },
    {
      title: 'Cybersecurity for Small Business',
      description: 'Protect your business from cyber threats and data breaches',
      category: 'Technology',
      readTime: '11 min'
    },
    {
      title: 'Customer Service Excellence',
      description: 'Build loyal customers through exceptional service',
      category: 'Customer Relations',
      readTime: '10 min'
    },
    {
      title: 'Business Planning',
      description: 'Create a comprehensive business plan for success',
      category: 'Planning',
      readTime: '14 min'
    },
    {
      title: 'Financial Management',
      description: 'Manage finances effectively for business growth',
      category: 'Finance',
      readTime: '13 min'
    },
    {
      title: 'Tax Planning',
      description: 'Strategies to minimize tax liability legally',
      category: 'Finance',
      readTime: '12 min'
    },
    {
      title: 'Business Compliance',
      description: 'Stay compliant with PNG business regulations',
      category: 'Legal & Compliance',
      readTime: '11 min'
    },
    {
      title: 'Risk Management',
      description: 'Identify and mitigate business risks',
      category: 'Management',
      readTime: '13 min'
    },
    {
      title: 'Business Succession Planning',
      description: 'Plan for the future of your business',
      category: 'Planning',
      readTime: '12 min'
    }
  ]

  const categories = ['All', 'Getting Started', 'Finance', 'Sales & Marketing', 'HR & Management', 'Growth', 'Technology', 'Planning']

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Learning Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Articles and guides on business management and growth for PNG entrepreneurs
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-png-red text-png-red hover:bg-png-red hover:text-white transition font-semibold text-sm sm:text-base"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl border-l-4 border-png-red transition"
            >
              <div className="flex items-start justify-between mb-4">
                <BookOpen className="w-8 h-8 text-png-red flex-shrink-0" />
                <span className="text-xs font-bold text-png-gold bg-png-light px-2 py-1 rounded">
                  {article.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-png-black mb-3">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {article.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                <span>{article.readTime} read</span>
              </div>
              <button className="w-full px-4 py-2 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition flex items-center justify-center gap-2 text-sm sm:text-base">
                Read Article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <section className="bg-white p-8 sm:p-12 rounded-lg shadow-md border-l-4 border-png-red mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-6">
            Popular Articles This Month
          </h2>
          <div className="space-y-4">
            {articles.slice(0, 5).map((article, index) => (
              <div key={index} className="flex items-start justify-between p-4 hover:bg-png-light rounded-lg transition cursor-pointer">
                <div className="flex-1">
                  <h3 className="font-bold text-png-black mb-1">{article.title}</h3>
                  <p className="text-sm text-gray-600">{article.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-png-red flex-shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="bg-png-red text-white p-8 sm:p-12 rounded-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Recommended Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-png-dark p-6 rounded-lg">
              <div className="text-2xl font-bold mb-3">1</div>
              <h3 className="font-bold mb-2">Getting Started</h3>
              <p className="text-sm text-png-light">Learn how to start your business</p>
            </div>
            <div className="bg-png-dark p-6 rounded-lg">
              <div className="text-2xl font-bold mb-3">2</div>
              <h3 className="font-bold mb-2">Operations</h3>
              <p className="text-sm text-png-light">Master daily business operations</p>
            </div>
            <div className="bg-png-dark p-6 rounded-lg">
              <div className="text-2xl font-bold mb-3">3</div>
              <h3 className="font-bold mb-2">Finance</h3>
              <p className="text-sm text-png-light">Manage money and profitability</p>
            </div>
            <div className="bg-png-dark p-6 rounded-lg">
              <div className="text-2xl font-bold mb-3">4</div>
              <h3 className="font-bold mb-2">Growth</h3>
              <p className="text-sm text-png-light">Scale and expand your business</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Subscribe to our newsletter for weekly business tips and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 border-2 border-png-red rounded-lg focus:outline-none focus:border-png-gold flex-1 sm:flex-none sm:w-64"
            />
            <button className="px-8 py-3 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
