import React, { useEffect, useState } from 'react';
import './guessnumber.css';
import PlayerNumber from './components/PlayerNumber/PlayerNumber';

export default function Guessnumber() {
  const [secretNumber, setSecretNumber] = useState('');
  const [playerNumber, setPlayerNumber] = useState('');
  const [attempts, setAttempts] = useState(7);

  useEffect(() => {
    setSecretNumber(randomNumber(1, 100));
  }, []);

  const randomNumber = (min, max) => {
    const number = Math.floor(Math.random() * max) + min;
    return number;
  }

  const makeGameInfo = () => {
    if (attempts === 0) {
      return `Попытки закончились. Было загадано число ${secretNumber}`
    }
    if (playerNumber === '') return `Количество попыток: ${attempts}`
    else if (playerNumber === secretNumber) return `Вы угадали, было загадано число ${secretNumber}`
    else if (playerNumber > secretNumber) return `Загаданное число меньше ${playerNumber}, осталось попыток: ${attempts}`
    else return `Загаданное число больше ${playerNumber}, осталось попыток: ${attempts}`;
  }

  const gameInfo = makeGameInfo();



  // const gameInfo = (playerNumber === '') 
  //   ? `Количество попыток: ${attempts}` 
  //   : (playerNumber === secretNumber) 
  //     ? `Вы угадали, было загадано число ${secretNumber}` 
  //     : (playerNumber > secretNumber) 
  //       ? `Загаданное число меньше ${playerNumber}, осталось попыток: ${attempts}` 
  //       : `Загаданное число больше ${playerNumber}, осталось попыток: ${attempts}`;

  const handleSubmit = (number) => {
    // if (attempts === 0) return;
    setPlayerNumber(number);
    setAttempts(attempts - 1);
  }

  return (
    <div className='guessnumber'>
      <h2 className='guessnumber__title'>Guessnumber</h2>
      <p className='guessnumber__info'>Угадай число от 1 до 100.</p>
      <p className='guessnumber__info'>{gameInfo}</p>
      <PlayerNumber handleSubmit={handleSubmit}/>
    </div>
  )
}
