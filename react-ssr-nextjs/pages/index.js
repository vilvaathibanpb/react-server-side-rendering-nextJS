import React, { Component } from 'react';
import Link from 'next/link';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="menu-container">
          <Link href="/Home"><div className="menu">Home</div></Link>
          <Link href="/About"><div className="menu">About Us</div></Link>
          <Link href="/ContactUs"><div className="menu">Contact Us</div></Link>
        </div>
      </div>
    );
  }
}

export default App;
