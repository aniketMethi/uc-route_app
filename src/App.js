import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import NavBar from './NavBar'
export default function App() {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<NavBar></NavBar>}>
                      <Route index path='/' element={<Home></Home>}></Route>
                    <Route path='/about' element={<About></About>}></Route>
                    <Route path='/contact' element={<Contact></Contact>}></Route>
                    <Route path='/*' element={<div><h1>Error 404 Not Found......</h1></div>}></Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    </div>
  )
}
