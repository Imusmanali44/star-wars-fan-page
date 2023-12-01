import { StarShipsActionTypes } from "../actionTypes";

const initialState = {
  starShips: [],
  loading: false,
  error: null,
};

const starShipsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case StarShipsActionTypes.FETCH_STARSHIP_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case StarShipsActionTypes.FETCH_STARSHIP_SUCCESS:
      return {
        ...state,
        starShips: action.payload,
        loading: false,
        error: null,
      };
    case StarShipsActionTypes.FETCH_STARSHIP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    // Other cases for people actions
    default:
      return state;
  }
};

export default starShipsReducer;
