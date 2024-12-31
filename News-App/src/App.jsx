import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import NewsItem from './Components/NewsItem'

function App() {
  const [category, setCategory] = useState("general");

  return (
    <>
    <Navbar setCategory={setCategory}/>
    <NewsBoard category={category}/>
      
    </>
  )
}

export default App