import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Register() {
  const { register } = useContext(AuthContext);

  // Setting state to store data
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(name);
    console.log(password);
    console.log(email);
    console.log(id);

    register(name, password, email, id);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <h2>Register Form</h2>
          <label htmlFor="username" className="form-label">
            Enter Your name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="password"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Identity Number
          </label>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            className="form-control"
            id="id"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
