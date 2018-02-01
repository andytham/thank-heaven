import React, { Component } from 'react';
import logoimg from './logo.png';
class Logo extends Component {

  render() {
    return (
      <div className='logo'>
        <img src={logoimg} alt='logo' />
      </div>
    );
  }

}

export default Logo;
