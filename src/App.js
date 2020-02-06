import React from 'react';
import Deck from './Deck';
import './App.css';

function App() {
  return (
    <>
      <Deck />
      <a
        className="submit"
        href="mailto:john@walley.org.uk?subject=I've%20got%20a%20new%20Tony%20Fact!"
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit a Tony Fact™
      </a>
    </>
  );
}

export default App;
