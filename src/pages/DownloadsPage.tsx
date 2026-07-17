import { FileText, Download, ArrowRight } from 'lucide-react'

export default function DownloadsPage() {
  const templates = [
    {
      name: 'Business Plan Template',
      description: 'Complete template for writing a professional business plan',
      format: 'Word, PDF',
      category: 'Planning'
    },
    {
      name: 'Cash Flow Forecast',
      description: 'Monthly cash flow projection spreadsheet',
      format: 'Excel',
      category: 'Finance'
    },
    {
      name: 'Annual Budget Template',
      description: 'Detailed annual budget planning spreadsheet',
      format: 'Excel',
      category: 'Finance'
    },
    {
      name: 'Payroll Spreadsheet',
      description: 'Employee payroll calculation and tracking',
      format: 'Excel',
      category: 'HR'
    },
    {
      name: 'Invoice Template',
      description: 'Professional invoice for invoicing customers',
      format: 'Word, Excel, PDF',
      category: 'Sales'
    },
    {
      name: 'Receipt Book',
      description: 'Printable receipt book for transactions',
      format: 'PDF',
      category: 'Sales'
    },
    {
      name: 'Petty Cash Log',
      description: 'Track small business expenses',
      format: 'Excel',
      category: 'Finance'
    },
    {
      name: 'Purchase Order',
      description: 'Purchase order form for suppliers',
      format: 'Word, Excel',
      category: 'Procurement'
    },
    {
      name: 'Quote Template',
      description: 'Professional quote/estimate form',
      format: 'Word, Excel',
      category: 'Sales'
    },
    {
      name: 'Employment Contract',
      description: 'Employee employment agreement template',
      format: 'Word, PDF',
      category: 'HR'
    },
    {
      name: 'Expense Tracker',
      description: 'Track all business expenses by category',
      format: 'Excel',
      category: 'Finance'
    },
    {
      name: 'Stock Register',
      description: 'Inventory tracking spreadsheet',
      format: 'Excel',
      category: 'Operations'
    },
    {
      name: 'Asset Register',
      description: 'Track business assets and depreciation',
      format: 'Excel',
      category: 'Finance'
    },
    {
      name: 'Meeting Minutes Template',
      description: 'Record meeting decisions and actions',
      format: 'Word',
      category: 'Admin'
    },
    {
      name: 'Risk Register',
      description: 'Identify and manage business risks',
      format: 'Excel',
      category: 'Planning'
    },
    {
      name: 'Business Checklist',
      description: 'Daily/weekly/monthly business tasks',
      format: 'Word, PDF',
      category: 'Admin'
    },
    {
      name: 'Startup Checklist',
      description: 'Complete checklist for starting a business',
      format: 'PDF',
      category: 'Planning'
    },
    {
      name: 'Tax Checklist',
      description: 'Tax compliance and filing checklist',
      format: 'PDF',
      category: 'Finance'
    },
    {
      name: 'Financial KPI Dashboard',
      description: 'Track key performance indicators',
      format: 'Excel',
      category: 'Finance'
    },
    {
      name: 'GST Compliance Checklist',
      description: 'GST registration and compliance guide',
      format: 'PDF',
      category: 'Finance'
    }
  ]

  const categories = ['All', 'Finance', 'HR', 'Sales', 'Planning', 'Operations', 'Admin', 'Procurement']

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Download Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Free business templates and resources for PNG businesses
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

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {templates.map((template, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl border-l-4 border-png-red transition"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="w-8 h-8 text-png-red flex-shrink-0" />
                <span className="text-xs font-bold text-png-gold bg-png-light px-2 py-1 rounded">
                  {template.category}
                </span>
              </div>
              <h3 className="text-lg font-bold text-png-black mb-2">
                {template.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {template.description}
              </p>
              <p className="text-xs text-gray-500 mb-4">
                Format: {template.format}
              </p>
              <button className="w-full px-4 py-2 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition flex items-center justify-center gap-2 text-sm sm:text-base">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>

        {/* How to Use */}
        <section className="bg-white p-8 sm:p-12 rounded-lg shadow-md border-l-4 border-png-red mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-6">
            How to Use These Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold text-png-red mb-3 flex items-center">
                <span className="text-2xl font-bold mr-3 bg-png-light w-8 h-8 flex items-center justify-center rounded-full">1</span>
                Download
              </h3>
              <p className="text-gray-600 mb-4">
                Click the download button to get the template in your preferred format (Word, Excel, or PDF).
              </p>
            </div>
            <div>
              <h3 className="font-bold text-png-red mb-3 flex items-center">
                <span className="text-2xl font-bold mr-3 bg-png-light w-8 h-8 flex items-center justify-center rounded-full">2</span>
                Customize
              </h3>
              <p className="text-gray-600 mb-4">
                Edit the template with your business information and customize it to your needs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-png-red mb-3 flex items-center">
                <span className="text-2xl font-bold mr-3 bg-png-light w-8 h-8 flex items-center justify-center rounded-full">3</span>
                Save & Use
              </h3>
              <p className="text-gray-600 mb-4">
                Save the customized template and use it for your business operations.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-png-red mb-3 flex items-center">
                <span className="text-2xl font-bold mr-3 bg-png-light w-8 h-8 flex items-center justify-center rounded-full">4</span>
                Share & Collaborate
              </h3>
              <p className="text-gray-600 mb-4">
                Share templates with your team members for consistent business processes.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-png-red text-white p-8 sm:p-12 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Template Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Document Management
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Keep templates organized in folders</li>
                <li>• Version control your documents</li>
                <li>• Back up important files</li>
                <li>• Use consistent naming conventions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Best Practices
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Update templates regularly</li>
                <li>• Train team on template usage</li>
                <li>• Review and adjust as needed</li>
                <li>• Keep audit trail of changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6 text-base sm:text-lg">
            Need more templates or customized versions?
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition gap-2">
            Request Custom Template <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
