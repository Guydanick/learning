import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './components/body';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Body/>
        <Footer/>
      </header>
    </div>

  );
}

export default App;
