// Donation page
// import StripeContainer from "../StripeContainer";

// import logo from "../../assets/images/LetsGetFitSical.png";


// import '../App.css';
import StripeContainer from '../StripeContainer';
import LetsGetFitSical from '../../assets/images/LetsGetFitSical.png'
import { useState } from 'react';

function Donate() {
  const [showItem, setShowItem] = useState(false)
  return (
    <div className="App">
      <h1>Help Us Build the Let's Get FitSical App!!</h1>
      <h3>We are a hard working group of students and every little bit helps take us one step <br></br>
       closer to our dreams of helping everyone achieve their dreams of being fit and active. </h3>
      
      {showItem ? <StripeContainer/> : <> <h3>Donate $10.00</h3> <img src={LetsGetFitSical} width="600" height="300" align= "center" alt="Home Page for Let's Get FitSical" />
       <button onClick={() => setShowItem(true)}>Donate</button></>}
       
    </div>
  );
}


// function Donate() {
//     return (
//         <div class="App">
//             <div>
//                 <h1>DONATIONS</h1><br/>
//             <h3> 
//             Help Us Build the Let's Get FitSical App!! <br></br>
//             We are a hard working group of students and every little bit helps take 
//             us one step closer to our dreams of helping everyone achieve their dreams of being fit and active.
//             </h3>
//             <div class="App">
//             <img src={logo} width="800" height="500" alt="The Group Workout" />
//             <p>Donate $10 To The Cause</p>
//             </div>
//             <StripeContainer/>
//             </div>
//         </div>
//     )
// }


export default Donate;