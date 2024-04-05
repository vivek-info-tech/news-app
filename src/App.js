 

 import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
 
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom';
 
 export default class  extends Component {
   render() {
     return (
       <div>
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/'  element={<News pazeSize={6} country="in" category="genaral" />}/> 
          <Route exact path='/general' element={<News pazeSize={6} country="in" category="general" />}/> 
          <Route exact path='/bussines' element={<News pazeSize={6} country="in" category="bussines" />}/> 
          <Route exact path='/gadget' element={<News pazeSize={6} country="in" category="gadget" />}/> 
          <Route exact path='/technology' element={<News pazeSize={6} country="in" category="technology" />}/> 
          <Route exact path='/entertenment' element={<News pazeSize={6} country="in" category="entertenment" />}/> 
          <Route exact path='/sports' element={<News pazeSize={6} country="in" category="sports" />}/> 
          <Route exact path='/health' element={<News pazeSize={6} country="in" category="health" />}/> 
          <Route exact path='/science' element={<News pazeSize={6} country="in" category="science" />}/> 
        </Routes>
        </BrowserRouter>
       </div>
     )
   }
 }
 
