"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getApartmentProfile} from '../../actions/apartmentAction';
import {Image, Col, Row, Well, Button, ControlLabel, Grid, Checkbox,
        Table, Panel, Carousel} from 'react-bootstrap';

var QueryString = require('query-string');
var globals = require('../../constants/assets.js');

class ApartmentProfile extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const apartmentId = QueryString.parse(this.props.location.search);
    this.props.getApartmentProfile(apartmentId.Id);
  }

  render(){
    let apartmentProfPic = this.props.apartmentProfile.map((apartment, index) => {
      return (
         <Carousel.Item>
           <Image width={1400} height={30} alt="1400X30" src={apartment.profileImage} />
           <Carousel.Caption>
             <h3>1</h3>
             <p>Slide right or left to see more pictures.</p>
           </Carousel.Caption>
         </Carousel.Item>
     )
    });
    let apartmentPics = this.props.apartmentProfile.map((apartment) => {
      return (
       apartment.images.map((image, index) => {
        return (
           <Carousel.Item>
             <Image width={1400} height={30} alt="1400X30" src={image}/>
             <Carousel.Caption>
               <h3>{index + 2}</h3>
               <p>Slide right or left to see more pictures.</p>
             </Carousel.Caption>
           </Carousel.Item>
       )
      })
    )
    });

      const apartmentProfile = this.props.apartmentProfile.map((apartment) => {
        const apartmentContacts = apartment.contactInfo.map((contact) => {
          return (
                <tr>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                </tr>
          )
        });
          return(
        <Well>
          {/* <Row>
            <Col xs={12} sm={6} key={apartment._id}>
              <Image src={apartment.profileImage} style={{ marginLeft: '400px'}} circle responsive/>
            </Col>
          </Row> */}
          <Well>
          <div className="alert alert-dismissible alert-info">
            <Row>
              <Col xs={12} sm={6} key={apartment._id} className="profileData">
                <Table responsive>
                  <thead>
                  <tr>
                    <th><h2>About the Apartment...</h2></th>
                  </tr>
                </thead>
                  <tbody>
                      <tr><td><h4>Asset Type: {globals.assets[apartment.assetType]}</h4></td></tr>
                      <tr><td><h4>Settlement: {globals.cities[apartment.settlement]}</h4></td></tr>
                      <tr><td><h4>Street: {globals.streets[apartment.settlement][apartment.street]} {apartment.houseNumber}</h4></td></tr>
                      <tr><td><h4>Apartment Floor: {apartment.apartmentFloor} </h4></td></tr>
                      <tr><td><h4>Number of floors : {apartment.numberOfFloors} </h4></td></tr>
                      <tr><td><h4>Meter Square: {Math.round(apartment.meterSquare*2)/2} </h4></td></tr>
                      <tr><td><h4>Number Of Rooms: {Math.round(apartment.numberOfRooms*2)/2} </h4></td></tr>
                      <tr><td><h4>Number Of Porches: {apartment.numberOfPorches} </h4></td></tr>
                      <tr><td><h4>Meter Square Garden: {Math.round(apartment.meterSquareGarden*2)/2} </h4></td></tr>
                    </tbody>
                  </Table>
              </Col>
              <Col xs={12} sm={6}>
                  <Table responsive>
                    <thead>
                    <tr>
                      <th><h2>Apartment Includes...</h2></th>
                    </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Checkbox checked={apartment.buildingOnPillar} disabled> Building On Pillar </Checkbox></td>
                        <td><Checkbox checked={apartment.airConditionare} disabled> Air Conditionare </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.bars} disabled> Bars </Checkbox></td>
                        <td><Checkbox checked={apartment.elevator} disabled> Elevator </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.renovated} disabled> Renovated </Checkbox></td>
                        <td><Checkbox checked={apartment.warehouse} disabled> Warehouse </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.furniture} disabled> Furniture </Checkbox></td>
                        <td><Checkbox checked={apartment.forPartners} disabled> For Partners </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.parking} disabled> Parking </Checkbox></td>
                        <td><Checkbox checked={apartment.disabledAccess} disabled> Disabled Access </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.sunTerrace} disabled> Sun Terrace </Checkbox></td>
                        <td><Checkbox checked={apartment.protectedSpace} disabled> Protected Space </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.animals} disabled> Animals </Checkbox></td>
                        <td><Checkbox checked={apartment.pandorDoors} disabled> pandor Doors </Checkbox></td>
                      </tr>
                      <tr>
                        <td><Checkbox checked={apartment.ImmediateEntrance} disabled> Immediate Entrance </Checkbox></td>
                        <td><Checkbox checked={apartment.longTerm} disabled> Long Term </Checkbox></td>
                      </tr>
                    </tbody>
                  </Table>
              </Col>
            </Row>
          </div>
        </Well>
        <Well>
          <div className="alert alert-dismissible alert-danger">
              <Row>
                <Col xs={12} sm={6} key={apartment._id}>
                  <h3>Essential:</h3>
                  <h4>Price: {apartment.price} $</h4>
                  <h4>Entrance Date: {(apartment.ImmediateEntrance === false)
                                      ?(new Date(apartment.entranceDate).toLocaleDateString('en-US'))
                                      :('Immediate')}</h4>
                  <h4>Number Of Payments: {apartment.numberOfPayments}</h4>
                  <h4>Tax Per Two Months: {apartment.taxPerTwoMonths}</h4>
                  <h4>House Committee Price: {apartment.houseCommittee}</h4>
                </Col>
                <Col xs={12} sm={6}>
                  <h3>Few Words... </h3>
                  <h4>{apartment.Description}</h4>
                </Col>
              </Row>
          </div>
        </Well>
        <Well>
          <div className="alert alert-dismissible alert-warning">
               <Row>
                <Col xs={12} sm={12} key={apartment._id}>
                  <h3>Constans:</h3>
                  <Table bordered condensed hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                      </tr>
                    </thead>
                    <tbody>
                      {apartmentContacts}
                    </tbody>
                  </Table>
                </Col>
              </Row>
          </div>
        </Well>
        {/* <Well>
          <div className="alert alert-dismissible alert-danger">
              <Row>
                <Col xs={12} sm={6} key={apartment._id}>
                      <h4>{apartment.apartmentFloor}</h4>
                      <h4>{apartment.numberOfRooms}</h4>
                        <h4>{apartment.Description}</h4>
                </Col>
              </Row>
          </div>
        </Well> */}
        </Well>
          )
        })

        return (
          <Grid>
            <Row>
              <Carousel>
                {apartmentProfPic}
                {apartmentPics}
              </Carousel>
            </Row>
            <Row>
              {apartmentProfile}
              </Row>
          </Grid>
        )
  }
}

// Create the map to state function in order to approach the state
// thorugh the props
function mapStateToProps(state){
  return {
    apartmentProfile: state.apartmentRecuder.apartmentProfile
  }
}

// Mapping Dispatch To Props to dispatch the action from react component
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getApartmentProfile: getApartmentProfile
  }, dispatch)
}

// When we pass the mapStateToProps as an argument to the connect method
// our component is subscribing to the store and by doing these
// and updated state is returned to our local component
// These is all we need to do to access data in the store
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentProfile);
