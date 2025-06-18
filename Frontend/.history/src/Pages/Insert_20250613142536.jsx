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
            setError(error.response.data.message)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Series_No" value={data.Series_No} onChange={handleChange} placeholder="Series No" />
        <input type="text" name="Product_Purchase_Date" value={data.Product_Purchase_Date} onChange={handleChange} placeholder="Product Purchase Date" />
        <input type="text" name="Product_Name" value={data.Product_Name} onChange={handleChange} placeholder="Product Name" />
        <input type="text" name="Product_Dealership" value={data.Product_Dealership} onChange={handleChange} placeholder="Product Dealership" />
        <button type="submit">Insert</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Insert

    </div>
  )
}

export default Insert