import './App.css'
import Signin from './components/Signin';
import { Routes,Route } from 'react-router-dom';
import Home from "./components/Home";


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/home" element={<Home />} />
     </Routes>
    </>
  )
}

export default App
