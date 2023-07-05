import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")


  const  handleSubmit = (e) =>{
      e.preventDefault()
      console.log(username+ "  "+password)
     
      // login(username, password)
  }
  return (
    <div className='flex justify-center'>

<form onSubmit={handleSubmit} className='w-[30vw] bg-white p-5'>
  <h1 className='font-semibold text-2xl my-6'>signup</h1>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required />
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email" required />
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
  
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    signup
  </button>
  <div className='my-5'>Already Registered? 
      <Link className='ml-4' to="/login">
    login
  </Link>
  </div>

</form>

    </div>
  )
}

export default Register