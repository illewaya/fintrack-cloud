import { Phone, Mail, Globe, MapPin } from 'lucide-react'

export default function GovernmentDirectoryPage() {
  const agencies = [
    {
      name: 'Investment Promotion Authority (IPA)',
      description: 'Business registration and investment promotion',
      phone: '+675 309 4111',
      email: 'info@ipa.gov.pg',
      website: 'www.ipa.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'Internal Revenue Commission (IRC)',
      description: 'Tax administration and compliance',
      phone: '+675 309 8000',
      email: 'info@irc.gov.pg',
      website: 'www.irc.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'Bank of Papua New Guinea',
      description: 'Central banking and financial regulation',
      phone: '+675 320 7000',
      email: 'info@bankpng.gov.pg',
      website: 'www.bankpng.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'National Fisheries Authority',
      description: 'Fisheries licensing and management',
      phone: '+675 309 8600',
      email: 'info@nfa.gov.pg',
      website: 'www.nfa.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'PNG Customs',
      description: 'Import/export and customs clearance',
      phone: '+675 309 7000',
      email: 'info@customs.gov.pg',
      website: 'www.customs.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'Department of Labour',
      description: 'Employment and workplace relations',
      phone: '+675 301 3600',
      email: 'info@labour.gov.pg',
      website: 'www.labour.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'SME Corporation',
      description: 'Small and medium enterprise support',
      phone: '+675 309 5000',
      email: 'info@smecorp.gov.pg',
      website: 'www.smecorp.gov.pg',
      address: 'Port Moresby, NCD',
    },
    {
      name: 'Women\'s Micro Bank',
      description: 'Microfinance for women entrepreneurs',
      phone: '+675 321 1234',
      email: 'info@wmb.com.pg',
      website: 'www.wmb.com.pg',
      address: 'Port Moresby, NCD',
    },
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Government Directory
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Contact details for PNG government agencies and organizations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {agencies.map((agency, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-png-red hover:shadow-lg transition"
            >
              <h3 className="text-lg sm:text-xl font-bold text-png-black mb-2">
                {agency.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {agency.description}
              </p>

              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-png-red mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{agency.phone}</span>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-png-red mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{agency.email}</span>
                </div>
                <div className="flex items-start">
                  <Globe className="w-5 h-5 text-png-red mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{agency.website}</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-png-red mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{agency.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
