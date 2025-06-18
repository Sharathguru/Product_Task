import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'

const Home = () => {
    let [date, setDate] = React.useState('')
    let getDate=async () => {
        let response=await axios.get('/date')
        setDate(response.data)
    }
  return (
    <div>
        <Navbar/>
        <h1>Detail Enter</h1>
        
    </div>
  )
}

export default Home