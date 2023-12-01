import React from "react";
import { Vehicle } from "../../../types";
import Section from "../../atoms/Section";
import Container from "../../atoms/Container";
import Heading from "../../atoms/Heading";
import Loader from "../../molecules/Loader";
import SectionHead from "../../molecules/SectionHead";
import { useParams } from "react-router-dom";
import { vehiclesImg } from "../../../data/VehiclesImages";
import "./style.css";

interface PropTypes {
  item: Vehicle;
  loading: Boolean;
}

const VehicleDetail = ({ item, loading }: PropTypes) => {
  const { imgId } = useParams<{ imgId: string }>();
  const vehicleImg = imgId ? vehiclesImg[parseInt(imgId)] : undefined;
  return (
    <Section>
      <Container>
        <Section>
          <SectionHead title="Vehicle" />
        </Section>
        {loading ? (
          <Loader />
        ) : (
          <div className="film-item d-flex">
            <div className="poster">
              <img src={vehicleImg && vehicleImg.img} alt={item?.name} />
            </div>
            <div className="item-detail">
              <div className="title">
                <Heading element="h1" className="item-title">
                  {item?.name}
                </Heading>
              </div>
              <div className="meta-info">
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Model: </label>
                  <p className="meta-value">{item?.model}</p>
                </div>
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Cargo Capacity: </label>
                  <p className="meta-value">{item?.cargo_capacity}</p>
                </div>
                {/* <div className="meta-title d-flex items-center">
                  <label className="meta-label">Starship Class: </label>
                  <p className="meta-value">{item?.starship_class}</p>
                </div> */}
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Manufacturer: </label>
                  <p className="meta-value">{item?.manufacturer}</p>
                </div>
              </div>
              {/* <p>{item?.opening_crawl}</p> */}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default VehicleDetail;
