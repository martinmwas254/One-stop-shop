import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

export default function Register() {

  const {register} = useContext(AuthContext)

    // setting state to take dataa
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [id, setId] = useState();
    const [email, setEmail] = useState();



    function handleSubmit(e){
        e.preventDefault()

        console.log(username);
        console.log(password);
      register (username, password, email, id)

    }


  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <h2>Login Form</h2>
    <label for="exampleInputEmail1" className="form-label">Enter Your Usernmae</label>
    <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" />
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Email</label>
    <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Identity Number</label>
    <input type="text" onChange={(e) => setId(e.target.value)} className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  )
}
