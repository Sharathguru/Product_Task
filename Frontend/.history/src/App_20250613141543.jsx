import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/insert" element={<Insert />} />
        <Route path="/update" element={<Update />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </BrowserRouter>
    </div>
  )
}

export default App