import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const nav = useNavigate()
  const [onChange, setonChange] = useState(false)
  const [current_user, set_currentUser] = useState();

  const login = (name, password) => {
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password })
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.error) {
          Swal.fire(
            'Error', 
            response.error, 'error');
        } else if (response.success) {
          Swal.fire('Success', response.success, 'success');
          setonChange(!onChange)

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          });
        }
        console.log(response);
      });
  };

  const logout = () => {
    fetch("/api/current_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {

          Swal.fire('Success', response.success, 'success');
          setonChange(!onChange)
          set_currentUser()
          // redirect to login
          nav("/login")
        
      });
  };

  const contextData = {
    login,
    current_user,
    logout
  };

  useEffect(() => {
    fetch("/api/current_user", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if(response.currentUser){
          set_currentUser(response.currentUser);
        }
      });
  }, [onChange]);

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
