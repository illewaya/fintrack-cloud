import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, PieChart, Download } from 'lucide-react'

export default function FinancePage() {
  const [loanAmount, setLoanAmount] = useState(50000)
  const [interestRate, setInterestRate] = useState(10)
  const [loanTerm, setLoanTerm] = useState(5)
  const [revenue, setRevenue] = useState(100000)
  const [costs, setCosts] = useState(60000)

  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment = (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
  const totalPayment = monthlyPayment * numberOfPayments
  const totalInterest = totalPayment - loanAmount

  const profit = revenue - costs
  const profitMargin = ((profit / revenue) * 100).toFixed(1)
  const breakEvenRevenue = costs

  const financialTools = [
    {
      title: 'Cash Flow Forecasting',
      description: 'Predict future cash inflows and outflows',
      items: ['Monthly projections', 'Seasonal variations', 'Identify cash gaps', 'Plan for growth']
    },
    {
      title: 'Budget Planning',
      description: 'Create and track business budgets',
      items: ['Revenue forecasts', 'Expense allocation', 'Variance analysis', 'Budget vs actual']
    },
    {
      title: 'Break-Even Analysis',
      description: 'Calculate when your business becomes profitable',
      items: ['Fixed costs', 'Variable costs', 'Contribution margin', 'Break-even point']
    },
    {
      title: 'Profitability Analysis',
      description: 'Analyze your business profitability',
      items: ['Gross profit', 'Net profit', 'Profit margins', 'Return on investment']
    },
    {
      title: 'Pricing Strategy',
      description: 'Calculate optimal pricing for products/services',
      items: ['Cost-plus pricing', 'Competitive pricing', 'Value-based pricing', 'Margin targets']
    },
    {
      title: 'Inventory Management',
      description: 'Optimize inventory levels and costs',
      items: ['Stock levels', 'Reorder points', 'Carrying costs', 'Turnover ratios']
    },
    {
      title: 'Payroll Planning',
      description: 'Calculate payroll costs and tax obligations',
      items: ['Salary calculations', 'Tax withholding', 'Superannuation', 'Compliance']
    },
    {
      title: 'Working Capital',
      description: 'Manage short-term financial health',
      items: ['Current ratio', 'Quick ratio', 'Cash conversion', 'Liquidity analysis']
    }
  ]

  const ratios = [
    {
      name: 'Profit Margin',
      formula: '(Net Profit / Revenue) × 100',
      value: profitMargin + '%',
      description: 'Shows what percentage of revenue becomes profit'
    },
    {
      name: 'Break-Even Revenue',
      formula: 'Total Fixed Costs',
      value: 'K' + costs.toLocaleString(),
      description: 'Revenue needed to cover all costs'
    },
    {
      name: 'Current Profit',
      formula: 'Revenue - Costs',
      value: 'K' + profit.toLocaleString(),
      description: 'Your current profit based on inputs'
    }
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Business Finance Tools
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Financial calculators and planning tools for PNG businesses
          </p>
        </div>

        {/* Calculators */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8">Financial Calculators</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Loan Calculator */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-png-red mr-3" />
                <h3 className="text-lg font-bold text-png-black">Loan Calculator</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Amount (K): {loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Interest Rate (%): {interestRate.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Loan Term (Years): {loanTerm}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={loanTerm}
                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="bg-png-light p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Payment:</span>
                    <span className="font-bold text-png-red">K{monthlyPayment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-bold text-png-red">K{totalPayment.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest:</span>
                    <span className="font-bold text-png-red">K{totalInterest.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profitability Calculator */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-6 h-6 text-png-red mr-3" />
                <h3 className="text-lg font-bold text-png-black">Profitability Calculator</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Revenue (K): {revenue.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="500000"
                    step="10000"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Total Costs (K): {costs.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max={revenue}
                    step="10000"
                    value={costs}
                    onChange={(e) => setCosts(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="bg-png-light p-4 rounded-lg space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit:</span>
                    <span className={`font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      K{profit.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Profit Margin:</span>
                    <span className="font-bold text-png-red">{profitMargin}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Break-Even Revenue:</span>
                    <span className="font-bold text-png-red">K{costs.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Ratios */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8">Key Financial Ratios</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ratios.map((ratio, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
                <h3 className="text-lg font-bold text-png-black mb-2">{ratio.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{ratio.description}</p>
                <div className="bg-png-light p-4 rounded-lg mb-3">
                  <p className="text-xs text-gray-600 mb-1">Formula:</p>
                  <p className="text-xs font-semibold text-gray-700">{ratio.formula}</p>
                </div>
                <p className="text-2xl font-bold text-png-red">{ratio.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Tools */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-png-black mb-8 flex items-center">
            <PieChart className="w-8 h-8 mr-3 text-png-red" />
            Financial Planning Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {financialTools.map((tool, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red hover:shadow-lg transition">
                <h3 className="text-lg font-bold text-png-black mb-3">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <span className="text-png-red font-bold mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Financial Planning Tips */}
        <section className="bg-png-red text-white p-8 sm:p-12 rounded-lg mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Financial Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3 flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Cash Flow Management
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Monitor cash flow weekly</li>
                <li>• Plan for seasonal variations</li>
                <li>• Maintain emergency reserves</li>
                <li>• Invoice promptly and follow up</li>
                <li>• Negotiate favorable payment terms</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Budget & Forecasting
              </h3>
              <ul className="space-y-2 text-sm">
                <li>• Create annual budgets</li>
                <li>• Review monthly vs budget</li>
                <li>• Forecast 12-24 months ahead</li>
                <li>• Plan for growth investments</li>
                <li>• Track key performance indicators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Download Resources */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-png-red text-white font-bold rounded-lg hover:bg-png-gold hover:text-png-black transition gap-2">
            <Download className="w-5 h-5" />
            Download Financial Templates
          </button>
        </div>
      </div>
    </div>
  )
}
