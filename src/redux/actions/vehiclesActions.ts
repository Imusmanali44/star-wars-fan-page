import { Dispatch } from "redux";
import axiosInstance from "../../services/instance";
import { VehiclesActionTypes } from "../actionTypes";

export const fetchVehiclesAction = () => async (dispatch: Dispatch) => {
  dispatch({ type: VehiclesActionTypes.FETCH_VEHICLES_REQUEST, payload: true });

  try {
    const response = await axiosInstance.get("/vehicles/");
    dispatch({
      type: VehiclesActionTypes.FETCH_VEHICLES_SUCCESS,
      payload: response.data,
    });
  } catch (error: any) {
    if (error.response) {
      dispatch({
        type: VehiclesActionTypes.FETCH_VEHICLES_FAILURE,
        payload: error.response.data,
      });
    } else {
      dispatch({
        type: VehiclesActionTypes.FETCH_VEHICLES_FAILURE,
        payload: "An error occurred.",
      });
    }
  }
};

export const fetchVehicleDetailsAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({ type: VehiclesActionTypes.FETCH_VEHICLES_DETAILS_REQUEST });

    try {
      const response = await axiosInstance.get(`/vehicles/${id}`);
      dispatch({
        type: VehiclesActionTypes.FETCH_VEHICLES_DETAILS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: VehiclesActionTypes.FETCH_VEHICLES_DETAILS_FAILURE,
        payload: "Error fetching vehicle details",
      });
    }
  };
