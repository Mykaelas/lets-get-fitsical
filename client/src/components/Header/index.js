import Nav from '../Nav';
import React from 'react';
import Bear from '../../assets/images/bear-do-exercises-clipart-md.png';


function Header(props) {
    const {
        setTabSelected
    } = props;

    return (
        <div >
            <header className="flexbox">
                    <a href="/" classname="headerContainer" >
                        <h1>
                            Let's Get Fit-  <br className="break" /> Sical
                            
                        </h1>
                        <img src={Bear} alt="bear"/>   
                    </a>

                {// Header has Nav imported in to it// 
                }
                <Nav id="Nav"
                    setTabSelected={setTabSelected}>
                </Nav>
            </header>
        </div>
    )
}

export default Header