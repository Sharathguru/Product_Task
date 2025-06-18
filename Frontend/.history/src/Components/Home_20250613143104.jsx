import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    let getDate=async () => {
        
  return (
    <div>
        <Link to="/insert">Insert Data</Link>
        <br />
        <Link to="/update">Update Data</Link>
        <br />
        <Link to="/fetch">Fetch Data</Link>
        <br />
        <Link to="/delete">Delete Data</Link>
        <br />
    </div>
  )
}

export default Home