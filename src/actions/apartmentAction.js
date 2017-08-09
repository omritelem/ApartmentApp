"use strict"

import axios from 'axios';

// Get all the apartments list
export function getApartments(){
    return ((dispatch) => {
      axios.get("/api/Apartments")
      .then((response) => {
        dispatch({
          type: "GET_APARTMENTS",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "GET_APARTMENTS_REJECTED",
          payload: `Error accured when getting apartments ${err}`
        })
      })
    })
};

// Get all the user apartments list
export function getUserApartments(user_id){
    return ((dispatch) => {
      axios.get("/api/Apartments/user/" + user_id)
      .then((response) => {
        dispatch({
          type: "GET_APARTMENTS_USER",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "GET_APARTMENTS_USER_REJECTED",
          payload: `Error accured when getting user apartments ${err}`
        })
      })
    })
};

// Get apartments profile
export function getApartmentProfile(apartment_id){
    return ((dispatch) => {
      axios.get("/api/Apartments/" + apartment_id)
      .then((response) => {
        dispatch({
          type: "GET_APARTMENTS_PROFILE",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "GET_APARTMENTS_PROFILE_REJECTED",
          payload: `Error accured when getting apartment profile ${err}`
        })
      })
    })
};
