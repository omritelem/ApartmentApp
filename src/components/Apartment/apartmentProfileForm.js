"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import {Image, Col, Row, Well, Button, ControlLabel, Grid, Checkbox,
        Table, Panel, InputGroup, FormControl, DropdownButton, MenuItem,
        FormGroup, ButtonToolbar } from 'react-bootstrap';

var globals = require('../../constants/assets.js');



class ApartmentProfileForm extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedCity: 1
    };
  }

  SaveProfile(){
    console.log(findDOMNode(this.refs.AssetType).value);
    console.log(findDOMNode(this.refs.city).value);
  }

  reset(){

  }

  selectCity(e){
    this.setState({selectedCity:e.target.selectedIndex});
  }


  render(){

    let assetsTypesArr = [];
    let citiesArr = [];
    let streetsArr = [];
    for (let asset in globals.assets) {
      assetsTypesArr[asset] = globals.assets[asset];
    }

    const assetsTypes = assetsTypesArr.map((asset, i) => {
        return  <option key={i}>{asset}</option>;
    });

    for (let city in globals.cities) {
      citiesArr[city] = globals.cities[city];
    }

    const cities = citiesArr.map((city, i) => {
        return  <option key={i}>{city}</option>;
    });

    let selectedCity = this.state.selectedCity;
    for (let street in globals.streets[selectedCity]) {
      streetsArr[street] = globals.streets[selectedCity][street];
    }

    const streets = streetsArr.map((street, i) => {
        return  <option key={i}>{street}</option>;
    });

    return (
      <Well>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <legend>About</legend>
              <FormGroup controlId="assetType">
                <InputGroup>
                    <label htmlFor="select" className="col-lg-2 control-label">Asset Types: </label>
                    <div className="col-lg-10">
                      <select className="form-control" ref="AssetType">
                        {assetsTypes}
                      </select>
                    </div>
                </InputGroup>
              </FormGroup>
              <FormGroup  controlId="cities">
                <InputGroup>
                    <label htmlFor="select" id="city" className="col-lg-2 control-label">cities: </label>
                    <div className="col-lg-10">
                      <select className="form-control" ref="city" onChange={this.selectCity.bind(this)}>
                        {cities}
                      </select>
                    </div>
                </InputGroup>
              </FormGroup>
              <FormGroup  controlId="street">
                <InputGroup>
                    <label htmlFor="select" className="col-lg-2 control-label">street: </label>
                    <div className="col-lg-10">
                      <select className="form-control" ref="street">
                        {streets}
                      </select>
                    </div>
                </InputGroup>
              </FormGroup>
            </Panel>
          </Col>
          <Col xs={12} sm={6}>
            <Panel>
              <legend>Includes</legend>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <InputGroup>
            </InputGroup>
            </Panel>
          </Col>
          <Col xs={12} sm={6}>
            <Panel>
              <InputGroup>
            </InputGroup>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <div className="form-group">
              <div className="col-lg-20 col-lg-offset-2"> */}
              <ButtonToolbar>
                <Button onClick={this.SaveProfile.bind(this)} bsStyle='success'>Save</Button>
                <Button onClick={this.reset.bind(this)} bsStyle='danger'>Reset</Button>
              </ButtonToolbar>
              {/* </div>
            </div> */}

          </Col>
        </Row>
      </Well>
    );
  }
};

// Create the map to state function in order to approach the state
// thorugh the props
function mapStateToProps(state){
  return {
    // apartmentProfile: state.apartmentRecuder.apartmentProfile
  }
}

// Mapping Dispatch To Props to dispatch the action from react component
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    // getApartmentProfile: getApartmentProfile
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentProfileForm);
