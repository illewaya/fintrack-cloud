import { useState } from 'react'
import { Calculator, FileText, Calendar, TrendingUp, Download } from 'lucide-react'

export default function TaxCentrePage() {
  const [gstAmount, setGstAmount] = useState(1000)
  const [incomeAmount, setIncomeAmount] = useState(10000)
  const [profitAmount, setProfitAmount] = useState(50000)

  const gstCalculation = (gstAmount * 0.10).toFixed(2)
  const incomeCalculation = incomeAmount > 20000 ? (incomeAmount * 0.20).toFixed(2) : (incomeAmount * 0.05).toFixed(2)
  const profitCalculation = (profitAmount * 0.30).toFixed(2)

  const taxInfo = [
    {
      title: 'GST (Goods & Services Tax)',
      rate: '10%',
      description: 'Applied to most goods and services',
      details: [
        'Applies to goods and services supplied in PNG',
        'Mandatory registration if annual turnover exceeds K250,000',
        'Collected from customers and remitted to IRC',
        'Quarterly returns required',
        'Input tax credits available for business purchases',
        'Exemptions: Financial services, insurance, residential rent'
      ]
    },
    {
      title: 'IRC Tax (Company Profit Tax)',
      rate: '30%',
      description: 'Tax on company profits',
      details: [
        'Applies to resident companies on worldwide income',
        'Non-resident companies taxed on PNG-source income only',
        'Calculated on taxable income after deductions',
        'Annual tax return required',
        'Provisional tax installments may be required',
        'Franking credits available for dividends'
      ]
    },
    {
      title: 'Personal Income Tax',
      rate: '5% - 20%',
      description: 'Progressive tax on individual income',
      details: [
        '5% on income up to K20,000',
        '15% on income K20,001 - K50,000',
        '20% on income over K50,000',
        'Self-employed individuals file annual returns',
        'Deductions available for business expenses',
        'Medicare levy may apply'
      ]
    },
    {
      title: 'Withholding Tax',
      rate: '5% - 30%',
      description: 'Tax withheld from various payments',
      details: [
        'Contractor payments: 5%',
        'Interest payments: 10%',
        'Dividend payments: 15%',
        'Royalty payments: 20%',
        'Management fee payments: 30%',
        'Withheld amounts credited against final tax liability'
      ]
    },
    {
      title: 'Payroll Tax',
      rate: 'Varies by state',
      description: 'Tax on employee wages',
      details: [
        'Employer responsible for withholding',
        'Rates vary by province',
        'Monthly/quarterly payments required',
        'Annual reconciliation needed',
        'Superannuation contributions separate',
        'Penalties for late payment'
      ]
    },
    {
      title: 'Capital Gains Tax',
      rate: 'Varies',
      description: 'Tax on profit from asset sales',
      details: [
        'Applies to sale of property, shares, business assets',
        'Calculated as sale price minus cost base',
        'Discount available for individuals (50%)',
        'Main residence exemption applies',
        'Timing affects tax liability',
        'Losses can offset gains'
      ]
    }
  ]

  const taxCalendar = [
    { month: 'January', deadline: '31 Jan', task: 'PAYG reconciliation' },
    { month: 'February', deadline: '28 Feb', task: 'Annual tax return due' },
    { month: 'March', deadline: '31 Mar', task: 'Q4 GST return' },
    { month: 'April', deadline: '30 Apr', task: 'Q1 GST return' },
    { month: 'May', deadline: '31 May', task: 'Superannuation contributions' },
    { month: 'June', deadline: '30 Jun', task: 'Financial year end' },
    { month: 'July', deadline: '31 Jul', task: 'Q2 GST return' },
    { month: 'August', deadline: '31 Aug', task: 'Provisional tax payment' },
    { month: 'September', deadline: '30 Sep', task: 'Q3 GST return' },
    { month: 'October', deadline: '31 Oct', task: 'Quarterly tax review' },
    { month: 'November', deadline: '30 Nov', task: 'Year-end planning' },
    { month: 'December', deadline: '31 Dec', task: 'Final tax planning' }
  ]

  const deductions = [
    'Rent or mortgage interest (business portion)',
    'Salaries and wages',
    'Superannuation contributions',
    'Utilities (business portion)',
    'Office supplies and equipment',
    'Professional fees (accounting, legal)',
    'Insurance premiums',
    'Vehicle expenses (business use)',
    'Depreciation on assets',
    'Advertising and marketing',
    'Telephone and internet',
    'Training and professional development'
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            PNG Tax Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Complete tax information, calculators, and compliance guides for PNG businesses
          </p>
        </div>

        {/* Calculators Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8">Tax Calculators</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* GST Calculator */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <div className="flex items-center mb-4">
                <Calculator className="w-6 h-6 text-png-red mr-3" />
                <h3 className="text-lg font-bold text-png-black">GST Calculator</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount (K): {gstAmount}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={gstAmount}
                    onChange={(e) => setGstAmount(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">GST at 10%:</p>
                  <p className="text-2xl font-bold text-png-red">K{gstCalculation}</p>
                  <p className="text-sm text-gray-600 mt-2">Total with GST: K{(gstAmount + parseFloat(gstCalculation)).toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Income Tax Calculator */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <div className="flex items-center mb-4">
                <Calculator className="w-6 h-6 text-png-red mr-3" />
                <h3 className="text-lg font-bold text-png-black">Income Tax Calculator</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Annual Income (K): {incomeAmount}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="5000"
                    value={incomeAmount}
                    onChange={(e) => setIncomeAmount(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Income Tax ({incomeAmount > 20000 ? '20%' : '5%'}):</p>
                  <p className="text-2xl font-bold text-png-red">K{incomeCalculation}</p>
                  <p className="text-sm text-gray-600 mt-2">Net Income: K{(incomeAmount - parseFloat(incomeCalculation)).toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Company Tax Calculator */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <div className="flex items-center mb-4">
                <Calculator className="w-6 h-6 text-png-red mr-3" />
                <h3 className="text-lg font-bold text-png-black">Company Tax Calculator</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Profit (K): {profitAmount}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="500000"
                    step="10000"
                    value={profitAmount}
                    onChange={(e) => setProfitAmount(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Company Tax at 30%:</p>
                  <p className="text-2xl font-bold text-png-red">K{profitCalculation}</p>
                  <p className="text-sm text-gray-600 mt-2">Net Profit: K{(profitAmount - parseFloat(profitCalculation)).toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Types */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8">PNG Tax Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {taxInfo.map((tax, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-png-black">{tax.title}</h3>
                    <p className="text-gray-600 text-sm">{tax.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-png-red">{tax.rate}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {tax.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <span className="text-png-red font-bold mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tax Calendar */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8 flex items-center">
            <Calendar className="w-8 h-8 mr-3 text-png-red" />
            PNG Tax Calendar
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {taxCalendar.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md border-l-4 border-png-red">
                <p className="font-bold text-png-black mb-1">{item.month}</p>
                <p className="text-sm text-png-red font-semibold mb-2">{item.deadline}</p>
                <p className="text-sm text-gray-600">{item.task}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Deductions */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-png-red" />
            Common Tax Deductions
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-png-red">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {deductions.map((deduction, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-png-red font-bold mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{deduction}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-gray-600 italic">
              💡 Keep detailed records and receipts for all business expenses to support your tax deductions.
            </p>
          </div>
        </section>

        {/* Compliance Tips */}
        <section className="bg-png-red text-white p-8 sm:p-12 rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Tax Compliance Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Record Keeping
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Keep all receipts and invoices</li>
                <li>• Maintain separate business accounts</li>
                <li>• Record all income and expenses</li>
                <li>• Keep records for 5+ years</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Lodgement
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Lodge returns on time</li>
                <li>• Pay taxes by due dates</li>
                <li>• Update details with IRC</li>
                <li>• Keep confirmation receipts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download Resources */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition gap-2">
            <Download className="w-5 h-5" />
            Download Tax Templates & Guides
          </button>
        </div>
      </div>
    </div>
  )
}
