// Donation page
import StripeContainer from "../StripeContainer";
const logo = require ('../../assets/images/Trainer_Images/')
function Donate() {
    return (
        <div class="App">
            <div>
                <h1>DONATIONS</h1><br/>
            <h3> 
            Help Us Build the Let's Get FitSical App!! <br></br>
            We are a hard working group of students and every little bit helps take 
            us one step closer to our dreams of helping everyone achieve their dreams of being fit and active.
            </h3>
            <img src={logo} />
            <p>Donate $10 To The Cause</p>
            <StripeContainer/>
            </div>
        </div>
    )
}


export default Donate;