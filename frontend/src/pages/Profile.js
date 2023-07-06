import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Profile() {

  const {current_user} = useContext(AuthContext)
  

  console.log("current user", current_user);
  return (
    <div>Profile</div>
  )
}
