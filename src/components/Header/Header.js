import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      {/* <button type='button'>Назад</button> */}
      <Link to='/'>Назад</Link>
      <h1>My Games</h1>
    </div>
  )
}
