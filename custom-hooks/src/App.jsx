import React, { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    console.error("Component mounted")

    return () => {
      console.log("Component unmounted")
    };
  }, []);

  return <div>
    From inside my component
  </div>
}

export default App
