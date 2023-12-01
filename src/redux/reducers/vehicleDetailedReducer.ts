import { VehiclesActionTypes } from "../actionTypes";

const initialState = {
  vehicle: null,
  loading: false,
  error: null,
};

const vehicleDetailReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VehiclesActionTypes.FETCH_VEHICLES_DETAILS_REQUEST:
      return { ...state, loading: true, error: null };
    case VehiclesActionTypes.FETCH_VEHICLES_DETAILS_SUCCESS:
      return {
        ...state,
        vehicle: action.payload,
        loading: false,
        error: null,
      };
    case VehiclesActionTypes.FETCH_VEHICLES_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default vehicleDetailReducer;
