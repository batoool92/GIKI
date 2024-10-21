import { Route, Routes } from 'react-router-dom'
import './App.css'
import Model from './Components/Model/Model'


function App() {


  return (
    <>
     
     <Routes>
        <Route path='/' element={<Model />} />
      </Routes>
        
 
    </>
  )
}

export default App
