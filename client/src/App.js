import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Trainers from './components/Trainers';
import Workouts from './components/Workouts';
import Main from './components/Main';
import Donation from './components/Donations'
import Login from './components/login';
// import App from './components/Donations/App'
function App() {
  const [tabSelected, setTabSelected] = useState('default');

    return (
      <div>
        <Header setTabSelected={setTabSelected}></Header>
      <div>
          <main>
            {
              {
                about: <About />,
                contact: <Contact />,
                trainers: <Trainers />,
                workouts: <Workouts />,
                donation: <Donation />,
                login: <Login />,
                default: <Main />

              }[tabSelected]
            } 
            </main>
          </div>
      <Footer></Footer>
    </div>
    );
}

export default App;
