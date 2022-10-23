import React from 'react';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

    
  return (
    <header className="flex-row px-1">
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About Us
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}>Trainers</span>
          </li>
          <li className="mx-2">
            <a data-testid="workouts" href="#workout" onClick={() => setContactSelected(false)}>
              Workouts
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contactUs" href="#contactUs" onClick={() => setContactSelected(false)}>
              Contact Us
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="login" href="#login" onClick={() => setContactSelected(false)}>
              Login
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
