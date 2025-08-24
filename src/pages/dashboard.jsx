import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarFooter from '../components/SidebarFooter'
import Analytics from './Analytics'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [activePage, setActivePage] = useState('Analytics Page')
  const navigate = useNavigate()

  const renderPage = (page) => {
    switch (page) {
      case 'Analytics Page':
        return <Analytics />
      case 'Product':
        return <div className="p-6">Product Page Content</div>
      case 'Investors List':
        return <div className="p-6">Investors List Content</div>
      case 'Chatbot':
        return <div className="p-6">Chatbot Content</div>
      case 'Meeting Room':
        return <div className="p-6">Meeting Room Content</div>
      default:
        return <Analytics />
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage}
          navigate={navigate}
        />
        <SidebarFooter 
          navigate={navigate}
        />
      </div>
      
      {/* Right Content Area */}
      <div className="flex-1 overflow-auto">
        {renderPage(activePage)}
      </div>
    </div>
  )
}

export default Dashboard
