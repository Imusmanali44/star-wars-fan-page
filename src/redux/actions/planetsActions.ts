import { Dispatch } from "redux";
import axiosInstance from "../../services/instance";

export const fetchPlanetsAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await axiosInstance.get("/planets/");
    dispatch({ type: "FETCH_PLANETS_SUCCESS", payload: response.data });
  } catch (error: any) {
    if (error.response) {
      dispatch({ type: "FETCH_PLANETS_FAILURE", payload: error.response.data });
    } else {
      dispatch({
        type: "FETCH_PLANETS_FAILURE",
        payload: "An error occurred.",
      });
    }
  }
};
