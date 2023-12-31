import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
  const { login } = useContext(AuthContext);

  // Setting state to store data
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    console.log(password);

    login(name, password);
  }

  return (
    <div className="container">
      <div className="text-center">
        <h2>Login</h2>
      </div>
      <div className="row justify-content-center my-5">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              placeholder="Enter username"
            />

            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter password"
            />

            <button type="submit" className="btn mt-3 btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
