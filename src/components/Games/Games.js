import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './games.css';
import Notfound from './Notfound/Notfound';
import Tictactoe from './Tictactoe/Tictactoe';
import Rps from './Rps/Rps';
import Contents from './Contents/Contents';
import Guessnumber from './Guessnumber/Guessnumber';

export default function Games() {
  return (
    <div className='games'>
      <Routes>
        <Route path='/' element={<Contents />} />
        <Route path='/tictactoe' element={<Tictactoe />} />
        <Route path='/rps' element={<Rps />} />
        <Route path='/guessnumber' element={<Guessnumber />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
  )
}
