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
                    <a href="/" classname="headerContainer">
                        <h1>
                            Let's Get Fit- <br />Sical
                            <img src={Bear} alt="bear"/>
                        </h1>
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