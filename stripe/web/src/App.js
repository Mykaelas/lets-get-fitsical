// import logo from './logo.svg';
import './App.css';
import StripeContainer from './components/StripeContainer';
import LetsGetFitSical from './assets/LetsGetFitSical.png'
import { useState } from 'react';

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Help Us Build the Let's Get FitSical App!!</h1>
      {showItem ? <StripeContainer/> : <> <h3>Donate $10.00</h3> <img src={LetsGetFitSical} width="600" height="300" align= "center" alt="Home Page for Let's Get FitSical" />
       <button onCLick={() => setShowItem(true)}>Donate</button></>}
    </div>
  );
}

export default App;
