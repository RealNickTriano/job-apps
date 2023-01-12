import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className='text-blue-600 text-xl'>Hello World</h1>
    </div>
  )
}

export default App
