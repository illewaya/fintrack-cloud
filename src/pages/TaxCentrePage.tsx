import { useState } from 'react'
import { Calculator } from 'lucide-react'

export default function TaxCentrePage() {
  const [gstAmount, setGstAmount] = useState('')
  const [incomeAmount, setIncomeAmount] = useState('')
  const [salaryAmount, setSalaryAmount] = useState('')

  const calculateGST = (amount: number) => {
    return amount * 0.1
  }

  const calculateIncomeTax = (income: number) => {
    // PNG income tax brackets (simplified)
    if (income <= 20000) return income * 0.05
    if (income <= 50000) return 1000 + (income - 20000) * 0.1
    if (income <= 100000) return 4000 + (income - 50000) * 0.15
    return 11500 + (income - 100000) * 0.2
  }

  const calculateIRC = (income: number) => {
    return income * 0.3
  }

  const taxGuides = [
    {
      title: 'Income Tax',
      description: 'Tax on business profits and personal income',
      rates: 'Progressive: 5% - 20% depending on income level',
    },
    {
      title: 'GST (Goods & Services Tax)',
      description: 'Tax on goods and services (10%)',
      rates: '10% on most goods and services',
    },
    {
      title: 'Salary & Wages Tax',
      description: 'Tax on employee salaries',
      rates: 'Progressive rates based on salary level',
    },
    {
      title: 'Company Tax',
      description: 'Tax on company profits',
      rates: '30% on company profits',
    },
    {
      title: 'Withholding Tax',
      description: 'Tax withheld from payments',
      rates: 'Varies by payment type (5% - 30%)',
    },
    {
      title: 'Dividend Tax',
      description: 'Tax on dividend distributions',
      rates: '10% - 30% depending on circumstances',
    },
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Tax Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            PNG tax guides, calculators, and compliance information
          </p>
        </div>

        {/* Tax Calculators */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* GST Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Calculator className="w-6 h-6 text-png-red mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-png-black">GST Calculator</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount (K)
                </label>
                <input
                  type="number"
                  value={gstAmount}
                  onChange={(e) => setGstAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-png-red focus:outline-none"
                />
              </div>
              {gstAmount && (
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-2">GST (10%)</p>
                  <p className="text-2xl font-bold text-png-red">
                    K{calculateGST(parseFloat(gstAmount)).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Total: K{(parseFloat(gstAmount) + calculateGST(parseFloat(gstAmount))).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Income Tax Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Calculator className="w-6 h-6 text-png-red mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-png-black">Income Tax</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Income (K)
                </label>
                <input
                  type="number"
                  value={incomeAmount}
                  onChange={(e) => setIncomeAmount(e.target.value)}
                  placeholder="Enter income"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-png-red focus:outline-none"
                />
              </div>
              {incomeAmount && (
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-2">Income Tax</p>
                  <p className="text-2xl font-bold text-png-red">
                    K{calculateIncomeTax(parseFloat(incomeAmount)).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Net: K{(parseFloat(incomeAmount) - calculateIncomeTax(parseFloat(incomeAmount))).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* IRC Calculator */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="flex items-center mb-4">
              <Calculator className="w-6 h-6 text-png-red mr-3" />
              <h3 className="text-xl sm:text-2xl font-bold text-png-black">IRC Tax (30%)</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Profit (K)
                </label>
                <input
                  type="number"
                  value={salaryAmount}
                  onChange={(e) => setSalaryAmount(e.target.value)}
                  placeholder="Enter profit"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-png-red focus:outline-none"
                />
              </div>
              {salaryAmount && (
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="text-gray-600 text-sm mb-2">IRC Tax (30%)</p>
                  <p className="text-2xl font-bold text-png-red">
                    K{calculateIRC(parseFloat(salaryAmount)).toFixed(2)}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    After Tax: K{(parseFloat(salaryAmount) - calculateIRC(parseFloat(salaryAmount))).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tax Guides */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8">
            PNG Tax Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {taxGuides.map((guide, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-png-red hover:shadow-lg transition"
              >
                <h3 className="text-lg sm:text-xl font-bold text-png-black mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  {guide.description}
                </p>
                <div className="bg-png-light p-3 rounded-lg">
                  <p className="text-xs sm:text-sm font-semibold text-png-red">Rates:</p>
                  <p className="text-sm text-gray-700">{guide.rates}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tax Calendar */}
        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8">
            PNG Tax Calendar 2024
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center border-l-4 border-png-red pl-4 py-2">
              <span className="font-bold text-png-black mb-2 sm:mb-0 sm:min-w-32">March 31</span>
              <span className="text-gray-600">Annual income tax return due</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center border-l-4 border-png-red pl-4 py-2">
              <span className="font-bold text-png-black mb-2 sm:mb-0 sm:min-w-32">June 30</span>
              <span className="text-gray-600">GST return due (quarterly)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center border-l-4 border-png-red pl-4 py-2">
              <span className="font-bold text-png-black mb-2 sm:mb-0 sm:min-w-32">Sept 30</span>
              <span className="text-gray-600">GST return due (quarterly)</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center border-l-4 border-png-red pl-4 py-2">
              <span className="font-bold text-png-black mb-2 sm:mb-0 sm:min-w-32">Dec 31</span>
              <span className="text-gray-600">GST return due (quarterly)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
