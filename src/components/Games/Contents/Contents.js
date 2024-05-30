import React from 'react'
import './contents.css';
import { Link } from 'react-router-dom';

export default function Contents() {
  return (
    <div className='contents'>
      <Link className='contents__link' to='/tictactoe'>Крестики Нолики</Link>
      <Link className='contents__link' to='/rps'>Камень Ножницы Бумага</Link>
      <Link className='contents__link' to='/guessnumber'>Угадай число</Link>
    </div>
  )
}
