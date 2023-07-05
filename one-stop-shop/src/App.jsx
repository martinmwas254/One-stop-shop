import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout/Layout"
import Login from "./pages/Login"
import "flowbite"
import Register from "./pages/Register"
import SingleProduct from "./pages/SingleProduct"
import Profile from "./pages/Profile"
import ApproveProduct from "./pages/ApproveProduct"
import AuthProvider from "./contexts/AuthContext"





function App() {
 

  return (
     <BrowserRouter>
     <AuthProvider>
     <Routes>
       <Route path="" element={<Layout/>}>
         <Route index element={<Home />} />
         <Route path="/login" element={<Login/>} />
         <Route path="/register" element={<Register/>} />
         <Route path="/approve" element={<ApproveProduct/>} />
         <Route path="/profile" element={<Profile/>} />
         <Route path="/product/:id" element={<SingleProduct/>} />
       </Route>
     </Routes>
     </AuthProvider>
     </BrowserRouter>
  )
}

export default App
