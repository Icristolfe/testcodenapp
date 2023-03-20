import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { TestOne, TestTwo, TestThree, TestFour } from '../containers'

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestOne />} />
        <Route path="test2" element={<TestTwo />} />
        <Route path="test3" element={<TestThree />} />
        <Route path="test4" element={<TestFour />} />

      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
