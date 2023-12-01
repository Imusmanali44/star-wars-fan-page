import { Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/Home";
import Films from "../pages/Films";
import FilmItemDetail from "../pages/FilmItem";
import Starships from "../pages/Starships";
import StarshipItem from "../pages/StarshipItem";
import Vehicles from "../pages/Vehicles";
import VehicleItem from "../pages/VehicleItem";

const Routes = () => {
  return (
    <Switch>
      <Route index path="/" element={<Home />} />
      <Route index path="/films" element={<Films />} />
      <Route index path="/film/:id/:imgId" element={<FilmItemDetail />} />
      <Route index path="/starships" element={<Starships />} />
      <Route index path="/starship/:id/:imgId" element={<StarshipItem />} />
      <Route index path="/vehicles" element={<Vehicles />} />
      <Route index path="/vehicle/:id/:imgId" element={<VehicleItem />} />
    </Switch>
  );
};

export default Routes;
