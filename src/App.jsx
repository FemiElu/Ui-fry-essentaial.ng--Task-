import {Route, Routes, Navigate } from "react-router-dom"; 
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>

    <Navbar/>
    <Routes>
      <Route path='/' element= {<Navigate to = {'landingPage'}/>}/>
      <Route path='/landingPage' element= {<LandingPage/>}/>  
    </Routes>
    </>
  )
}

export default App