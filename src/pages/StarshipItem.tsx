import React, { useEffect } from "react";
import Layout from "../layout";
import StarshipDetail from "../components/organisms/StarshipDetail";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchStarshipDetailsAction } from "../redux/actions/starshipsActions";
import DataBank from "../components/organisms/DataBank";

const StarshipItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { starship, loading } = useSelector(
    (state: any) => state.starshipDetail
  );

  useEffect(() => {
    dispatch(fetchStarshipDetailsAction(id as string) as any);
  }, [id, dispatch]);

  return (
    <Layout>
      <StarshipDetail item={starship} loading={loading} />
      <DataBank item={starship} loading={loading} />
    </Layout>
  );
};

export default StarshipItem;
