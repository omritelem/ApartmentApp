"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button, Table, Image} from 'react-bootstrap';

import {getUserApartments} from '../../actions/apartmentAction';
import ApartmentItem from './apartmentItem';
import Loading from '../Loading';

class ApartmentListUser extends React.Component{
  constructor(props){
      super(props);
        this.state = {
          isClicked: false,
          mouseOver: false
        };
  }

  componentDidMount(){
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

  render(){
    const activeUserApartments = this.props.activeApartments.map((apartment, index) => {
        return(
            <tr key={apartment._id} className="success">
              <td>{index + 1}</td>
              <td><Image src={apartment.profileImage} className="profileImageUser"
                style={(this.state.mouseOver)
                       ?({cursor:'pointer', maxWidth: '20%'})
                       :({cursor:'default', maxWidth: '20%'})}
                circle
                onMouseOver={this.onMouseOver.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)} /></td>
              <td>{apartment.price} $</td>
              <td>{apartment.assetType}</td>
              <td> {apartment.settlement} {apartment.street} {apartment.houseNumber}</td>
            </tr>
        )
      })

    const inActiveUserApartments = this.props.inActiveApartments.map((apartment, index) => {
          return(
              <tr key={apartment._id} className="danger">
                <td>{index + 1}</td>
                <td><Image src={apartment.profileImage} className="profileImageUser"
                  style={(this.state.mouseOver)
                    ?({cursor:'pointer', maxWidth: '20%'})
                    :({cursor:'default', maxWidth: '20%'})}
                  circle
                  onMouseOver={this.onMouseOver.bind(this)}
                  onMouseLeave={this.onMouseLeave.bind(this)} /></td>
                <td>{apartment.price} $</td>
                <td>{apartment.assetType}</td>
                <td> {apartment.settlement} {apartment.street} {apartment.houseNumber}</td>
              </tr>
          )
        })

    return(
      <Grid bsClass="userApartments">
        <Row>
          <Col>
          <Table style= {{width: '500px', margin: '40px'}} striped bordered condensed hover responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Pic</th>
                <th>Price</th>
                <th>Asset type</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
            {activeUserApartments}
            </tbody>
            <tbody>
            {inActiveUserApartments}
            </tbody>
          </Table>
          </Col>
      </Row>
        {/* <Row style={{marginTop: '15px'}}>
           <h4>Active Apartments</h4>
            {activeUserApartments}
           <h4>In Active Apartments</h4>
             {inActiveUserApartments}
         </Row> */}
      </Grid>
    )
  }
}

// Create the map to state function in order to approach the state
// thorugh the props
// function mapStateToProps(state){
//   return {
//     activeApartments: state.apartmentRecuder.activeApartments,
//     inActiveApartments: state.apartmentRecuder.inActiveApartments
//   }
// }
//
// // Mapping Dispatch To Props to dispatch the action from react component
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     getUserApartments: getUserApartments
//   }, dispatch)
// }

// When we pass the mapStateToProps as an argument to the connect method
// our component is subscribing to the store and by doing these
// and updated state is returned to our local component
// These is all we need to do to access data in the store
// export default connect(mapStateToProps, mapDispatchToProps)(ApartmentListUser);

export default ApartmentListUser;
