import React from "react";
import { Starship } from "../../../types";
import Section from "../../atoms/Section";
import Container from "../../atoms/Container";
import Heading from "../../atoms/Heading";
import Loader from "../../molecules/Loader";
import SectionHead from "../../molecules/SectionHead";
import { useParams } from "react-router-dom";
import { starshipImg } from "../../../data/Starships";
import "./style.css";

interface PropTypes {
  item: Starship;
  loading: Boolean;
}

const StarshipDetail = ({ item, loading }: PropTypes) => {
  const { imgId } = useParams<{ imgId: string }>();
  const starImg = imgId ? starshipImg[parseInt(imgId)] : undefined;

  return (
    <Section>
      <Container>
        <Section>
          <SectionHead title="Starship" />
        </Section>
        {loading ? (
          <Loader />
        ) : (
          <div className="film-item d-flex">
            <div className="poster">
              <img src={starImg && starImg.img} alt={item?.name} />
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
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Starship Class: </label>
                  <p className="meta-value">{item?.starship_class}</p>
                </div>
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

export default StarshipDetail;
