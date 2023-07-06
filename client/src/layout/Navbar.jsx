import React, { useContext } from 'react'
import {Link}  from "react-router-dom"
import { AuthContext } from '../context/AuthContext'

export default function Navbar() 
{
  const {current_user, logout} = useContext(AuthContext)
  console.log("User from Navbar", current_user)

  return (
 
<div>
      <nav className="navbar navbar-expand-md bg-white mt-4">
        <div className="container">
          <a className="navbar-brand fw-bold mb-0 h1" href="#">
            <h4>E-Commerce</h4>

            
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              {current_user && current_user ? (
                <>
                  <li className="nav-item">
                    <Link to="/addproduct" className="nav-link active">
                      Add Product
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to="/profile"
                      className="nav-link active dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    {current_user && current_user.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          {current_user.name}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          onClick={() => logout()}
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link active">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>

    
  )
}
