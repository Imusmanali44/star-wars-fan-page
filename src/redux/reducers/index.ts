import { combineReducers } from "redux";
import filmsReducer from "./filmsReducer";
import peopleReducer from "./peopleReducer";
import vehiclesReducer from "./vehiclesReducer";
import planetsReducer from "./planetsReducer";
import speciesReducer from "./speciesReducer";
import starShipsReducer from "./starshipsReducer";
import filmDetailReducer from "./filmDetailReducer";
import starshipDetailReducer from "./starshipDetailedReducer";
import vehicleDetailReducer from "./vehicleDetailedReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  filmDetail: filmDetailReducer,
  people: peopleReducer,
  vehicles: vehiclesReducer,
  vehicleDetail: vehicleDetailReducer,
  planets: planetsReducer,
  species: speciesReducer,
  starShips: starShipsReducer,
  starshipDetail: starshipDetailReducer,
});

export default rootReducer;
