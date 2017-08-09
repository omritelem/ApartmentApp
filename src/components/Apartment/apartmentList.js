"use strict"
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import {getApartments, getUserApartments} from '../../actions/apartmentAction';
import ApartmentItem from './apartmentItem';
import Loading from '../Loading';
import ApartmentListUser from './ApartmentListUser';

class ApartmentList extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getApartments();
    this.props.getUserApartments("597207decd096cfb08f7071f");
  }

  render(){
    const apartmentList = this.props.apartments.map((apartment) => {
      return(
        <Col xs={12} sm={6} md={4} key={apartment._id}>
          <ApartmentItem
              _id = {apartment._id}
              assetType = {apartment.assetType}
              settlement = {apartment.settlement}
              street  = {apartment.street}
              houseNumber = {apartment.houseNumber}
              price = {apartment.price}
              numberOfRooms = {apartment.numberOfRooms}
              entranceDate = {apartment.entranceDate}
              ImmediateEntrance  = {apartment.ImmediateEntrance}
              apartmentFloor = {apartment.apartmentFloor}
              Description = {apartment.Description}
              profileImage = {apartment.profileImage}
           />
        </Col>
      )
    })

    return(
      <Grid>
        {(this.props.apartments.length === 0)
          ?(<Loading />)
          :(<Row style={{marginTop: '15px'}}>
            {(this.props.activeApartments.length !== 0 ||
              this.props.inActiveApartments.length !== 0)
            ?(<ApartmentListUser activeApartments={this.props.activeApartments}
                            inActiveApartments={this.props.inActiveApartments} />)
            :(<div></div>)}
            {apartmentList}
            </Row>)
        }
      </Grid>
    )
  }
}

// Create the map to state function in order to approach the state
// thorugh the props
function mapStateToProps(state){
  return {
    apartments: state.apartmentRecuder.apartments,
    activeApartments: state.apartmentRecuder.activeApartments,
    inActiveApartments: state.apartmentRecuder.inActiveApartments
  }
}

// Mapping Dispatch To Props to dispatch the action from react component
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getApartments: getApartments,
    getUserApartments: getUserApartments
  }, dispatch)
}

// When we pass the mapStateToProps as an argument to the connect method
// our component is subscribing to the store and by doing these
// and updated state is returned to our local component
// These is all we need to do to access data in the store
export default connect(mapStateToProps, mapDispatchToProps)(ApartmentList);
