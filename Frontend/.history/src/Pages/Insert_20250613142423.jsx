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

    </div>
  )
}

        } catch (error) {
            
        }
    }
  return (
    <div>

    </div>
  )
}

export default Insert