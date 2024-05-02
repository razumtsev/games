import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <h1>My Games</h1>
      <Link to='/'>Назад</Link>
    </div>
  )
}
