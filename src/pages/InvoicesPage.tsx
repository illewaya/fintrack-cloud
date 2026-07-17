import { Layout } from '@/components/Layout'

export default function InvoicesPage() {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Invoices</h1>
        <p className="text-gray-600 mt-2">Manage your invoices and track payments</p>
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <p className="text-gray-600">Invoice management features coming soon...</p>
        </div>
      </div>
    </Layout>
  )
}
