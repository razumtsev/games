import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './games.css';
import Header from '../Header/Header';
import Notfound from './Notfound/Notfound';
import Tictactoe from './Tictactoe/Tictactoe';
import Rps from './Rps/Rps';
import Contents from './Contents/Contents';

export default function Games() {
  return (
    <div className='games'>
      <Header />
      <Routes>
        <Route path='/' element={<Contents />} />
        <Route path='/tictactoe' element={<Tictactoe />} />
        <Route path='/rps' element={<Rps />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}
