import React, { useEffect } from "react";
import Container from "../../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../molecules/CategoryCard/CategoryCard";
import { Vehicle } from "../../../types";
import SectionHead from "../../molecules/SectionHead";
import Section from "../../atoms/Section";
import Loader from "../../molecules/Loader";
import { getId } from "../../../utils/helper";
import { vehiclesImg } from "../../../data/VehiclesImages";
import "./style.css";
import { fetchVehiclesAction } from "../../../redux/actions/vehiclesActions";

const VehiclesCard = () => {
  const dispatch = useDispatch();
  const { vehicles, loading } = useSelector((state: any) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehiclesAction() as any);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <SectionHead title={"Browser Vehicles"} />

        <Section className="d-flex flex-wrap justify-center films-container">
          {loading && <Loader />}
          {vehicles?.length === 0 && !loading ? (
            <p>No data found</p>
          ) : (
            !loading &&
            vehicles?.results?.map(
              (item: Vehicle, index: React.Key | null | undefined) => {
                const id = getId(item?.url);
                const vehiclesImage = vehiclesImg[Number(index)];

                return (
                  <CategoryCard
                    title={item?.name}
                    key={index}
                    name={"vehicle"}
                    id={id}
                    img={vehiclesImage ? vehiclesImage.img : ''}
                    imgId={index}
                  />
                );
              }
            )
          )}
        </Section>
      </Container>
    </Section>
  );
};

export default VehiclesCard;
