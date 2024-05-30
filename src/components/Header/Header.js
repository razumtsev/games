import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>My Games</h1>
<<<<<<< HEAD
      <Link className='header__link' to='/'>Назад</Link>
=======
      <Link className='header__button' to='/'>&lt;&lt;&nbsp;назад</Link>
>>>>>>> 2bf2d3aa34c77745597307cf02e760369dea8165
    </div>
  )
}
