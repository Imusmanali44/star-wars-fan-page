import React, { useEffect } from "react";
import Layout from "../layout";
import FilmItemDetail from "../components/organisms/FilmItemDetail";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmDetailsAction } from "../redux/actions/filmsActions";
import DataBank from "../components/organisms/DataBank";

const FilmItem = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { film, loading } = useSelector((state: any) => state.filmDetail);

  useEffect(() => {
    dispatch(fetchFilmDetailsAction(id as string) as any);
  }, [id, dispatch]);


  return (
    <Layout>
      <FilmItemDetail film={film} loading={loading} />
      <DataBank item={film} loading={loading} />
    </Layout>
  );
};

export default FilmItem;
