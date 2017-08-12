"use strict"

import axios from 'axios';
import React from 'react';

// let arr = [];
// // Get all the assets list
// let prom = (() => {return axios.get("/api2/Assets")
//   .then((response) => {
//     response.data.map((current) => {
//       console.log(current);
//       arr[current.asset] = current.type;
//     });
//   })
//   .catch((err) => {
//     return err;
//   });
// })();
//
//
// module.exports = {
//     assets: arr
// }

module.exports = {
  assets: {
    1: "Apartment",
    2: "Garden Apartment",
    3: "Penthouse",
    4: "Studio/Loft",
    5: "Basement",
    6: "Duplex",
    7: "Triplex",
    8: "Private House",
    9: "Townhouse",
    10: "Housing unit",
    11: "Offices",
    12: "Farm",
    13: "Auxiliary Farm",
    14: "Sublett",
    15: "Assisted living",
    16: "Other"
  },

  cities:  {
    1: "New York",
    2: "Los Angeles",
    3: "Chicago",
    4: "Hawaii",
    5: "Houston",
    6: "Phoenix",
    7: "Philadelphia",
    8: "San Antonio",
    9: "San Diego",
    10: "Dallas",
    11: "San Jose",
    12: "Austin",
    13: "Jacksonville",
    14: "San Francisco",
    15: "Columbus",
    16: "Boston",
    17: "Washington",
    18: "Charlotte",
    19: "Seattle",
    20: "Denver"
  },

  streets:  {
  1: { 1: "Broadway", 2: "Houston", 3: "Bowery"},
  2: { 1: "Adams Boulevard" ,2: "Alameda", 3: "Altadena Drive" },
  3: { 1: "Wacker Drive", 2: "LaSalle", 3: "Rush"},
  4: { 1: "Akahi Ave", 2: "Akala Rd", 3: "Akana Pl"},
  5: { 1: "Buford", 2: "Sauer", 3: "Stillwell"},
  6: { 1: "Biltmore", 2: "Coconino", 3: "Denton Ln"},
  7: { 1: "Aramingo Avenue", 2: "Baltimore Avenue", 3: "Blair"},
  8: { 1: "Proctor", 2: "Hopkins", 3: "Fortuna"},
  9: { 1: "Abajo Dr", 2: "Abalar Way", 3: "Abrigo Way"},
  10: { 1: "Abbott Ave", 2: "Aberdeen Ave", 3: "Aberdon Rd"},
  11: { 1: "Bailey Ave.", 2: "Leland Ave.", 3: "Los Coches Ave."},
  12: { 1: "Oltorf", 2: "Perry Lane", 3: "Pershing Drive"},
  13: { 1: "Bali Pl", 2: "Balmoral Cir E", 3: "Bambi Ln"},
  14: { 1: "Alpine Terrace", 2: "Alta Mar Way", 3: "Alta St"},
  15: { 1: "Affirm Ln", 2: "Agnes Dr", 3: "Airport Thruway"},
  16: { 1: "Court", 2: "Beacon ", 3: "Riverway"},
  17: { 1: "Banneker Circle", 2: "Jackson Place", 3: "H Street"},
  18: { 1: "Campbell Blvd", 2: "Cemetery Rd", 3: "Corlena Ave"},
  19: { 1: "Yesler Way", 2: "North Broadway", 3: "Westlake Avenue"},
  20: { 1: "Anaheim Way", 2: "Andes Ct", 3: "Andes St"}
  }
}
