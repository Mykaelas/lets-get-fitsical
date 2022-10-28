import React from 'react';

function Nav(props) {
  const {
    setTabSelected,
  } = props;

  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row" id= "Parent">
          <li className="mx-2 articles" >
            <a data-testid="about" href="#about" onClick={() => setTabSelected('about')}>
              About Us
            </a>
          </li>
          <li className="mx-2 articles" >
            <a data-testid="about" href="#trainers" onClick={() => setTabSelected('trainers')}>
              Trainers
            </a>
          </li>
          <li className="mx-2 articles" >
            <a data-testid="workouts" href="#workout" onClick={() => setTabSelected('workouts')}>
              Workouts
            </a>
          </li>
          <li className="mx-2 articles" >
            <a data-testid="contactUs" href="#contactUs" onClick={() => setTabSelected('contact')}>
              Contact Us
            </a>
          </li>
          <li className="mx-2 articles">
            <a data-testid="donation" href="#donation" onClick={() => setTabSelected('donation')}>
              Donation
            </a>
          </li>
          <li className="mx-2 articles" >
            <a data-testid="login" href="#login" onClick={() => setTabSelected('login')}>
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
