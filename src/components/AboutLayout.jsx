import React from 'react'
import { Outlet } from 'react-router-dom'

const AboutLayout = () => {
  return (
    <div>
        <h3>AboutLayout</h3>

        <Outlet/>

        <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
        </ul>
    </div>
  )
}

export default AboutLayout