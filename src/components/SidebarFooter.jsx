import React from 'react'
import { Settings, LogOut, User } from 'lucide-react'

const SidebarFooter = ({ navigate }) => {
  const footerItems = [
    { 
      icon: User, 
      label: 'Profile', 
      onClick: () => navigate('/userprofile'),
      description: 'View your profile'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      onClick: () => navigate('/settings'),
      description: 'Manage preferences'
    },
    { 
      icon: LogOut, 
      label: 'Logout', 
      onClick: () => navigate('/auth'),
      description: 'Sign out of account'
    }
  ]

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="space-y-2">
        {footerItems.map((item, index) => (
          <button
            key={index}
            onClick={item.onClick}
            className="w-full text-left p-3 rounded-lg transition-all duration-200 group text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gray-100 text-gray-500 group-hover:bg-gray-200 transition-colors duration-200">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-gray-400">
                  {item.description}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      
      {/* User Info */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Welcome back!</div>
            <div className="text-xs text-gray-500">Manage your business</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarFooter
