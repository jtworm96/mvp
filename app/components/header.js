import React from 'react';

class Header extends React.Component {
  constructor (props) {
    super (props);
    this.state = {}
  }

  render () {
    return (
      <>
        <div id='title'>Parent.io</div>
      </>
    )
  }
}

export default Header;