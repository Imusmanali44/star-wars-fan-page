import { FilmsActionTypes } from "../actionTypes";


const initialFilmDetailState = {
  film: null,
  loading: false,
  error: null,
};

const filmDetailReducer = (state = initialFilmDetailState, action: any) => {
  switch (action.type) {
    case FilmsActionTypes.FETCH_FILM_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FilmsActionTypes.FETCH_FILM_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        film: action.payload,
        error: null,
      };
    case FilmsActionTypes.FETCH_FILM_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default filmDetailReducer;

