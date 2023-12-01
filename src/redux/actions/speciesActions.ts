import { Dispatch } from "redux";
import axiosInstance from "../../services/instance";

export const fetchSpeciesAction = () => async (dispatch: Dispatch) => {
  try {
    const response = await axiosInstance.get("/species/");
    dispatch({ type: "FETCH_SPECIES_SUCCESS", payload: response.data });
  } catch (error: any) {
    if (error.response) {
      dispatch({ type: "FETCH_SPECIES_FAILURE", payload: error.response.data });
    } else {
      dispatch({
        type: "FETCH_SPECIES_FAILURE",
        payload: "An error occurred.",
      });
    }
  }
};
