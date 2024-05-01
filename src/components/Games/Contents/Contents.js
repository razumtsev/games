import React from 'react'
import './contents.css';
import { Link } from 'react-router-dom';

export default function Contents() {
  return (
    <div className='contents'>
      <Link to='/tictactoe'>Крестики Нолики</Link>
      <Link to='/rps'>Камень Ножницы Бумага</Link>
      <Link to='/guessnumber'>Угадай число</Link>
    </div>
  )
}
