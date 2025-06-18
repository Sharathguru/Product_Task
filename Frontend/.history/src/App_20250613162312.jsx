import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home'
import Insert from './Pages/Insert'
import Update from './Pages/Update'
import Fetch from './Pages/Fetch'
import Delete from './Pages/Delete'


const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}
      </BrowserRouter>
    </>
  )
}

export default App