import { useState } from 'react'
import { ChevronDown, ChevronUp, Clock, DollarSign, FileText } from 'lucide-react'

export default function RegistrationPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const registrations = [
    {
      id: 'ipa',
      title: 'IPA Registration',
      description: 'Investment Promotion Authority - Register your business',
      processingTime: '5-10 business days',
      cost: 'K50-K200',
      documents: ['Business plan', 'Proof of identity', 'Proof of address', 'Financial projections'],
    },
    {
      id: 'tin',
      title: 'TIN Registration',
      description: 'Tax Identification Number - Required for tax purposes',
      processingTime: '1-3 business days',
      cost: 'Free',
      documents: ['IPA registration', 'Proof of identity', 'Business details form'],
    },
    {
      id: 'irc',
      title: 'IRC Registration',
      description: 'Internal Revenue Commission - Tax registration',
      processingTime: '3-5 business days',
      cost: 'Free',
      documents: ['TIN', 'Business structure documents', 'Proof of address'],
    },
    {
      id: 'gst',
      title: 'GST Registration',
      description: 'Goods and Services Tax - Required if turnover exceeds K250,000',
      processingTime: '5-10 business days',
      cost: 'Free',
      documents: ['IRC registration', 'Financial statements', 'Business plan'],
    },
    {
      id: 'employer',
      title: 'Employer Registration',
      description: 'Register as an employer if you have employees',
      processingTime: '3-7 business days',
      cost: 'Free',
      documents: ['IPA registration', 'Employee details', 'Payroll system info'],
    },
    {
      id: 'superannuation',
      title: 'Superannuation Registration',
      description: 'Set up employee superannuation scheme',
      processingTime: '7-14 business days',
      cost: 'Varies',
      documents: ['Employer registration', 'Superannuation scheme details', 'Employee list'],
    },
    {
      id: 'bank',
      title: 'Bank Account',
      description: 'Open a business bank account',
      processingTime: '1-5 business days',
      cost: 'Free',
      documents: ['IPA registration', 'Proof of identity', 'Proof of address', 'TIN'],
    },
    {
      id: 'insurance',
      title: 'Business Insurance',
      description: 'Get appropriate business insurance',
      processingTime: '1-3 business days',
      cost: 'Varies',
      documents: ['Business details', 'Asset list', 'Risk assessment'],
    },
    {
      id: 'import',
      title: 'Import Licence',
      description: 'License required if importing goods',
      processingTime: '10-15 business days',
      cost: 'K100-K500',
      documents: ['IPA registration', 'Business plan', 'Supplier details', 'Product list'],
    },
    {
      id: 'export',
      title: 'Export Licence',
      description: 'License required if exporting goods',
      processingTime: '10-15 business days',
      cost: 'K100-K500',
      documents: ['IPA registration', 'Product details', 'Quality certificates', 'Customer list'],
    },
  ]

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Registration Guides
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Step-by-step guides for all PNG business registrations
          </p>
        </div>

        {/* Registration List */}
        <div className="space-y-4 sm:space-y-6">
          {registrations.map((reg) => (
            <div
              key={reg.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-png-red"
            >
              <button
                onClick={() => toggleExpanded(reg.id)}
                className="w-full p-6 sm:p-8 text-left hover:bg-png-light transition flex justify-between items-start"
              >
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-png-black mb-2">
                    {reg.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {reg.description}
                  </p>
                </div>
                {expandedId === reg.id ? (
                  <ChevronUp className="w-6 h-6 text-png-red flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-png-red flex-shrink-0 ml-4" />
                )}
              </button>

              {expandedId === reg.id && (
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 space-y-6">
                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-png-light p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-png-red mr-2" />
                        <span className="font-semibold text-png-black">Processing Time</span>
                      </div>
                      <p className="text-gray-600 text-sm">{reg.processingTime}</p>
                    </div>
                    <div className="bg-png-light p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <DollarSign className="w-5 h-5 text-png-red mr-2" />
                        <span className="font-semibold text-png-black">Cost</span>
                      </div>
                      <p className="text-gray-600 text-sm">{reg.cost}</p>
                    </div>
                    <div className="bg-png-light p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        <FileText className="w-5 h-5 text-png-red mr-2" />
                        <span className="font-semibold text-png-black">Documents</span>
                      </div>
                      <p className="text-gray-600 text-sm">{reg.documents.length} required</p>
                    </div>
                  </div>

                  {/* Required Documents */}
                  <div>
                    <h4 className="font-bold text-png-black mb-3">Required Documents:</h4>
                    <ul className="space-y-2">
                      {reg.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-png-red font-bold mr-3">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Mistakes */}
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-png-black mb-2">Common Mistakes to Avoid:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Incomplete or incorrect documentation</li>
                      <li>• Missing signatures or dates</li>
                      <li>• Applying without proper business structure</li>
                      <li>• Not following up on application status</li>
                    </ul>
                  </div>

                  {/* Action Button */}
                  <button className="w-full px-6 py-3 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition">
                    Download Forms & Templates
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 sm:mt-16 bg-png-red text-white p-8 sm:p-12 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Registration Timeline
          </h2>
          <p className="mb-4 text-base sm:text-lg">
            Most businesses can complete all registrations within 2-4 weeks. The order matters - start with IPA registration, then TIN, then IRC.
          </p>
          <p className="text-sm sm:text-base text-png-light">
            💡 Tip: Use our setup wizard to get a personalized registration timeline based on your business type.
          </p>
        </div>
      </div>
    </div>
  )
}
