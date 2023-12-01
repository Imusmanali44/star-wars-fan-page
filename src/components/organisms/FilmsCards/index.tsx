import React, { useEffect } from "react";
import Container from "../../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../molecules/CategoryCard/CategoryCard";
import { Film } from "../../../types";
import SectionHead from "../../molecules/SectionHead";
import Section from "../../atoms/Section";
import Loader from "../../molecules/Loader";
import { fetchFilmsAction } from "../../../redux/actions/filmsActions";
import { filmsImg } from "../../../data/FilmsImages";
import "./style.css";

const FilmsCard = () => {
  const dispatch = useDispatch();
  const { films, loading } = useSelector((state: any) => state.films);

  useEffect(() => {
    dispatch(fetchFilmsAction() as any);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <SectionHead title={"Browser Films"} />

        <Section className="d-flex flex-wrap justify-center films-container">
          {loading && <Loader />}
          {films?.length === 0 && !loading ? (
            <p>No data found</p>
          ) : (
            !loading &&
            films?.results?.map(
              (item: Film, index: React.Key | null | undefined) => {
                const filmImage = filmsImg[Number(index)];
                return (
                  <CategoryCard
                    item={item}
                    title={item?.title}
                    key={index}
                    name={"film"}
                    id={item?.episode_id}
                    img={filmImage ? filmImage.img : ''}
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

export default FilmsCard;
