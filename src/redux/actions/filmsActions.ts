import { Dispatch } from 'redux';
import axiosInstance from '../../services/instance';
import { FilmsActionTypes } from '../actionTypes';

export const fetchFilmsAction = () => async (dispatch: Dispatch) => {
  dispatch({ type: FilmsActionTypes.FETCH_FILMS_REQUEST, payload: true });
  try {
    const response = await axiosInstance.get('/films/');
    dispatch({ type: FilmsActionTypes.FETCH_FILMS_SUCCESS, payload: response.data });
  } catch (error: any) {
    if (error.response && error.response.data) {
      dispatch({ type: FilmsActionTypes.FETCH_FILMS_FAILURE, payload: error.response.data });
    } else {
      dispatch({ type: FilmsActionTypes.FETCH_FILMS_FAILURE, payload: 'An error occurred.' });
    }
  }
};

export const fetchFilmDetailsAction = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: FilmsActionTypes.FETCH_FILM_DETAILS_REQUEST });

  try {
    const response = await axiosInstance.get(`/films/${id}`);
    dispatch({ type: FilmsActionTypes.FETCH_FILM_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FilmsActionTypes.FETCH_FILM_DETAILS_FAILURE, payload: 'Error fetching film details' });
  }
};
