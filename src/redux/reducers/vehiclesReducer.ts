import { VehiclesActionTypes } from "../actionTypes";

const initialState = {
  vehicles: [],
  loading: false,
  error: null,
};

const vehiclesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case VehiclesActionTypes.FETCH_VEHICLES_REQUEST:
      return { ...state, loading: true, error: null };
    case VehiclesActionTypes.FETCH_VEHICLES_SUCCESS:
      return {
        ...state,
        vehicles: action.payload,
        loading: false,
        error: null,
      };
    case VehiclesActionTypes.FETCH_VEHICLES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default vehiclesReducer;
