import { useState } from 'react'
import { ChevronDown, ChevronUp, Clock, DollarSign, FileText, Download, CheckCircle } from 'lucide-react'

export default function RegistrationPage() {
  const [expandedId, setExpandedId] = useState<string | null>('ipa')

  const registrations = [
    {
      id: 'ipa',
      title: 'IPA Registration',
      description: 'Investment Promotion Authority - Register your business',
      processingTime: '5-10 business days',
      cost: 'K50-K200',
      documents: [
        'Completed IPA registration form',
        'Proof of identity (passport/national ID)',
        'Proof of address (utility bill/lease)',
        'Business plan (2-3 pages)',
        'Financial projections for 3 years',
        'Curriculum vitae of business owner',
        'Proof of capital/funding source'
      ],
      steps: [
        'Complete IPA registration form',
        'Gather all required documents',
        'Submit application to IPA office',
        'Pay registration fee',
        'Wait for approval',
        'Receive IPA certificate'
      ]
    },
    {
      id: 'tin',
      title: 'TIN Registration',
      description: 'Tax Identification Number - Required for tax purposes',
      processingTime: '1-3 business days',
      cost: 'Free',
      documents: [
        'IPA registration certificate',
        'Proof of identity',
        'Proof of address',
        'TIN application form (Form 1)',
        'Business details form'
      ],
      steps: [
        'Obtain IPA registration certificate',
        'Visit IRC office or apply online',
        'Complete TIN application form',
        'Submit with required documents',
        'Receive TIN number',
        'Keep TIN for all tax matters'
      ]
    },
    {
      id: 'irc',
      title: 'IRC Registration',
      description: 'Internal Revenue Commission - Tax registration',
      processingTime: '3-5 business days',
      cost: 'Free',
      documents: [
        'TIN certificate',
        'Business structure documents',
        'Proof of address',
        'Identification documents',
        'Business registration form'
      ],
      steps: [
        'Obtain TIN first',
        'Complete IRC registration form',
        'Submit with TIN and documents',
        'IRC assesses business type',
        'Receive IRC registration confirmation',
        'Understand tax obligations'
      ]
    },
    {
      id: 'gst',
      title: 'GST Registration',
      description: 'Goods and Services Tax - Required if turnover exceeds K250,000',
      processingTime: '5-10 business days',
      cost: 'Free',
      documents: [
        'IRC registration',
        'Financial statements (last 3 months)',
        'Business plan',
        'Proof of turnover',
        'GST registration form'
      ],
      steps: [
        'Check if turnover exceeds K250,000',
        'Complete GST registration form',
        'Submit financial evidence',
        'IRC processes application',
        'Receive GST registration number',
        'Start collecting GST'
      ]
    },
    {
      id: 'employer',
      title: 'Employer Registration',
      description: 'Register as an employer if you have employees',
      processingTime: '3-7 business days',
      cost: 'Free',
      documents: [
        'IPA registration',
        'Employee list with details',
        'Payroll system information',
        'Employment contracts',
        'Employer registration form'
      ],
      steps: [
        'Decide to hire employees',
        'Complete employer registration form',
        'Provide employee details',
        'Submit to Department of Labour',
        'Receive employer registration number',
        'Set up payroll system'
      ]
    },
    {
      id: 'superannuation',
      title: 'Superannuation Registration',
      description: 'Set up employee superannuation scheme',
      processingTime: '7-14 business days',
      cost: 'Varies (K100-K500)',
      documents: [
        'Employer registration',
        'Superannuation scheme details',
        'Employee list',
        'Contribution rates',
        'Scheme rules and documentation'
      ],
      steps: [
        'Choose superannuation provider',
        'Design superannuation scheme',
        'Register scheme with regulator',
        'Communicate scheme to employees',
        'Set up contribution deductions',
        'Make regular contributions'
      ]
    },
    {
      id: 'bank',
      title: 'Business Bank Account',
      description: 'Open a business bank account',
      processingTime: '1-5 business days',
      cost: 'Free (may have monthly fees)',
      documents: [
        'IPA registration certificate',
        'Proof of identity',
        'Proof of address',
        'TIN',
        'Business plan summary'
      ],
      steps: [
        'Choose a bank',
        'Visit bank with documents',
        'Complete account opening form',
        'Provide identification',
        'Make initial deposit',
        'Receive account details'
      ]
    },
    {
      id: 'insurance',
      title: 'Business Insurance',
      description: 'Get appropriate business insurance',
      processingTime: '1-3 business days',
      cost: 'Varies (K200-K2000+ per year)',
      documents: [
        'Business details',
        'Asset list',
        'Risk assessment',
        'Financial information'
      ],
      steps: [
        'Identify insurance needs',
        'Get quotes from insurers',
        'Compare coverage and prices',
        'Select appropriate insurance',
        'Complete application',
        'Pay premium and receive policy'
      ]
    }
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
            PNG Business Registration Guides
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Complete step-by-step guides for all PNG business registrations with forms and checklists
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
                    <h4 className="font-bold text-png-black mb-3 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-png-red" />
                      Required Documents
                    </h4>
                    <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      {reg.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-png-red font-bold mr-3">•</span>
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div>
                    <h4 className="font-bold text-png-black mb-3">Registration Steps</h4>
                    <ol className="space-y-2 bg-gray-50 p-4 rounded-lg">
                      {reg.steps.map((step, idx) => (
                        <li key={idx} className="flex items-start text-gray-600">
                          <span className="text-png-red font-bold mr-3">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Download Section */}
                  <div className="bg-png-light p-4 rounded-lg">
                    <button className="w-full px-6 py-3 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition flex items-center justify-center gap-2">
                      <Download className="w-5 h-5" />
                      Download Forms & Templates
                    </button>
                  </div>
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
            Most businesses can complete all registrations within 2-4 weeks. The recommended order is:
          </p>
          <ol className="space-y-2 text-sm sm:text-base">
            <li><strong>Week 1:</strong> IPA Registration (5-10 days)</li>
            <li><strong>Week 2:</strong> TIN Registration (1-3 days) + IRC Registration (3-5 days)</li>
            <li><strong>Week 3:</strong> GST Registration if needed (5-10 days) + Bank Account (1-5 days)</li>
            <li><strong>Week 4:</strong> Employer/Insurance licenses as needed</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
