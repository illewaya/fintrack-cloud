import { useState } from 'react'
import { Search } from 'lucide-react'

export default function IndustriesPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const industries = [
    'Retail Store', 'Restaurant', 'Cafe', 'Bakery', 'Trade Store', 'Hardware',
    'Wholesale', 'Construction Company', 'Electrical Contractor', 'Plumbing Business',
    'Cleaning Company', 'Security Company', 'Transport Company', 'Taxi', 'PMV',
    'Tourism Operator', 'Hotel', 'Guest House', 'Travel Agency', 'Fishing Business',
    'Agriculture', 'Coffee Farm', 'Cocoa Farm', 'Vanilla Farm', 'Palm Oil',
    'Livestock', 'Market Vendor', 'Food Stall', 'Manufacturing', 'IT Company',
    'Accounting Firm', 'Consulting Firm', 'Law Firm', 'Medical Clinic', 'Dental Clinic',
    'Pharmacy', 'Beauty Salon', 'Barbershop', 'Mechanic Workshop', 'Auto Dealer',
    'Fuel Station', 'Real Estate Agency', 'Mining Contractor', 'Logging Contractor',
    'Freelancer', 'Online Business', 'Dropshipping', 'E-commerce', 'Digital Marketing Agency',
    'Graphic Design Business', 'Photography', 'Videography', 'Event Management',
  ]

  const filteredIndustries = industries.filter(industry =>
    industry.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Industry Guides
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Find detailed requirements, licenses, permits, and compliance checklists for {industries.length}+ PNG industries
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3 sm:top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg focus:border-png-red focus:outline-none text-base sm:text-lg"
            />
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredIndustries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl border-l-4 border-png-red transition"
            >
              <h3 className="text-lg sm:text-xl font-bold text-png-black mb-2">
                {industry}
              </h3>
              <p className="text-gray-600 text-sm">
                Requires licenses, permits, and compliance checklist
              </p>
            </div>
          ))}
        </div>

        {filteredIndustries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No industries found matching "{searchTerm}". Try a different search term.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 sm:mt-16 bg-white rounded-lg p-8 sm:p-12 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-4">
            Each Industry Guide Includes:
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600">
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Required licenses and permits</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Government approvals needed</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Safety and health requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Insurance requirements</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Employment obligations</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Environmental approvals</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Typical startup costs</span>
            </li>
            <li className="flex items-start">
              <span className="text-png-red font-bold mr-3">✓</span>
              <span>Compliance checklist</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
