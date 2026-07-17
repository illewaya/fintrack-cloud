import { Layout } from '@/components/Layout'
import { useState } from 'react'

export default function SettingsPage() {
  const [language, setLanguage] = useState('en')
  const [sector, setSector] = useState('retail')

  return (
    <Layout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">Manage your account and preferences</p>
        </div>

        {/* Business Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Business Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Sector</label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="retail">Retail</option>
                <option value="agriculture">Agriculture</option>
                <option value="transport">Transport</option>
                <option value="construction">Construction</option>
                <option value="services">Professional Services</option>
                <option value="ngo">NGO</option>
                <option value="church">Church</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">This helps us provide sector-specific templates and insights</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <input
                type="text"
                value="Papua New Guinea Kina (K)"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>
        </div>

        {/* Language Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Language</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="radio"
                value="en"
                checked={language === 'en'}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-4 h-4"
              />
              <span className="ml-3 text-gray-700">English</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="tok"
                checked={language === 'tok'}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-4 h-4"
              />
              <span className="ml-3 text-gray-700">Tok Pisin</span>
            </label>
          </div>
        </div>

        {/* Tax Settings */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Tax Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">IRC Tax Rate</label>
              <input
                type="text"
                value="30%"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
              <p className="text-xs text-gray-500 mt-1">Standard IRC tax rate for PNG businesses</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">GST Rate</label>
              <input
                type="text"
                value="10%"
                disabled
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50"
              />
              <p className="text-xs text-gray-500 mt-1">Standard GST rate for PNG</p>
            </div>

            <div>
              <label className="flex items-center">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="ml-3 text-gray-700">Enable tax compliance reminders</span>
              </label>
            </div>
          </div>
        </div>

        {/* Data & Privacy */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Data & Privacy</h2>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="w-4 h-4" />
              <span className="ml-3 text-gray-700">Allow anonymized data sharing for PNG economic insights</span>
            </label>
            <p className="text-xs text-gray-500">Your data helps us understand PNG business trends while maintaining privacy</p>
          </div>
        </div>

        {/* Save Button */}
        <button className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800">
          Save Settings
        </button>
      </div>
    </Layout>
  )
}
