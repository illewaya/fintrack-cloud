import { Calculator, TrendingUp, PieChart, BarChart3 } from 'lucide-react'

export default function FinancePage() {
  const tools = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Cash Flow Forecast',
      description: 'Project your cash flow for the next 12 months',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Budget Planner',
      description: 'Create and track your business budget',
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Profit Calculator',
      description: 'Calculate your business profitability',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Break-even Calculator',
      description: 'Find your break-even point',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Loan Calculator',
      description: 'Calculate loan repayments',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Payroll Calculator',
      description: 'Calculate employee payroll',
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Pricing Calculator',
      description: 'Calculate optimal pricing',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Inventory Calculator',
      description: 'Manage inventory levels',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Working Capital Calculator',
      description: 'Calculate working capital needs',
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: 'Business Health Score',
      description: 'Assess your business financial health',
    },
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Business Finance Tools
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Financial calculators and planning tools for your PNG business
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <button
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:border-png-red border-2 border-transparent transition transform hover:scale-105 text-center"
            >
              <div className="text-png-red mb-4 flex justify-center">{tool.icon}</div>
              <h3 className="text-lg font-bold text-png-black mb-2">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {tool.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
