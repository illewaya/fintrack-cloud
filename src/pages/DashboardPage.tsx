import { useAuth } from '@/hooks/useAuth'
import { Layout } from '@/components/Layout'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { useFinancialSummary, useMonthlyData, useExpensesByCategory, useCashBalance, useAIRecommendations } from '@/hooks/useFinancialData'

export default function DashboardPage() {
  const { user } = useAuth()
  const { data: summary, isLoading: summaryLoading } = useFinancialSummary()
  const { data: monthlyData, isLoading: monthlyLoading } = useMonthlyData()
  const { data: expenseBreakdown, isLoading: expensesLoading } = useExpensesByCategory()
  const { data: balance, isLoading: balanceLoading } = useCashBalance()
  const { data: recommendations, isLoading: recommendationsLoading } = useAIRecommendations()

  const COLORS = ['#ef4444', '#f97316', '#eab308', '#10b981', '#6366f1']

  const expenseChartData = expenseBreakdown
    ? Object.entries(expenseBreakdown).map(([name, value], index) => ({
        name,
        value,
        fill: COLORS[index % COLORS.length],
      }))
    : []

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.businessName}</h1>
          <p className="text-gray-600 mt-1">Here's your financial overview for this month</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Net Balance</p>
            <p className="text-3xl font-bold text-primary mt-2">
              {balanceLoading ? 'Loading...' : `K${(balance?.balance || 0).toLocaleString()}`}
            </p>
            <p className="text-green-600 text-sm mt-1">Current cash position</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Income</p>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {summaryLoading ? 'Loading...' : `K${(summary?.totalIncome || 0).toLocaleString()}`}
            </p>
            <p className="text-green-600 text-sm mt-1">This month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Expenses</p>
            <p className="text-3xl font-bold text-red-600 mt-2">
              {summaryLoading ? 'Loading...' : `K${(summary?.totalExpenses || 0).toLocaleString()}`}
            </p>
            <p className="text-red-600 text-sm mt-1">This month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600 text-sm">Tax Liability</p>
            <p className="text-3xl font-bold text-yellow-600 mt-2">
              {summaryLoading ? 'Loading...' : `K${(summary?.ircTax || 0).toLocaleString()}`}
            </p>
            <p className="text-yellow-600 text-sm mt-1">IRC 30%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Income vs Expenses Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Income vs Expenses</h2>
            {monthlyLoading ? (
              <p className="text-gray-500">Loading chart...</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData || []}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="#10b981" />
                  <Bar dataKey="expenses" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Expense Breakdown</h2>
            {expensesLoading ? (
              <p className="text-gray-500">Loading chart...</p>
            ) : expenseChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={expenseChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {expenseChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-gray-500">No expense data available</p>
            )}
          </div>
        </div>

        {/* Profit Trend */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Profit Trend</h2>
          {monthlyLoading ? (
            <p className="text-gray-500">Loading chart...</p>
          ) : (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="profit" stroke="#1e3a8a" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>

        {/* AI Recommendations */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-900 mb-4">💡 AI Business Coach</h2>
          {recommendationsLoading ? (
            <p className="text-gray-500">Loading recommendations...</p>
          ) : recommendations && recommendations.length > 0 ? (
            <div className="space-y-3">
              {recommendations.map((rec: any, index: number) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border-l-4 ${
                    rec.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-400'
                      : 'bg-blue-50 border-blue-400'
                  }`}
                >
                  <p className="font-semibold text-gray-900">{rec.title}</p>
                  <p className="text-gray-700 text-sm mt-1">{rec.message}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No recommendations at this time</p>
          )}
        </div>
      </div>
    </Layout>
  )
}
