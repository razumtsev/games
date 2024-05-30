import React from 'react'
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD:src/components/Games/Games.js
import './games.css';
=======
import './main.css';
>>>>>>> 2bf2d3aa34c77745597307cf02e760369dea8165:src/components/Main/Main.js
import Notfound from './Notfound/Notfound';
import Tictactoe from './Tictactoe/Tictactoe';
import Rps from './Rps/Rps';
import Contents from './Contents/Contents';
import Guessnumber from './Guessnumber/Guessnumber';

export default function Games() {
  return (
<<<<<<< HEAD:src/components/Games/Games.js
    <div className='games'>
=======
    <div className='main'>
>>>>>>> 2bf2d3aa34c77745597307cf02e760369dea8165:src/components/Main/Main.js
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
