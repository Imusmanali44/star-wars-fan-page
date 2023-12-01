import React from "react";
import { Film } from "../../../types";
import Section from "../../atoms/Section";
import Container from "../../atoms/Container";
import Heading from "../../atoms/Heading";
import Loader from "../../molecules/Loader";
import SectionHead from "../../molecules/SectionHead";
import { useParams } from "react-router-dom";
import { filmsImg } from "../../../data/FilmsImages";
import "./style.css";

interface PropTypes {
  film: Film;
  loading: Boolean;
}

const FilmItemDetail = ({ film, loading }: PropTypes) => {
  const { imgId } = useParams<{ imgId: string }>();
  const filmImg = imgId ? filmsImg[parseInt(imgId)] : undefined;

  return (
    <Section>
      <Container>
        <Section className="custom-head">
          <SectionHead title="Film" />
        </Section>
        {loading ? (
          <Loader />
        ) : (
          <div className="film-item d-flex">
            <div className="poster">
              <img src={filmImg && filmImg.img} alt={film?.title} />
            </div>
            <div className="item-detail">
              <div className="title">
                <Heading element="h1" className="item-title">
                  {film?.title}
                </Heading>
              </div>
              <div className="meta-info">
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Director: </label>
                  <p className="meta-value">{film?.director}</p>
                </div>
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Producer: </label>
                  <p className="meta-value">{film?.producer}</p>
                </div>
                <div className="meta-title d-flex items-center">
                  <label className="meta-label">Release Date: </label>
                  <p className="meta-value">{film?.release_date}</p>
                </div>
              </div>
              <p>{film?.opening_crawl}</p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};

export default FilmItemDetail;
