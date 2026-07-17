import { useState } from 'react'
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react'

interface WizardState {
  province: string
  businessStructure: string
  industry: string
  employees: string
  turnover: string
  importGoods: string
  exportGoods: string
  gstRegistration: string
  foreignWorkers: string
  businessLocation: string
  homeBasedOrCommercial: string
}

export default function SetupWizardPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showChecklist, setShowChecklist] = useState(false)
  const [formData, setFormData] = useState<WizardState>({
    province: '',
    businessStructure: '',
    industry: '',
    employees: '',
    turnover: '',
    importGoods: '',
    exportGoods: '',
    gstRegistration: '',
    foreignWorkers: '',
    businessLocation: '',
    homeBasedOrCommercial: '',
  })

  const steps = [
    {
      title: 'Province',
      question: 'Which province will your business operate in?',
      options: ['Port Moresby (NCD)', 'Lae (Morobe)', 'Madang', 'Goroka (EHP)', 'Mount Hagen (WHP)', 'Kimbe (ENBP)', 'Other'],
      key: 'province',
    },
    {
      title: 'Business Structure',
      question: 'What type of business structure do you want?',
      options: ['Sole Trader', 'Partnership', 'Limited Company', 'Landowner Company', 'Cooperative', 'Other'],
      key: 'businessStructure',
    },
    {
      title: 'Industry',
      question: 'What industry will you operate in?',
      options: ['Retail', 'Hospitality', 'Construction', 'Agriculture', 'Manufacturing', 'Services', 'Digital/IT', 'Other'],
      key: 'industry',
    },
    {
      title: 'Employees',
      question: 'How many employees will you have?',
      options: ['Just me', '1-5', '6-20', '21-50', '50+'],
      key: 'employees',
    },
    {
      title: 'Annual Turnover',
      question: 'What is your expected annual turnover?',
      options: ['K0 - K50,000', 'K50,001 - K250,000', 'K250,001 - K1,000,000', 'K1,000,001+'],
      key: 'turnover',
    },
    {
      title: 'Import Goods',
      question: 'Will you import goods?',
      options: ['Yes', 'No', 'Maybe'],
      key: 'importGoods',
    },
    {
      title: 'Export Goods',
      question: 'Will you export goods?',
      options: ['Yes', 'No', 'Maybe'],
      key: 'exportGoods',
    },
    {
      title: 'GST Registration',
      question: 'Do you need GST registration?',
      options: ['Yes', 'No', 'Not sure'],
      key: 'gstRegistration',
    },
    {
      title: 'Foreign Workers',
      question: 'Will you hire foreign workers?',
      options: ['Yes', 'No', 'Maybe'],
      key: 'foreignWorkers',
    },
    {
      title: 'Business Location',
      question: 'Where will your business be located?',
      options: ['Port Moresby', 'Provincial Town', 'Rural Area', 'Online/Remote'],
      key: 'businessLocation',
    },
    {
      title: 'Home-Based or Commercial',
      question: 'Will your business be home-based or commercial?',
      options: ['Home-based', 'Commercial Space', 'Both'],
      key: 'homeBasedOrCommercial',
    },
  ]

  const handleAnswer = (value: string) => {
    setFormData({
      ...formData,
      [steps[currentStep].key]: value,
    })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowChecklist(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateChecklist = () => {
    const items = []
    
    // Always include these
    items.push('Register with IPA (Investment Promotion Authority)')
    items.push('Obtain TIN (Tax Identification Number)')
    items.push('Register with IRC (Internal Revenue Commission)')
    
    // Conditional items based on turnover
    if (formData.turnover === 'K250,001 - K1,000,000' || formData.turnover === 'K1,000,001+') {
      items.push('Register for GST')
    }
    
    // If has employees
    if (formData.employees !== 'Just me') {
      items.push('Register as Employer')
      items.push('Set up Superannuation')
      items.push('Obtain Employment Permits (if foreign workers)')
    }
    
    // If importing/exporting
    if (formData.importGoods === 'Yes' || formData.exportGoods === 'Yes') {
      items.push('Obtain Import/Export License')
      items.push('Register with PNG Customs')
    }
    
    // If commercial space
    if (formData.homeBasedOrCommercial === 'Commercial Space' || formData.homeBasedOrCommercial === 'Both') {
      items.push('Obtain Business License from Local Authority')
      items.push('Get Building Permit/Approval')
    }
    
    // Industry-specific
    if (['Hospitality', 'Retail'].includes(formData.industry)) {
      items.push('Health and Safety Compliance')
      items.push('Food Safety License (if applicable)')
    }
    
    if (formData.industry === 'Construction') {
      items.push('Construction License')
      items.push('Safety Compliance Certification')
    }
    
    return items
  }

  if (showChecklist) {
    return (
      <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <CheckCircle className="w-16 h-16 text-png-red mx-auto mb-4" />
              <h1 className="text-3xl sm:text-4xl font-bold text-png-black mb-2">
                Your Personalized Checklist
              </h1>
              <p className="text-gray-600 text-base sm:text-lg">
                Based on your answers, here's what you need to do to start your business
              </p>
            </div>

            <div className="bg-png-light p-6 sm:p-8 rounded-lg mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-png-black mb-6">
                Your Business Profile
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 text-sm">Province</p>
                  <p className="font-semibold text-png-black">{formData.province}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Business Structure</p>
                  <p className="font-semibold text-png-black">{formData.businessStructure}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Industry</p>
                  <p className="font-semibold text-png-black">{formData.industry}</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Expected Turnover</p>
                  <p className="font-semibold text-png-black">{formData.turnover}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-png-black mb-6">
                Required Actions
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {generateChecklist().map((item, index) => (
                  <li key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      className="w-5 h-5 mt-1 text-png-red rounded focus:ring-2 focus:ring-png-red"
                      id={`item-${index}`}
                    />
                    <label
                      htmlFor={`item-${index}`}
                      className="ml-3 text-base sm:text-lg text-png-black cursor-pointer"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 sm:mt-12 pt-8 border-t border-gray-300">
              <p className="text-gray-600 text-sm sm:text-base mb-6">
                Next steps: Visit the Registration page for detailed guides on each requirement
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setShowChecklist(false)
                    setCurrentStep(0)
                  }}
                  className="px-6 py-3 bg-png-black text-white font-bold rounded-lg hover:bg-png-red transition"
                >
                  Start Over
                </button>
                <a
                  href="/registration"
                  className="px-6 py-3 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition text-center"
                >
                  View Registration Guides
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const step = steps[currentStep]
  const isAnswered = formData[step.key as keyof WizardState]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-png-black">
              Step {currentStep + 1} of {steps.length}
            </h2>
            <span className="text-sm sm:text-base text-gray-600">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
            <div
              className="bg-png-red h-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-8">
            {step.question}
          </h1>

          {/* Options */}
          <div className="space-y-3 sm:space-y-4 mb-8">
            {step.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`w-full p-4 sm:p-5 text-left rounded-lg border-2 transition transform hover:scale-102 ${
                  formData[step.key as keyof WizardState] === option
                    ? 'border-png-red bg-png-light'
                    : 'border-gray-300 hover:border-png-red'
                }`}
              >
                <span className="font-semibold text-png-black">{option}</span>
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center justify-center px-6 py-3 bg-gray-300 text-png-black font-bold rounded-lg hover:bg-gray-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex items-center justify-center px-6 py-3 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition disabled:opacity-50 disabled:cursor-not-allowed flex-1 sm:flex-none"
            >
              {currentStep === steps.length - 1 ? 'Generate Checklist' : 'Next'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
