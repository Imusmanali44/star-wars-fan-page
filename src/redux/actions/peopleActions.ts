import { Dispatch } from 'redux';
import axiosInstance from '../../services/instance';

export const fetchPeoplesAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await axiosInstance.get('/peoples/');
    dispatch({ type: 'FETCH_PEOPLES_SUCCESS', payload: response.data });
  } catch (error: any) {
    if (error.response) {
      dispatch({ type: 'FETCH_PEOPLES_FAILURE', payload: error.response.data });
    } else {
      dispatch({ type: 'FETCH_PEOPLES_FAILURE', payload: 'An error occurred.' });
    }
  }
};
