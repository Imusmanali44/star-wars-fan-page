import { StarShipsActionTypes } from "../actionTypes";

const initialFilmDetailState = {
  starship: null,
  loading: false,
  error: null,
};

const starshipDetailReducer = (state = initialFilmDetailState, action: any) => {
  switch (action.type) {
    case StarShipsActionTypes.FETCH_STARSHIP_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case StarShipsActionTypes.FETCH_STARSHIP_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        starship: action.payload,
        error: null,
      };
    case StarShipsActionTypes.FETCH_STARSHIP_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default starshipDetailReducer;
