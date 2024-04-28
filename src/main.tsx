import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import Home from './pages/Home'
import About from './pages/About'
import Rental from './pages/Rental'
import Error from './pages/Error'
import Header from './components/Header'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/rental/:id' element={<Rental />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
