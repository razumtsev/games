import React, { useState } from 'react';
import './playernumber.css';

export default function PlayerNumber({handleSubmit}) {
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    if(value > 100) {
      setNumber(100);
      return;
    }
    setNumber(value);
  }

  const handleButtonClick = () => {
    handleSubmit(Number(number));
    setNumber('');
  }

  return (
    <div className='playernumber'>
      <input
        className='playernumber__input'
        type='number'
        min='1'
        max='100'
        onChange={handleChange}
        value={number}
      />
      <button
        className='guessNumber__submit'
        type='submit'
        onClick={handleButtonClick}
      >Проверить</button>
    </div>
  )
}
