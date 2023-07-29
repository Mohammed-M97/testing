import React from 'react'
import ChangeProfile from '../components/ChangeProfile'
import { useContext } from 'react'
import { AppContext } from '../App'

function Profile() {
    const { userName } = useContext(AppContext)
  return (
    <div>
      <h1>
        PROFILE, User name is: {userName}
        <ChangeProfile />
      </h1>
    </div>
  )
}

export default Profile
