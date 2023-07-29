import React, { useState, useContext } from 'react'
import { AppContext } from '../App'

function ChangeProfile() {
    const { setUserName } = useContext(AppContext)
    const [newUserName, setNewUserName] = useState("")
  return (
    <div>
      <input 
      onChange={(event) => {setNewUserName(event.target.value)}} 
      />
      <button onClick={() => {setUserName(newUserName)}}>Change Your User Name</button>
    </div>
  )
}

export default ChangeProfile
