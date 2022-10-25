import Nav from '../Nav';
import React from 'react';
import Bear from '../../assets/images/bear-do-exercises-clipart-md.png';


function Header() {
    return (
        <div >
            <header>
                <a href="/">
                    <h1>
                        Let's Get Fit-<span class="Sical">Sical</span>
                        <img src={Bear} alt="bear"/>
                    </h1>
                </a>
                {// Header has Nav imported in to it// 
                }
                <Nav id="Nav">
                </Nav>
            </header>
        </div>
    )
}

export default Header