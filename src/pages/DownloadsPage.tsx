import { Download, FileText } from 'lucide-react'

export default function DownloadsPage() {
  const downloads = [
    'Business Plan Template',
    'Cash Flow Forecast',
    'Annual Budget',
    'Payroll Spreadsheet',
    'Invoice Template',
    'Receipt Book',
    'Petty Cash Log',
    'Purchase Order',
    'Quote Template',
    'Employment Contract',
    'Expense Tracker',
    'Stock Register',
    'Asset Register',
    'Meeting Minutes',
    'Risk Register',
    'Business Checklist',
    'Startup Checklist',
    'Tax Checklist',
    'Financial KPI Dashboard',
    'GST Compliance Checklist',
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Download Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Free business templates and resources for PNG businesses
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {downloads.map((download, index) => (
            <button
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl border-l-4 border-png-red hover:border-png-gold transition transform hover:scale-105 text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-png-red" />
                <Download className="w-5 h-5 text-gray-400 hover:text-png-gold" />
              </div>
              <h3 className="text-lg font-bold text-png-black">
                {download}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                Download as Excel or PDF
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
