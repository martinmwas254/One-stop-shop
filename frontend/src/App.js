import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Layout from './layout/Layout';
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Book from './pages/Book';
import AddProduct from './pages/AddProduct';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './context/AuthContext';
import { PostProvider } from './context/PostContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <PostProvider>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='addblog' element={<AddProduct />} />
        <Route path='profile' element={<Profile />} />
        <Route path='/book/:id' element={<Book />} />
      </Route>
    </Routes>
    </PostProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
