import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'

export default function AssistantPage() {
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: 'assistant',
      content: 'Hello! I\'m the FinTrack PNG AI Business Assistant. I can help you with questions about starting a business in PNG, registration requirements, taxes, licenses, and more. What would you like to know?',
    },
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      
      // Simulate AI response
      setTimeout(() => {
        let response = 'I can help with that! '
        
        if (input.toLowerCase().includes('register')) {
          response += 'To register a business in PNG, you need to: 1) Register with IPA, 2) Get a TIN, 3) Register with IRC. Would you like more details on any of these steps?'
        } else if (input.toLowerCase().includes('gst')) {
          response += 'GST registration is required if your annual turnover exceeds K250,000. The rate is 10% on most goods and services. Visit the Tax Centre for more information.'
        } else if (input.toLowerCase().includes('license')) {
          response += 'License requirements vary by industry. Use our Industries section to find specific requirements for your business type.'
        } else if (input.toLowerCase().includes('tax')) {
          response += 'PNG has several types of taxes: Income Tax, GST (10%), Company Tax (30%), and others. Check our Tax Centre for calculators and detailed information.'
        } else {
          response += 'That\'s a great question! I recommend exploring our relevant guides section or using our setup wizard for personalized guidance.'
        }
        
        setMessages(prev => [...prev, { role: 'assistant', content: response }])
      }, 500)
      
      setInput('')
    }
  }

  const suggestedQuestions = [
    'How do I register a business in PNG?',
    'Do I need GST registration?',
    'What licenses do I need for a retail store?',
    'How much tax will I pay?',
    'How do I hire employees?',
  ]

  return (
    <div className="min-h-screen bg-png-light py-8 sm:py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageCircle className="w-12 h-12 text-png-red" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-png-black mb-4">
            AI Business Assistant
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Ask me anything about starting and running a business in PNG
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-96 sm:h-[500px] lg:h-[600px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs sm:max-w-md lg:max-w-lg px-4 py-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-png-red text-white'
                      : 'bg-png-light text-png-black'
                  }`}
                >
                  <p className="text-sm sm:text-base">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-4 sm:p-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:border-png-red focus:outline-none text-sm sm:text-base"
              />
              <button
                onClick={handleSend}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-png-red text-white rounded-lg hover:bg-png-gold hover:text-png-black transition flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Suggested Questions */}
        <div className="mt-8 sm:mt-12">
          <h3 className="font-bold text-png-black mb-4">Suggested Questions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {suggestedQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInput(q)
                  setTimeout(() => {
                    setMessages([...messages, { role: 'user', content: q }])
                  }, 0)
                }}
                className="text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:border-png-red border-2 border-transparent transition text-sm sm:text-base"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
