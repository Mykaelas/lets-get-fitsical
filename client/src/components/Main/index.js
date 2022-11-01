import React from 'react';
import WorkoutMen from '../../assets/images/684f1a876fe503d4aed327804da99897--s-workout-workout-men.jpg'

function Main() {
    return (
    <div className="mainContainer">
        <p>
                Tired of not knowing how to workout certain body parts?
                <br /> Sign up today to learn what a glute is and how to
                get gains.
        </p>
        <img src={WorkoutMen} alt="Men in 80's inspired workout clothes lifting weights" />
        </div> 
    )
}

export default Main;