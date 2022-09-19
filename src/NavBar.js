import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function NavBar() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
