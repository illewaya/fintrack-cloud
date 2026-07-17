import { Layout } from '@/components/Layout'
import { useState } from 'react'

const lessons = [
  {
    id: 1,
    title: 'Understanding Cash Flow',
    description: 'Learn why cash flow is more important than profit for your business',
    duration: '5 min',
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'PNG Tax Compliance',
    description: 'Guide to IRC tax requirements and GST obligations for PNG businesses',
    duration: '8 min',
    difficulty: 'Intermediate',
  },
  {
    id: 3,
    title: 'Invoice Best Practices',
    description: 'How to create professional invoices and improve payment collection',
    duration: '6 min',
    difficulty: 'Beginner',
  },
  {
    id: 4,
    title: 'Financial Ratios Explained',
    description: 'Key financial metrics to understand your business health',
    duration: '10 min',
    difficulty: 'Advanced',
  },
]

export default function FinancialLiteracyPage() {
  // const [selectedLesson, setSelectedLesson] = useState<number | null>(null)

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Literacy</h1>
          <p className="text-gray-600 mt-2">Learn accounting concepts while managing your business</p>
        </div>

        {/* Learning Path */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Your Learning Path</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">✓</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Getting Started</p>
                <p className="text-sm text-gray-600">Completed</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Cash Flow Management</p>
                <p className="text-sm text-gray-600">In Progress</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold">3</div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">Tax Compliance</p>
                <p className="text-sm text-gray-600">Not started</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lessons.map((lesson) => (
            <div
              key={lesson.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedLesson(lesson.id)}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900">{lesson.title}</h3>
                <span className={`text-xs px-2 py-1 rounded ${
                  lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                  lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {lesson.difficulty}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{lesson.description}</p>
              <p className="text-xs text-gray-500">⏱️ {lesson.duration}</p>
            </div>
          ))}
        </div>

        {/* Glossary */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Financial Terms Glossary</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-900">Cash Flow</p>
              <p className="text-sm text-gray-600">The movement of money in and out of your business. Positive cash flow means more money coming in than going out.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Profit vs Revenue</p>
              <p className="text-sm text-gray-600">Revenue is total income. Profit is what's left after paying expenses. A business can have high revenue but low profit.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">IRC Tax</p>
              <p className="text-sm text-gray-600">Income tax in Papua New Guinea, calculated as 30% of taxable income for businesses.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">GST</p>
              <p className="text-sm text-gray-600">Goods and Services Tax in PNG is 10%. It's added to invoices and must be paid to the government.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
