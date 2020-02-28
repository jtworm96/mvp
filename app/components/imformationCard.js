import React from 'react';

class InfoCard extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
    
    }
  }

  render () {
    return (
      <div id='infocard'>
        <div id='infocardnumber'>
          {this.props.value}
        </div>
        <div id='infocardtitle'>
          {this.props.data.name}
        </div>
        <div id='infocardaddress'>
          {this.props.data.vicinity + ', Texas'}
        </div>
        <div>
        </div>
      </div>
    )
  }

}

export default InfoCard;