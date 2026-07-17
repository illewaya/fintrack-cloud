import { Layout } from '@/components/Layout'

export default function ExpensesPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Expenses</h1>
        <p className="text-gray-600 mt-2">Track and categorize your business expenses</p>
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Expense tracking features coming soon...</p>
        </div>
      </div>
    </Layout>
  )
}
