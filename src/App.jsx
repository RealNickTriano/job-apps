import { useState } from 'react'
import ApplicationPage from './components/ApplicationPage'
import Navbar from './components/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import NotFound from './components/NotFound'

const colors = ['stone', 'lime', 'sky', 'amber', 'teal', 'violet', 'rose']
const modes = ['light', 'dark']

function App() {
  const [color, setColor] = useState(colors[0])
  const [mode, setMode] = useState(modes[0])
  
  return (
    <>
      <div className={`min-h-screen bg-primaryBg theme-${color} theme-${mode}`}>
        <Navbar />
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
          />
          <Route 
            path='/profile/:userId' 
            // /profile with no id takes you to your profile
            element={<UserProfile/>}
          />
          <Route 
            path='/application/:id' 
            // /application with no id takes you to your applicaitons
            // consider renaming to applications
            element={
              <ApplicationPage 
                color={color}
                colors={colors}
                mode={mode}
                modes={modes}
                setColor={setColor}
                setMode={setMode}
              />
            }
          />
          <Route 
            path='*' 
            element={<NotFound />}
          />
          
        </Routes>
      </div>
    </>
  )
}

export default App
