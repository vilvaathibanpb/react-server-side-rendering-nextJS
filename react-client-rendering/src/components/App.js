import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/Home"><div>Home</div></Link>
          <Link to="/About"><div>About Us</div></Link>
          <Link to="/ContactUs"><div>Contact Us</div></Link>
        </div>
      </div>
    );
  }
}

export default App;
