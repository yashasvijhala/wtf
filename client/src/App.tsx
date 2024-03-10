import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Home } from './components/home'
import { Navbar } from './components/navbar'

const App: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Toaster />
      <Navbar />
      <Home />
    </div>
  )
}

export default App
