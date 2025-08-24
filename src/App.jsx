import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Analytics from './pages/Analytics'
import Auth from './pages/Auth'

import Account from './pages/Account'
import Navbar from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'
import Faq from './pages/Faq'
import ContactUs from './pages/contactus'

import SettingsPage from './pages/SettingsPage'
import StartupOrNotPage from './pages/StartupOrNotPage'
import UserProfile from './pages/userprofile'
import Dashboard from './pages/dashboard'
import NeetiAI from './pages/neeti'
import InvestorsPage from './pages/investors'


function App() {
  

  return (
    <>
    <BrowserRouter>
      
            <Routes>
        <Route path='/' element={<Auth />} />
        <Route path='/auth' element={<Auth />} />
        
        <Route path='/analytics' element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        } />
        <Route path='/account' element={
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        } />
        <Route path='/faq' element={<Faq />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/settings' element={<SettingsPage />} /> 
        <Route path='/startupornot' element={
          <ProtectedRoute>
            <StartupOrNotPage />
          </ProtectedRoute>
        } />
        <Route path='/startup-or-not' element={
          <ProtectedRoute>
            <StartupOrNotPage />
          </ProtectedRoute>
        } /> 
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/neeti' element={<NeetiAI />} />
        <Route path='/investors' element={<InvestorsPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
