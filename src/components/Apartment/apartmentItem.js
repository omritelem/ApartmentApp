"use strict"

import React from 'react';
import {Image, Col, Row, Well, Button, ControlLabel, Grid} from 'react-bootstrap';
var globals = require('../../constants/assets.js');

class ApartmentItem extends React.Component{
  constructor(){
    const kak = globals.assets;
    super();
    this.state = {
      isClicked: false,
      mouseOver: false
    };
  }

  componentDidMount(){
    // console.log(globals.assets);
  }

  onReadMore(){
    this.setState({
      isClicked: !this.state.isClicked
    });
  }
  onMouseOver(){
    this.setState({
        mouseOver: true
    });
  }
  onMouseLeave(){
    this.setState({
        mouseOver: false
    });
  }
  onProfileClick(apartmentId){
    window.location.href = '/ApartmentProfile?Id=' + apartmentId;
  }

  render(){
    const currentDate = new Date(this.props.entranceDate);
    return (
      <Well style={{maxHeight: '380px !important' }}>
        <Row>
          <Col xs={6} md={8}>
              <Image src={this.props.profileImage} className="profileImage"
                style={(this.state.mouseOver)
                       ?({cursor:'pointer'})
                       :({cursor:'default'})}
                circle responsive
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                onClick={this.onProfileClick.bind(this, this.props._id)}/>
          </Col>
        </Row>
        <Row>
          <Col md={10} className='apartmentItem'>
            {/* <Col xs={6} sm={8}> */}
            <h3>Price: {this.props.price} $</h3>
            <h4>Asset type: {globals.assets[this.props.assetType]}</h4>
            <h4>Address: {globals.cities[this.props.settlement]}, {globals.streets[this.props.settlement][this.props.street]} {this.props.houseNumber}</h4>
            <h4>Apartment Floor: {this.props.apartmentFloor}</h4>
            <h4>Number of rooms: {Math.round(this.props.numberOfRooms*2)/2}</h4>
            <p>{(this.props.Description.length > 50 &&
                   this.state.isClicked === false)
                  ?(this.props.Description.substring(0, 100))
                  :(this.props.Description)}
                  <button style= {{ background: 'none', border: 'none',
                                    paddingLeft: '10px', color: 'grey' }}
                    className= "link" onClick={this.onReadMore.bind(this)}>
                    {(this.state.isClicked === false &&
                      this.props.Description !== null &&
                      this.props.Description.length > 50 )
                      ?('...read more')
                      :((this.state.isClicked === true &&
                        this.props.Description !== null &&
                        this.props.Description.length > 50 )
                        ?('... read less')
                        :(''))}
                  </button>
              </p>
              <h3>Entrance Date: {(this.props.ImmediateEntrance === false)
                                  ?(currentDate.toLocaleDateString('en-US'))
                                  :('Immediate')}</h3>
          </Col>
        </Row>
      </Well>
    )
  }
}

export default ApartmentItem;
