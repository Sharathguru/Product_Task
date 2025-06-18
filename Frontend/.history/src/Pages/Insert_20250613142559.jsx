import React from 'react'
import axios from '../axios/axios.js'

const Insert = () => {
    let [data, setData] = React.useState({
        Series_No: '',
        Product_Purchase_Date: '',
        Product_Name: '',
        Product_Dealership: '',
    })
    let [error, setError] = React.useState('')

    let handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    let handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post('/insert', data)
            console.log(response.data)
        } catch (error) {
            console.error('Error inserting data:', error)
            setError('Failed to insert data. Please try again.')
        }
    }
  return (
    <div>
<form action="">
    
</form>
    </div>
  )
}

export default Insert