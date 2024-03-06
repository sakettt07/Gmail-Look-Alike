import './App.css'
import Signin from './components/Signin';
import { Routes,Route } from 'react-router-dom';
import Home from "./components/Home";


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
     </Routes>
    </>
  )
}

export default App
