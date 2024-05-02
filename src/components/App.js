import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import Games from './Games/Games';
// import Tools from './Tools/Tools';
import Header from './Header/Header';
import Games from './Games/Games';
import Footer from './Footer/Footer';
// import Notfound from './Notfound/Notfound';
// import Tictactoe from './Tictactoe/Tictactoe';
// import Rps from './Rps/Rps';
// import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
      <Footer />
    </div>
  );
}

export default App;
