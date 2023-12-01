import React, { useEffect } from "react";
import VehicleDetail from "../components/organisms/VehicleDetail";
import Layout from "../layout";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicleDetailsAction } from "../redux/actions/vehiclesActions";
import DataBank from "../components/organisms/DataBank";

const VehicleItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { vehicle, loading } = useSelector((state: any) => state.vehicleDetail);

  useEffect(() => {
    dispatch(fetchVehicleDetailsAction(id as string) as any);
  }, [id, dispatch]);

  return (
    <Layout>
      <VehicleDetail item={vehicle} loading={loading} />
      <DataBank item={vehicle} loading={loading} />
    </Layout>
  );
};

export default VehicleItem;
