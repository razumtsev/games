import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header__title'>My Games</h1>
      <Link className='header__button' to='/'>&lt;&lt;&nbsp;назад</Link>
    </div>
  )
}
