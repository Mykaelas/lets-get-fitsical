import React, { useState } from 'react';
import Header from './components/Header';
// import About from './components/About';
// import Contact from './components/Contact';
import Footer from './components/Footer';
// import Trainers from './components/Trainers';
// import Workouts from './components/Workouts';

function App() {
  console.log('Hey');
  // const [tabSelected, setTabSelected] = useState(false);

  //   switch(choice) {
  //     case <About></About>:
  //       break;
  //     case <Contact></Contact>:
  //       break;
  //     case <Trainers></Trainers>:
  //       break;
  //     case <Workouts></Workouts>:
  //       break;
  //     };
    return (
      <div>
      <Header
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Header>
      <main>
      {/* switch case here */}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
