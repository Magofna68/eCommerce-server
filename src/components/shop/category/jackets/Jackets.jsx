import React from 'react'
import { Routes, Route } from 'react-router-dom';

export default function Jackets() {
  return (
    <div>
      <h1>Jackets Component</h1>
      <Routes>
        <Route path='/shop/jackets'></Route>
      </Routes>
    </div>
  )
}