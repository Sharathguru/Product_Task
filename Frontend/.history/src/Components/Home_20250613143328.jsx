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
        <Link to="/insert">Insert Data</Link>
        <br />
        <Link to="/update">Update Data</Link>
        <br />
       
        <Link to="/delete">Delete Data</Link>
        <br />
        <h1>Detail Enter</h1>
    </div>
  )
}

export default Home