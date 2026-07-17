import { useState } from 'react'
import { Search, ChevronDown, ChevronUp } from 'lucide-react'

export default function IndustriesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const industries = [
    {
      id: 'retail',
      name: 'Retail Store',
      licenses: ['Business License', 'Trade License', 'Health Certificate'],
      permits: ['Local Council Approval', 'Fire Safety Certificate'],
      startup: 'K10,000 - K50,000',
      employees: '1-5',
      requirements: ['Premises lease/ownership', 'Product sourcing', 'POS system', 'Insurance']
    },
    {
      id: 'restaurant',
      name: 'Restaurant',
      licenses: ['Food Business License', 'Health Certificate', 'Liquor License (if applicable)'],
      permits: ['Health Department Approval', 'Fire Safety Certificate', 'Environmental Approval'],
      startup: 'K50,000 - K200,000',
      employees: '5-20',
      requirements: ['Commercial kitchen', 'Food handler training', 'Waste management plan', 'Staff uniforms']
    },
    {
      id: 'cafe',
      name: 'Cafe',
      licenses: ['Food Business License', 'Health Certificate'],
      permits: ['Health Department Approval', 'Fire Safety'],
      startup: 'K20,000 - K80,000',
      employees: '2-8',
      requirements: ['Commercial space', 'Coffee machine', 'Food preparation area', 'Seating']
    },
    {
      id: 'construction',
      name: 'Construction Company',
      licenses: ['Contractor License', 'Business License'],
      permits: ['Project Permits', 'Safety Certification', 'Environmental Approval'],
      startup: 'K100,000 - K500,000',
      employees: '10-50',
      requirements: ['Equipment', 'Insurance', 'Safety gear', 'Skilled workers']
    },
    {
      id: 'it',
      name: 'IT Company',
      licenses: ['Business License', 'Software Licenses'],
      permits: ['Data Protection Compliance'],
      startup: 'K10,000 - K50,000',
      employees: '2-10',
      requirements: ['Office space', 'Computers', 'Software', 'Internet connection']
    },
    {
      id: 'transport',
      name: 'Transport Company',
      licenses: ['Transport License', 'Vehicle Registration'],
      permits: ['Road Safety Certification', 'Insurance'],
      startup: 'K50,000 - K300,000',
      employees: '5-20',
      requirements: ['Vehicles', 'Fuel storage', 'Maintenance facility', 'Drivers']
    },
    {
      id: 'agriculture',
      name: 'Agriculture Business',
      licenses: ['Agricultural License', 'Land Use Certificate'],
      permits: ['Environmental Approval', 'Pesticide License (if applicable)'],
      startup: 'K20,000 - K100,000',
      employees: '2-10',
      startup: 'K20,000 - K100,000',
      requirements: ['Land', 'Seeds/seedlings', 'Tools', 'Water supply']
    },
    {
      id: 'salon',
      name: 'Beauty Salon',
      licenses: ['Health License', 'Business License'],
      permits: ['Health Department Approval'],
      startup: 'K15,000 - K60,000',
      employees: '2-6',
      requirements: ['Salon chairs', 'Equipment', 'Sterilization', 'Products']
    },
    {
      id: 'mechanic',
      name: 'Mechanic Workshop',
      licenses: ['Mechanical License', 'Business License'],
      permits: ['Safety Certification', 'Environmental Approval'],
      startup: 'K30,000 - K150,000',
      employees: '2-8',
      requirements: ['Workshop space', 'Tools', 'Lift', 'Safety equipment']
    },
    {
      id: 'accounting',
      name: 'Accounting Firm',
      licenses: ['Professional License', 'Business License'],
      permits: ['Accounting Standards Compliance'],
      startup: 'K5,000 - K30,000',
      employees: '1-5',
      requirements: ['Office', 'Accounting software', 'Professional qualifications']
    },
    {
      id: 'consulting',
      name: 'Consulting Firm',
      licenses: ['Business License', 'Professional License'],
      permits: ['Industry-specific certifications'],
      startup: 'K5,000 - K50,000',
      employees: '1-10',
      requirements: ['Office', 'Expertise', 'Professional network']
    },
    {
      id: 'hotel',
      name: 'Hotel',
      licenses: ['Hotel License', 'Health Certificate'],
      permits: ['Fire Safety', 'Environmental Approval', 'Tourism License'],
      startup: 'K200,000 - K1,000,000+',
      employees: '20-100',
      requirements: ['Property', 'Furniture', 'Kitchen', 'Staff training']
    },
    {
      id: 'tourism',
      name: 'Tourism Operator',
      licenses: ['Tourism License', 'Guide License'],
      permits: ['Environmental Approval', 'Safety Certification'],
      startup: 'K30,000 - K150,000',
      employees: '2-10',
      requirements: ['Transport', 'Insurance', 'Guides', 'Permits']
    },
    {
      id: 'fishing',
      name: 'Fishing Business',
      licenses: ['Fishing License', 'Boat Registration'],
      permits: ['Environmental Approval', 'Fisheries Permit'],
      startup: 'K50,000 - K300,000',
      employees: '3-15',
      requirements: ['Boat', 'Equipment', 'Crew', 'Storage']
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing',
      licenses: ['Manufacturing License', 'Business License'],
      permits: ['Safety Certification', 'Environmental Approval', 'Quality Standards'],
      startup: 'K100,000 - K500,000+',
      employees: '10-50',
      requirements: ['Factory', 'Machinery', 'Raw materials', 'Quality control']
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Business',
      licenses: ['Business License', 'Online Trading License'],
      permits: ['Data Protection Compliance', 'Payment Processing'],
      startup: 'K5,000 - K30,000',
      employees: '1-5',
      requirements: ['Website', 'Payment gateway', 'Inventory', 'Shipping']
    },
    {
      id: 'freelancer',
      name: 'Freelancer',
      licenses: ['Business License'],
      permits: ['Tax Registration'],
      startup: 'K1,000 - K10,000',
      employees: 'Self-employed',
      requirements: ['Skills', 'Portfolio', 'Computer', 'Internet']
    },
    {
      id: 'marketing',
      name: 'Digital Marketing Agency',
      licenses: ['Business License'],
      permits: ['Industry Compliance'],
      startup: 'K10,000 - K50,000',
      employees: '2-10',
      requirements: ['Office', 'Software', 'Expertise', 'Portfolio']
    },
    {
      id: 'realtor',
      name: 'Real Estate Agency',
      licenses: ['Real Estate License', 'Business License'],
      permits: ['Professional Certification'],
      startup: 'K20,000 - K100,000',
      employees: '2-10',
      requirements: ['Office', 'Property listings', 'Marketing', 'Insurance']
    },
    {
      id: 'pharmacy',
      name: 'Pharmacy',
      licenses: ['Pharmacy License', 'Health Certificate'],
      permits: ['Drug Authority Approval', 'Health Department'],
      startup: 'K50,000 - K200,000',
      employees: '2-6',
      requirements: ['Pharmacist', 'Inventory', 'Cold storage', 'Compliance']
    }
  ]

  const filteredIndustries = industries.filter(industry =>
    industry.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            PNG Industry Guides
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Find detailed requirements, licenses, and permits for {industries.length}+ PNG industries
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 sm:mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-3 sm:top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg focus:border-png-red focus:outline-none"
            />
          </div>
        </div>

        {/* Industries List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredIndustries.map((industry) => (
            <div
              key={industry.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-png-red"
            >
              <button
                onClick={() => toggleExpanded(industry.id)}
                className="w-full p-6 sm:p-8 text-left hover:bg-png-light transition flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-png-black mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Startup: {industry.startup} | Employees: {industry.employees}
                  </p>
                </div>
                {expandedId === industry.id ? (
                  <ChevronUp className="w-6 h-6 text-png-red flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-png-red flex-shrink-0 ml-4" />
                )}
              </button>

              {expandedId === industry.id && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 space-y-6">
                  {/* Licenses */}
                  <div>
                    <h4 className="font-bold text-png-black mb-3">Required Licenses</h4>
                    <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      {industry.licenses.map((license, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-png-red font-bold mr-3">•</span>
                          <span>{license}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Permits */}
                  <div>
                    <h4 className="font-bold text-png-black mb-3">Required Permits</h4>
                    <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      {industry.permits.map((permit, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-png-red font-bold mr-3">•</span>
                          <span>{permit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-bold text-png-black mb-3">Key Requirements</h4>
                    <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      {industry.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-png-red font-bold mr-3">✓</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Download */}
                  <button className="w-full px-6 py-3 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition">
                    Download {industry.name} Checklist
                  </button>
                </div>
              )}
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

        {/* Info Box */}
        <div className="mt-12 sm:mt-16 bg-png-red text-white p-8 sm:p-12 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Industry-Specific Guidance
          </h2>
          <p className="mb-4 text-base sm:text-lg">
            Each industry has unique requirements. Use the guides above to understand:
          </p>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>• All licenses and permits required</li>
            <li>• Typical startup costs and timeframes</li>
            <li>• Key equipment and resources needed</li>
            <li>• Compliance and safety requirements</li>
            <li>• Staffing and training needs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
