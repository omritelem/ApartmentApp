"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findDOMNode} from 'react-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import {Image, Col, Row, Well, Button, ControlLabel, Grid, Checkbox,
        Table, Panel, InputGroup, FormControl, DropdownButton, MenuItem,
        FormGroup, ButtonToolbar, Glyphicon } from 'react-bootstrap';

var globals = require('../../constants/assets.js');



class ApartmentProfileForm extends React.Component{
  constructor(){
    super();
    this.state = {
      selectedCity: 1,
      startDate: moment()
    };
  }

  SaveProfile(){
    console.log(findDOMNode(this.refs.AssetType).value);
    console.log(findDOMNode(this.refs.city).value);
    console.log(findDOMNode(this.refs.contactName1).value);
    console.log(findDOMNode(this.refs.contactName2).value);
    console.log(findDOMNode(this.refs.phone1).value);
    console.log(findDOMNode(this.refs.phone2).value);
    console.log(findDOMNode(this.refs.email1).value);
    console.log(findDOMNode(this.refs.email2).value);
    // console.log(this.state.startDate._d);
    // console.log(findDOMNode(this.refs.buildingOnPillar).checked);
    // console.log(findDOMNode(this.refs.bars).checked);
    // console.log(findDOMNode(this.refs.renovated).checked);
    // console.log(findDOMNode(this.refs.furniture).checked);
    // console.log(findDOMNode(this.refs.parking).checked);
    // console.log(findDOMNode(this.refs.sunTerrace).checked);
    // console.log(findDOMNode(this.refs.animals).checked);
    // console.log(findDOMNode(this.refs.immediateEntrance).checked);
    // console.log(findDOMNode(this.refs.airConditionare).checked);
    // console.log(findDOMNode(this.refs.elevator).checked);
    // console.log(findDOMNode(this.refs.wareHouse).checked);
    // console.log(findDOMNode(this.refs.forPartners).checked);
    // console.log(findDOMNode(this.refs.disabledAccess).checked);
    // console.log(findDOMNode(this.refs.protectedSpace).checked);
    // console.log(findDOMNode(this.refs.padorDoors).checked);
    // console.log(findDOMNode(this.refs.longTerm).checked);
  }

  reset(){

  }

  handleDateChange(date){
    this.setState({
      startDate: date
    });
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
                  <ControlLabel>Asset Types:</ControlLabel>
                      <select className="form-control" ref="AssetType">
                        {assetsTypes}
                      </select>
              </FormGroup>
              <FormGroup  controlId="cities">
                <ControlLabel>Settlement:</ControlLabel>
                      <select className="form-control" ref="city" onChange={this.selectCity.bind(this)}>
                        {cities}
                      </select>
              </FormGroup>
              <FormGroup  controlId="street">
                <ControlLabel>Street:</ControlLabel>
                      <select className="form-control" ref="street">
                        {streets}
                      </select>
              </FormGroup>
              <FormGroup  controlId="apartmentFloor">
                <ControlLabel>Apartment Floor:</ControlLabel>
                <FormControl
                      min="-1"
                      max="20"
                      type="Number"
                      placeholder="Enter Apartment Floor"
                      ref="apartmentFloor"
                    />
              </FormGroup>
              <FormGroup  controlId="numberOfFloors">
                <ControlLabel>Number Of Floors:</ControlLabel>
                <FormControl
                      min="1"
                      max="20"
                      type="Number"
                      placeholder="Enter number of floors in the building"
                      ref="numberOfFloors"
                    />
              </FormGroup>
              <FormGroup  controlId="numberOfRooms">
                <ControlLabel>Number Of Rooms:</ControlLabel>
                <FormControl
                      min="1"
                      max="12"
                      type="Number"
                      placeholder="Enter number of rooms in the apartment"
                      ref="numberOfRooms"
                    />
              </FormGroup>
              <FormGroup  controlId="numberOfPorches">
                <ControlLabel>Number Of Porches:</ControlLabel>
                <FormControl
                      min="0"
                      max="20"
                      type="Number"
                      placeholder="Enter number of porches in the apartment"
                      ref="numberOfPorches"
                    />
              </FormGroup>
              <FormGroup  controlId="meterSquare">
                <ControlLabel>Meter Square:</ControlLabel>
                <FormControl
                      min="1"
                      max="5000"
                      step=".01"
                      type="Number"
                      placeholder="Enter meter square of the apartment"
                      ref="meterSquare"
                    />
              </FormGroup>
              <FormGroup  controlId="meterSquareGarden">
                <ControlLabel>Meter Square Garden:</ControlLabel>
                <FormControl
                      min="1"
                      max="5000"
                      step=".01"
                      type="Number"
                      placeholder="Enter meter square Garden of the apartment"
                      ref="meterSquareGarden"
                    />
              </FormGroup>
            </Panel>
          </Col>
          <Col xs={12} sm={6}>
            <Panel>
              <Row>
                <Col xs={12} sm={6}>
                  <legend>Includes</legend>
                    <FormGroup controlId="buildingOnPillar">
                       <div className="checkbox">
                         <label>
                           <input type="checkbox" ref="buildingOnPillar" /> Building On Pillar
                         </label>
                       </div>
                    </FormGroup>
                    <FormGroup  controlId="Bars">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="bars" /> Bars
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="renovated">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="renovated" /> Renovated
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="furniture">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="furniture" /> Furniture
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="parking">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="parking" /> Parking
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="sunTerrace">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="sunTerrace" /> Sun Terrace
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="animals">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="animals" /> Animals
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="immediateEntrance">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="immediateEntrance" /> immediate Entrance
                        </label>
                      </div>
                    </FormGroup>
                  </Col>
                <Col xs={12} sm={6}>
                  <br/><br/>
                    <FormGroup  controlId="airConditionare">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="airConditionare" /> Air Conditionare
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="elevator">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="elevator" /> Elevator
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="wareHouse">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="wareHouse" /> Warehouse
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="forPartners">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="forPartners" /> For Partners
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="disabledAccess">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="disabledAccess" /> Disabled Access
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="protectedSpace">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="protectedSpace" /> Protected Space
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="padorDoors">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="padorDoors" /> Pandor Doors
                        </label>
                      </div>
                    </FormGroup>
                    <FormGroup  controlId="longTerm">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" ref="longTerm" /> Long Term
                        </label>
                      </div>
                    </FormGroup>
                </Col>
            </Row>
            </Panel>
            <Panel>
              <Row>
                <Col xs={12} sm={12}>
                  <legend>Essential</legend>
                  <FormGroup  controlId="price">
                    <InputGroup>
                    <InputGroup.Addon>$</InputGroup.Addon>
                    <FormControl
                          min="1"
                          max="100000"
                          type="Number"
                          placeholder="Enter Price"
                          ref="price"
                        />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup  controlId="entranceDate">
                    <ControlLabel>Entrance Date:</ControlLabel>
                    <DatePicker
                      dateFormat="DD/MM/YYYY"
                      selected={this.state.startDate}
                      onChange={this.handleDateChange.bind(this)}
                    />
                  </FormGroup>
                  <FormGroup  controlId="numberOfPayments">
                    <ControlLabel>Number Of Payments:</ControlLabel>
                    <FormControl
                          min="1"
                          max="13"
                          type="Number"
                          placeholder="Enter number of payments per month"
                          ref="numberOfPayments"
                        />
                  </FormGroup>
                  <FormGroup  controlId="taxPerTwoMonths">
                    <ControlLabel>Tax Per Two Month:</ControlLabel>
                    <FormControl
                          min="0"
                          max="100000"
                          type="Number"
                          placeholder="Enter Tax Price Per Two month"
                          ref="taxPerTwoMonths"
                        />
                  </FormGroup>
                  <FormGroup  controlId="houseCommittee">
                    <ControlLabel>House Committee:</ControlLabel>
                    <FormControl
                          min="0"
                          max="10000"
                          type="Number"
                          placeholder="Enter House Committee Price"
                          ref="houseCommittee"
                        />
                  </FormGroup>
                </Col>
              </Row>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6}>
            <Panel>
              <legend>Few Words</legend>
              <FormGroup controlId="description">
                    <FormControl
                       style={{height: '150px'}}
                      componentClass="textarea"
                      placeholder="About the Apartment..."
                      ref="description"
                    />
                </FormGroup>
            </Panel>
          </Col>
          <Col xs={12} sm={6}>
            <Panel>
              <legend>Contacts</legend>
              {/* <Row>
               <Col xs={12} sm={12} key={apartment._id}> */}
                 <Table bordered condensed hover>
                   <thead>
                     <tr>
                       <th>Contact
                         <Glyphicon
                           glyph="glyphicon glyphicon-user"
                           style={{marginLeft: '0.5em'}}/>
                       </th>
                       <th>Phone
                         <Glyphicon
                           glyph="glyphicon glyphicon-phone"
                           style={{marginLeft: '0.5em'}}/>
                       </th>
                       <th>Email
                         <Glyphicon
                           glyph="glyphicon glyphicon-envelope"
                           style={{marginLeft: '0.5em'}}/>
                       </th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr>
                       <td>
                         <FormControl
                            type="text"
                            placeholder="Contact"
                            ref="contactName1"
                          />
                       </td>
                       <td>
                         <FormControl
                            type="Number"
                            placeholder="Phone Number"
                            ref="phone1"
                          />
                       </td>
                       <td>
                          <FormControl
                            type="email"
                            placeholder="Email@example.com"
                            ref="email1"/>
                       </td>
                     </tr>
                     <tr>
                       <td>
                         <FormControl
                            type="text"
                            placeholder="Contact"
                            ref="contactName2"
                          />
                       </td>
                       <td>
                         <FormControl
                            type="Number"
                            placeholder="Phone Number"
                            ref="phone2"
                          />
                       </td>
                       <td>
                         <FormControl
                           type="email"
                           placeholder="Email@example.com"
                           ref="email2" />
                       </td>
                     </tr>
                   </tbody>
                 </Table>
               {/* </Col>
             </Row> */}
              <InputGroup>
            </InputGroup>
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col>
              <ButtonToolbar>
                <Button onClick={this.SaveProfile.bind(this)} bsStyle='success'>Save</Button>
                <Button onClick={this.reset.bind(this)} bsStyle='danger'>Reset</Button>
              </ButtonToolbar>
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
