import React from 'react';
import Eric from '../../assets/images/Trainer Images/Eric.jpg';
import Mykaela from '../../assets/images/Trainer Images/Mykaela.JPG'
import Douglas from '../../assets/images/Trainer Images/Douglas.jpg';
function Trainers() {
    return (
        <div className="ultimateContainer" >
            <div className="card">
                <img src={Eric} alt="Eric" id="trainerIMG"/>
            <div class="cardContainer">
                <h3 className="trainerNames"><b>Eric Vankirk</b></h3>
                <p className="trainerBio">
                    This is Eric, the master of all things outdoors. To book your next appointment with Eric click 
                    on the contact page and fill out the form. 
                </p>
                </div>
            </div>
            <div className="card">
                <img src={Mykaela} alt="Mykaela" id="trainerIMG"/>
            <div class="cardContainer">
                <h3 className="trainerNames"><b>Mykaela Saenz</b></h3>
                <p className="trainerBio">
                        This is Mykaela, her specialty is weight lifting. 
                        To book your next appointment with Mykaela click 
                        on the contact page and fill out the form. 
                </p>
            </div>
            </div>
            <div className="card douglasCard">
                <img src={Douglas} alt="Douglas" id="trainerIMG"/>
            <div class="cardContainer ">
                <h3 className="trainerNames"><b>Douglas Red</b></h3>
                <p className="trainerBio">
                        This is Douglas, his specialty is hiking and outdoor prepartion.  
                        To book your next appointment with Douglas click 
                        on the contact page and fill out the form. 
                </p>
            </div>
            </div>
        </div>
    )
}
export default Trainers; 