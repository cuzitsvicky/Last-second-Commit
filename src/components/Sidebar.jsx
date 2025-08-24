import React from 'react'
import { 
  BarChart2, Package, DollarSign, Bot, Video, 
  Bot as BotIcon 
} from 'lucide-react'

const Sidebar = ({ activePage, setActivePage, navigate }) => {
  const navItems = [
    { 
      icon: BarChart2, 
      label: 'Analytics Page',
      description: 'View analytics and insights'
    },
    { 
      icon: Package, 
      label: 'Product',
      description: 'Manage your products'
    },
    { 
      icon: DollarSign, 
      label: 'Investors List',
      description: 'Browse potential investors'
    },
    { 
      icon: Bot, 
      label: 'Chatbot',
      description: 'AI-powered assistance'
    },
    { 
      icon: Video, 
      label: 'Meeting Room',
      description: 'Join virtual meetings'
    }
  ]

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <BotIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Chanakya AI</h1>
            <p className="text-sm text-gray-500">Business Intelligence</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setActivePage(item.label)}
            className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
              activePage === item.label
                ? 'bg-blue-50 border border-blue-200 text-blue-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg transition-colors duration-200 ${
                activePage === item.label
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
              }`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.label}</div>
                <div className={`text-xs ${
                  activePage === item.label ? 'text-blue-600' : 'text-gray-400'
                }`}>
                  {item.description}
                </div>
              </div>
            </div>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
