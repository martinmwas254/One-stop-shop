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
          nav("/")
          Swal.fire('Success', response.success, 'success');
          // set_currentUser()
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
  
     // Fetch current user
        useEffect(() => {
            console.log ("Error")
            fetch("/api/current_user")
            .then((res)=>res.json())
            .then((response) => {
                console.log ("current",response)
            
                set_currentUser(response);
                
                
            });
        }, [onChange]);
     

  const contextData = {
    login,
    current_user,
    logout
  };



  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
