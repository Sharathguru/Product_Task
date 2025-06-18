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
    let handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('/insert', data)
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            setError(err.response.data.message)
        })
    }
  return (
    <div>

    </div>
  )
}

export default Insert