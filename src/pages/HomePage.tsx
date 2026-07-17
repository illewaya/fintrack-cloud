import { BookOpen, DollarSign, FileText, Zap, Users, TrendingUp, HelpCircle } from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Business Registration',
      description: 'Step-by-step guides for IPA, TIN, IRC, and GST registration. Learn about processing times, required documents, and fees for each registration type.',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Tax & Finance',
      description: 'Tax calculators for GST (10%), Income Tax, and IRC (30%). Financial planning tools and compliance guides for PNG businesses.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Industry Guides',
      description: 'Detailed requirements for 40+ PNG industries including Retail, Restaurant, Construction, Agriculture, IT, and more. Each guide includes licenses, permits, and compliance checklists.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Business Setup Wizard',
      description: 'Interactive questionnaire that asks about your province, business structure, industry, employees, and turnover. Generates a personalized compliance checklist.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Financial Tools',
      description: 'Calculators for cash flow forecasting, budgets, break-even analysis, loan repayments, payroll, pricing, inventory, and business health scoring.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Government Directory',
      description: 'Contact details for PNG government agencies including IPA, IRC, Bank of PNG, Customs, Department of Labour, and SME Corporation.',
    },
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: 'AI Business Assistant',
      description: 'Ask questions about PNG business registration, taxes, licenses, hiring employees, and get instant answers with personalized recommendations.',
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Learning Centre',
      description: 'Articles on how to start a business, pricing, marketing, cash flow management, bookkeeping, hiring staff, and business growth strategies.',
    },
  ]

  const stats = [
    { number: '40+', label: 'Industry Guides' },
    { number: '100+', label: 'Resources' },
    { number: '15+', label: 'Registration Types' },
    { number: '24/7', label: 'AI Support' },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-png-black via-png-dark to-png-black text-white py-12 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              Start and Grow Your Business in Papua New Guinea
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Everything you need to register, operate, finance, and grow a successful business in PNG. From registration to tax compliance, we've got you covered.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-png-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive resources, tools, and guidance for every stage of your business journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl border-l-4 border-png-red transition"
              >
                <div className="text-png-red mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-png-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Information Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-8 sm:mb-12">
            PNG Business Requirements Overview
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-png-red mb-4">Essential Registrations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">1.</span>
                  <div>
                    <p className="font-semibold">IPA Registration (Investment Promotion Authority)</p>
                    <p className="text-sm text-gray-600">Processing: 5-10 days | Cost: K50-K200</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">2.</span>
                  <div>
                    <p className="font-semibold">TIN Registration (Tax Identification Number)</p>
                    <p className="text-sm text-gray-600">Processing: 1-3 days | Cost: Free</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">3.</span>
                  <div>
                    <p className="font-semibold">IRC Registration (Internal Revenue Commission)</p>
                    <p className="text-sm text-gray-600">Processing: 3-5 days | Cost: Free</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-png-red font-bold mr-3">4.</span>
                  <div>
                    <p className="font-semibold">GST Registration (if turnover exceeds K250,000)</p>
                    <p className="text-sm text-gray-600">Processing: 5-10 days | Cost: Free</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-png-red mb-4">PNG Tax Information</h3>
              <div className="space-y-4">
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-2">GST (Goods & Services Tax)</p>
                  <p className="text-gray-700 text-sm">Rate: 10% on most goods and services. Required if annual turnover exceeds K250,000.</p>
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-2">IRC Tax (Income Tax)</p>
                  <p className="text-gray-700 text-sm">Rate: 30% on company profits. Progressive rates for individuals: 5% - 20% based on income level.</p>
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-2">Salary & Wages Tax</p>
                  <p className="text-gray-700 text-sm">Withheld from employee salaries. Progressive rates based on salary level.</p>
                </div>
                <div className="bg-png-light p-4 rounded-lg">
                  <p className="font-semibold text-png-black mb-2">Withholding Tax</p>
                  <p className="text-gray-700 text-sm">Varies by payment type: 5% - 30%. Applied to various business payments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Structures Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-png-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-8 sm:mb-12">
            PNG Business Structures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <h3 className="text-lg font-bold text-png-black mb-3">Sole Trader</h3>
              <p className="text-gray-600 text-sm mb-3">Self-employed individual operating a business alone.</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Pros:</span> Simple setup, full control, minimal paperwork</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Cons:</span> Unlimited liability, limited growth potential</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <h3 className="text-lg font-bold text-png-black mb-3">Partnership</h3>
              <p className="text-gray-600 text-sm mb-3">Two or more people running a business together.</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Pros:</span> Shared responsibility, combined resources</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Cons:</span> Joint liability, potential disputes</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <h3 className="text-lg font-bold text-png-black mb-3">Limited Company</h3>
              <p className="text-gray-600 text-sm mb-3">Formal business structure with separate legal entity.</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Pros:</span> Limited liability, credibility, tax benefits</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Cons:</span> More complex, higher costs, more regulations</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <h3 className="text-lg font-bold text-png-black mb-3">Landowner Company</h3>
              <p className="text-gray-600 text-sm mb-3">Company structure specific to PNG landowners.</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Pros:</span> Protects customary land rights</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Cons:</span> Complex requirements, specific to PNG</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <h3 className="text-lg font-bold text-png-black mb-3">Cooperative</h3>
              <p className="text-gray-600 text-sm mb-3">Member-owned business for mutual benefit.</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Pros:</span> Democratic control, shared profits</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Cons:</span> Complex governance, slower decisions</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-png-red">
              <h3 className="text-lg font-bold text-png-black mb-3">Foreign Company</h3>
              <p className="text-gray-600 text-sm mb-3">International company operating in PNG.</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Pros:</span> Established brand, resources</p>
              <p className="text-sm"><span className="font-semibold text-png-red">Cons:</span> Regulatory requirements, foreign ownership rules</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-png-black mb-8 sm:mb-12">
            Available Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-png-red mb-4">Business Templates (20+)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Business Plan Template</li>
                <li>• Cash Flow Forecast Spreadsheet</li>
                <li>• Annual Budget Template</li>
                <li>• Payroll Spreadsheet</li>
                <li>• Invoice Template</li>
                <li>• Receipt Book</li>
                <li>• Petty Cash Log</li>
                <li>• Purchase Order</li>
                <li>• Quote Template</li>
                <li>• Employment Contract</li>
                <li>• Expense Tracker</li>
                <li>• Stock Register</li>
                <li>• Asset Register</li>
                <li>• Meeting Minutes Template</li>
                <li>• Risk Register</li>
                <li>• Business Checklist</li>
                <li>• Startup Checklist</li>
                <li>• Tax Checklist</li>
                <li>• Financial KPI Dashboard</li>
                <li>• GST Compliance Checklist</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-png-red mb-4">Learning Articles (20+)</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• How to Start a Business in PNG</li>
                <li>• Business Ideas in PNG</li>
                <li>• Pricing Your Products</li>
                <li>• Marketing Your Business</li>
                <li>• Social Media for Business</li>
                <li>• Cash Flow Management</li>
                <li>• Bookkeeping Basics</li>
                <li>• Hiring and Managing Staff</li>
                <li>• Growing Your Business</li>
                <li>• Exporting from PNG</li>
                <li>• Digital Business Opportunities</li>
                <li>• Artificial Intelligence for Business</li>
                <li>• Cybersecurity for Small Business</li>
                <li>• Customer Service Excellence</li>
                <li>• Business Planning</li>
                <li>• Financial Management</li>
                <li>• Tax Planning</li>
                <li>• Business Compliance</li>
                <li>• Risk Management</li>
                <li>• Business Succession Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
