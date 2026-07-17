import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function BusinessStructuresPage() {
  const structures = [
    {
      name: 'Sole Trader',
      description: 'Self-employed individual operating a business alone',
      advantages: 'Simple setup, full control, minimal paperwork',
      disadvantages: 'Unlimited liability, limited growth potential',
    },
    {
      name: 'Partnership',
      description: 'Two or more people running a business together',
      advantages: 'Shared responsibility, combined resources',
      disadvantages: 'Joint liability, potential disputes',
    },
    {
      name: 'Limited Company',
      description: 'Formal business structure with separate legal entity',
      advantages: 'Limited liability, credibility, tax benefits',
      disadvantages: 'More complex, higher costs, more regulations',
    },
    {
      name: 'Landowner Company',
      description: 'Company structure specific to PNG landowners',
      advantages: 'Protects customary land rights',
      disadvantages: 'Complex requirements, specific to PNG',
    },
    {
      name: 'Cooperative',
      description: 'Member-owned business for mutual benefit',
      advantages: 'Democratic control, shared profits',
      disadvantages: 'Complex governance, slower decisions',
    },
    {
      name: 'Foreign Company',
      description: 'International company operating in PNG',
      advantages: 'Established brand, resources',
      disadvantages: 'Regulatory requirements, foreign ownership rules',
    },
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Business Structures
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Choose the right business structure for your PNG business. Each has different advantages, disadvantages, and requirements.
          </p>
        </div>

        {/* Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {structures.map((structure, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 sm:p-8 transition border-l-4 border-png-red"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-png-black mb-3">
                {structure.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {structure.description}
              </p>
              
              <div className="space-y-3 mb-6 text-sm">
                <div>
                  <p className="font-semibold text-png-red">Advantages:</p>
                  <p className="text-gray-600">{structure.advantages}</p>
                </div>
                <div>
                  <p className="font-semibold text-png-red">Disadvantages:</p>
                  <p className="text-gray-600">{structure.disadvantages}</p>
                </div>
              </div>

              <button className="w-full px-4 py-2 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition flex items-center justify-center">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 bg-png-red text-white rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not sure which structure is right for you?
          </h2>
          <p className="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
            Use our interactive setup wizard to get personalized recommendations based on your business type and goals.
          </p>
          <Link
            to="/setup-wizard"
            className="inline-flex items-center px-8 py-4 bg-png-gold text-png-black font-bold rounded-lg hover:bg-white transition"
          >
            Start Setup Wizard <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
