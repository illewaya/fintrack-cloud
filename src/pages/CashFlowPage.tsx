import { Layout } from '@/components/Layout'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const cashFlowData = [
  { day: 'Today', balance: 32500 },
  { day: 'Day 7', balance: 38200 },
  { day: 'Day 14', balance: 42800 },
  { day: 'Day 21', balance: 39500 },
  { day: 'Day 30', balance: 45200 },
  { day: 'Day 60', balance: 52100 },
  { day: 'Day 90', balance: 58900 },
]

export default function CashFlowPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Cash Flow Forecast</h1>
          <p className="text-gray-600 mt-2">Predict your cash position for the next 90 days</p>
        </div>

        {/* Alerts */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800 font-semibold">⚠️ Cash Flow Alert</p>
          <p className="text-yellow-700 text-sm mt-1">Based on current trends, you may experience a cash shortage in 42 days if spending continues at this rate.</p>
        </div>

        {/* Forecast Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">90-Day Cash Balance Forecast</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={cashFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip formatter={(value) => `K${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="balance" stroke="#1e3a8a" strokeWidth={2} name="Projected Balance" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Overdue Invoices</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">K12,500</p>
            <p className="text-sm text-gray-600 mt-2">3 invoices overdue</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Upcoming Expenses</p>
            <p className="text-2xl font-bold text-red-600 mt-2">K8,200</p>
            <p className="text-sm text-gray-600 mt-2">Next 30 days</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Expected Income</p>
            <p className="text-2xl font-bold text-green-600 mt-2">K25,000</p>
            <p className="text-sm text-gray-600 mt-2">Next 30 days</p>
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-3">💡 AI Business Coach Recommendations</h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Follow up on 3 overdue invoices (K12,500 total) to improve cash flow</li>
            <li>• Consider negotiating payment terms with suppliers to extend payables</li>
            <li>• Your fuel costs increased 18% - review transportation efficiency</li>
            <li>• Schedule payment of tax liability (K9,750) for next month to avoid penalties</li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
