import React from 'react';
import './App.scss';

import RoomSliders from './components/Body/RoomsSlider';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
      <div className="App">
          <Header />
          <RoomSliders />
          <Footer />
      </div>
  );
}

export default App;
