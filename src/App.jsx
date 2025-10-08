import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileItem from './FileItem.jsx'
import FileExplorer from './FileExplorer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileItem />
      <FileExplorer />
    </>
  )
}

export default App
