import React from 'react';
import axios from 'axios';

class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {}
  }

  render () {
    return (
      <>
        <div id='title'>Parent.io</div>
        <button>login</button>
      </>
    )
  }
}

export default Header;