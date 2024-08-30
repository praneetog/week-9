import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo 
        title="Learn React"
        description="Learn React and build a cool app"
        completed={true}
      />
    </>
  )
}

interface TodoProp{
  title: string,
  description: string,
  completed: boolean
}

function Todo (props: TodoProp) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
