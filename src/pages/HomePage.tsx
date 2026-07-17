import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, DollarSign, FileText, Zap, Users, TrendingUp, HelpCircle } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Business Registration',
      description: 'Step-by-step guides for IPA, TIN, IRC, and GST registration with forms and checklists',
      link: '/registration',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Tax & Finance',
      description: 'Tax calculators, finance tools, and complete compliance guides for PNG businesses',
      link: '/tax',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Industry Guides',
      description: 'Detailed requirements for 40+ PNG industries with licenses and compliance checklists',
      link: '/industries',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Business Setup Wizard',
      description: 'Interactive questionnaire for personalized guidance and compliance checklists',
      link: '/setup-wizard',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Financial Tools',
      description: 'Complete calculators for cash flow, budgets, break-even, and profitability analysis',
      link: '/finance',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Government Directory',
      description: 'Contact details and information for all PNG government agencies',
      link: '/government',
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'AI Business Assistant',
      description: 'Get instant answers to your PNG business questions with personalized recommendations',
      link: '/assistant',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning Centre',
      description: 'Comprehensive articles and guides on all aspects of business management',
      link: '/learn',
    },
  ]

  const stats = [
    { number: '40+', label: 'Industry Guides' },
    { number: '100+', label: 'Resources' },
    { number: '15+', label: 'Registration Types' },
    { number: '24/7', label: 'AI Support' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-png-black via-png-dark to-png-black text-white py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Start and Grow Your Business in Papua New Guinea
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Everything you need to register, operate, finance, and grow a successful business in PNG. From registration to tax compliance, we've got you covered.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12">
              <Link
                to="/setup-wizard"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-png-red hover:bg-png-gold hover:text-png-black text-white font-bold rounded-lg transition transform hover:scale-105"
              >
                Start a Business <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/industries"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-png-gold text-png-black hover:bg-white font-bold rounded-lg transition transform hover:scale-105"
              >
                Find Business Requirements <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/finance"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-png-gold text-png-gold hover:bg-png-gold hover:text-png-black font-bold rounded-lg transition"
              >
                Business Tools
              </Link>
              <Link
                to="/assistant"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-png-red text-png-red hover:bg-png-red hover:text-white font-bold rounded-lg transition"
              >
                AI Business Assistant
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-png-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive resources, tools, and guidance for every stage of your business journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:border-png-red border-2 border-transparent transition transform hover:scale-105"
              >
                <div className="text-png-red mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-png-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-png-red font-semibold text-sm hover:text-png-gold transition">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-8 sm:mb-12">
            PNG Business at a Glance
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-png-red mb-4">Key Registration Steps</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">1.</span>
                  <div>
                    <p className="font-semibold">IPA Registration</p>
                    <p className="text-sm text-gray-600">5-10 days | K50-K200</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">2.</span>
                  <div>
                    <p className="font-semibold">TIN Registration</p>
                    <p className="text-sm text-gray-600">1-3 days | Free</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">3.</span>
                  <div>
                    <p className="font-semibold">IRC Registration</p>
                    <p className="text-sm text-gray-600">3-5 days | Free</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">4.</span>
                  <div>
                    <p className="font-semibold">GST Registration (if needed)</p>
                    <p className="text-sm text-gray-600">5-10 days | Free</p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-png-red mb-4">PNG Tax Overview</h3>
              <div className="space-y-3">
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-1">GST (Goods & Services Tax)</p>
                  <p className="text-sm text-gray-700">10% on most goods and services</p>
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-1">IRC Tax (Company Profit)</p>
                  <p className="text-sm text-gray-700">30% on company profits</p>
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-1">Income Tax (Individual)</p>
                  <p className="text-sm text-gray-700">5% - 20% progressive rates</p>
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-1">Withholding Tax</p>
                  <p className="text-sm text-gray-700">5% - 30% on various payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-png-red text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-base sm:text-lg text-gray-100 mb-8 sm:mb-12">
            Use our interactive setup wizard to get personalized guidance based on your business idea and location
          </p>
          <Link
            to="/setup-wizard"
            className="inline-flex items-center px-8 py-4 bg-png-gold text-png-black font-bold rounded-lg hover:bg-white transition transform hover:scale-105"
          >
            Start the Setup Wizard <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-png-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-4">
              Free Resources Available
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Download templates, access guides, and learn from our comprehensive resource library
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-png-red mb-2">20+</div>
              <p className="text-lg font-semibold text-png-black mb-2">Business Templates</p>
              <p className="text-gray-600 mb-4">Plans, budgets, invoices, payroll, and more</p>
              <Link to="/downloads" className="text-png-red font-semibold hover:text-png-gold transition">
                Browse Templates <ArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-png-red mb-2">20+</div>
              <p className="text-lg font-semibold text-png-black mb-2">Learning Articles</p>
              <p className="text-gray-600 mb-4">Business management and growth guides</p>
              <Link to="/learn" className="text-png-red font-semibold hover:text-png-gold transition">
                Read Articles <ArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-png-red mb-2">40+</div>
              <p className="text-lg font-semibold text-png-black mb-2">Industry Guides</p>
              <p className="text-gray-600 mb-4">Specific requirements for PNG industries</p>
              <Link to="/industries" className="text-png-red font-semibold hover:text-png-gold transition">
                View Industries <ArrowRight className="inline ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
