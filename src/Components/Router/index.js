import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>}>
          <Route path="/" element={<></>} />
          <Route path="/Details/:id" element={<></>} />
          <Route path="/AboutMe" element={<></>} />
          <Route path="*" element={<></>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router