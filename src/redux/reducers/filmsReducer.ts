import { FilmsState } from "../../types";
import { FilmsActionTypes } from "../actionTypes";

const initialState: FilmsState = {
  films: [],
  loading: false,
  error: null,
};

const filmsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FilmsActionTypes.FETCH_FILMS_REQUEST:
      return { ...state, loading: true, error: null };
    case FilmsActionTypes.FETCH_FILMS_SUCCESS:
      return { ...state, films: action.payload, loading: false, error: null };
    case FilmsActionTypes.FETCH_FILMS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default filmsReducer;
