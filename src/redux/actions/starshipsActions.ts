import { Dispatch } from "redux";
import axiosInstance from "../../services/instance";
import { StarShipsActionTypes } from "../actionTypes";

export const fetchStarShipsAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: StarShipsActionTypes.FETCH_STARSHIP_REQUEST,
    payload: true,
  });
  try {
    const response = await axiosInstance.get("/starships/");
    dispatch({
      type: StarShipsActionTypes.FETCH_STARSHIP_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    if (error.response) {
      dispatch({
        type: StarShipsActionTypes.FETCH_STARSHIP_FAILURE,
        payload: error.response.data,
      });
    } else {
      dispatch({
        type: StarShipsActionTypes.FETCH_STARSHIP_FAILURE,
        payload: "An error occurred.",
      });
    }
  }
};


export const fetchStarshipDetailsAction = (id: string) => async (dispatch: Dispatch) => {
  dispatch({ type: StarShipsActionTypes.FETCH_STARSHIP_DETAILS_REQUEST });

  try {
    const response = await axiosInstance.get(`/starships/${id}`);
    dispatch({ type: StarShipsActionTypes.FETCH_STARSHIP_DETAILS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: StarShipsActionTypes.FETCH_STARSHIP_DETAILS_FAILURE, payload: 'Error fetching starship details' });
  }
};