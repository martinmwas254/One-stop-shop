import { createContext, useEffect, useState } from "react";
import  Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
export const  AuthContext = createContext()


export default function AuthProvider({children}) 
{
    const nav = useNavigate()
    const [current_user, setCurrentUser] = useState([])
    const [onChange, setonChange] = useState(true)
    // Login
    const login = (name, password) =>{
        fetch("/api/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({name, password})
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response)
            if(response.error)
            {
                Swal.fire(
                    'Error',
                    response.error,
                    'error'
                  )
            }
            else if(response.success)
            { 
                nav("/")
                Swal.fire(
                    'Success',
                    response.success,
                    'success'
                  )
                  setonChange(!onChange)
            }
            else{
                Swal.fire(
                    'Error',
                    "Something went wrong",
                    'error'
                  )
            }

        })
    }


  const register = () => {
    return "Register function";
  };

  const contextData = {
    login,
    register,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}
