import { useState } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <Router>
        <div className="w-full min-h-screen bg-slate-100 flex items-center justify-center p-0 sm:p-4">
          <main className="w-full h-screen sm:h-[750px] sm:max-h-[90vh] sm:w-[390px] bg-white sm:rounded-[40px] sm:shadow-2xl overflow-hidden flex flex-col relative border border-slate-200">
            <div className="flex-1 overflow-y-auto no-scrollbar">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/profile" element={<Profile/>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>

   </AuthProvider>
  )
}

export default App
