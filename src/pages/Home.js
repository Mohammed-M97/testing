import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useQuery } from '@tanstack/react-query'
import Axios from "axios"

const Home = () => {
    const { userName } = useContext(AppContext)
    const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => console.log(res.data));
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Sorry, there was an error</h1>
    }
  return (
    <div>
      <h1>THIS IS THE HOME PAGE: {userName} && 
      <p>{catData?.fact}</p>
      </h1>

      <button onClick={refetch}>Update data</button>
    </div>
  )
}

export default Home
