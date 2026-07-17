import { DollarSign, TrendingUp, Users } from 'lucide-react'

export default function FundingCentrePage() {
  const fundingOptions = [
    {
      type: 'Bank Loans',
      icon: <DollarSign className="w-8 h-8" />,
      description: 'Traditional bank loans for business expansion',
      options: ['Term Loans', 'Working Capital Loans', 'Asset Financing'],
    },
    {
      type: 'SME Loans',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Specialized loans for small and medium enterprises',
      options: ['Startup Loans', 'Growth Loans', 'Equipment Financing'],
    },
    {
      type: 'Government Grants',
      icon: <DollarSign className="w-8 h-8" />,
      description: 'Non-repayable grants from government programs',
      options: ['Business Development Grants', 'Export Grants', 'Innovation Grants'],
    },
    {
      type: 'Youth Funding',
      icon: <Users className="w-8 h-8" />,
      description: 'Special funding programs for young entrepreneurs',
      options: ['Youth Enterprise Fund', 'Graduate Startup Fund', 'Youth Mentorship'],
    },
    {
      type: 'Women\'s Business Funding',
      icon: <Users className="w-8 h-8" />,
      description: 'Funding specifically for women entrepreneurs',
      options: ['Women\'s Business Loans', 'Women\'s Grants', 'Women\'s Mentorship'],
    },
    {
      type: 'Agriculture Financing',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Specialized financing for agricultural businesses',
      options: ['Crop Financing', 'Livestock Loans', 'Equipment Leasing'],
    },
    {
      type: 'Microfinance',
      icon: <DollarSign className="w-8 h-8" />,
      description: 'Small loans for micro-entrepreneurs',
      options: ['Microloans', 'Group Lending', 'Savings Groups'],
    },
    {
      type: 'Angel Investors',
      icon: <Users className="w-8 h-8" />,
      description: 'Individual investors providing capital and mentorship',
      options: ['Equity Investment', 'Mentorship', 'Network Access'],
    },
    {
      type: 'Crowdfunding',
      icon: <TrendingUp className="w-8 h-8" />,
      description: 'Raise capital from multiple small investors',
      options: ['Equity Crowdfunding', 'Rewards Crowdfunding', 'Donation-based'],
    },
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            Funding Centre
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Explore funding options for your PNG business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {fundingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-png-red hover:shadow-lg transition"
            >
              <div className="text-png-red mb-4">{option.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-png-black mb-2">
                {option.type}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {option.description}
              </p>
              <div className="space-y-2">
                <p className="font-semibold text-png-black text-sm">Options:</p>
                <ul className="space-y-1">
                  {option.options.map((opt, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-start">
                      <span className="text-png-red mr-2">•</span>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
