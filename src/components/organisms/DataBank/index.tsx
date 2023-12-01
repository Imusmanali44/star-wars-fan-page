import React, { useEffect } from "react";
import { Film } from "../../../types";
import Section from "../../atoms/Section";
import Container from "../../atoms/Container";
import Loader from "../../molecules/Loader";
import SectionHead from "../../molecules/SectionHead";
import Tabs from "../../molecules/Tabs";
import { useDispatch } from "react-redux";
import { fetchFilmsAction } from "../../../redux/actions/filmsActions";
import { fetchStarShipsAction } from "../../../redux/actions/starshipsActions";
import { fetchVehiclesAction } from "../../../redux/actions/vehiclesActions";
import "./style.css";

interface PropTypes {
  item: Film;
  loading: Boolean;
}

const DataBank = ({ item, loading }: PropTypes) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmsAction() as any);
    dispatch(fetchStarShipsAction() as any);
    dispatch(fetchVehiclesAction() as any);

  }, [dispatch]);

  return (
    <Section>
      <Container>
        <Section className="dataBankHead">
          <SectionHead  title="DataBank" />
          {loading ? <Loader /> : <Tabs item={item} />}
        </Section>
      </Container>
    </Section>
  );
};

export default DataBank;
