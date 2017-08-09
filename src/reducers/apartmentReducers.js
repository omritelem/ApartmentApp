"use strict"

export function apartmentReducers(state = { apartments: [],
                                            activeApartments: [],
                                            inActiveApartments: [],
                                            apartmentProfile: [] }, action){
  switch (action.type) {

    case "GET_APARTMENTS":
      return {...state,
              apartments: [...action.payload]
             };
      break;

    case "GET_APARTMENTS_REJECTED":
      return {...state};
      break;

    case "GET_APARTMENTS_USER":
      let activeApart = [...action.payload];
      let inActiveApart = [...action.payload];

      activeApart = activeApart.filter((currentApart) => {
        return (currentApart.isActive === true);
      });

      inActiveApart = inActiveApart.filter((currentApart) => {
        return (currentApart.isActive === false);
      });

      return {...state,
              activeApartments: [...activeApart],
              inActiveApartments: [...inActiveApart]
            };
      break;
    case "GET_APARTMENTS_USER_REJECTED":
      return {...state,
              activeApartments: [],
              inActiveApartments: []
              };
      break;
    case "GET_APARTMENTS_PROFILE":      
        return {...state,
                 apartmentProfile: [...state.apartmentProfile, action.payload]
                };
        break;
    case "GET_APARTMENTS_PROFILE_REJECTED":
        return {...state};
        break;
  }

  return state;
}
