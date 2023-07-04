import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Login from "./pages/Login"
import "flowbite"
import Register from "./pages/Register"





function App() {
 

  return (
     <BrowserRouter>
     <Routes>
       <Route path="" element={<Layout/>}>
         <Route index element={<Home />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
       </Route>
     </Routes>
     </BrowserRouter>
  )
}

export default App
