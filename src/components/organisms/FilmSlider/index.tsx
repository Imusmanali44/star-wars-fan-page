import React, { useEffect, useMemo } from "react";
import Section from "../../atoms/Section";
import SectionHead from "../../molecules/SectionHead";
import Container from "../../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilmsAction } from "../../../redux/actions/filmsActions";
import Loader from "../../molecules/Loader";
import SwiperSlider from "../../molecules/SwiperSlider";
import { filmsImg } from "../../../data/FilmsImages";
import { Film } from "../../../types";
import { SwiperSlide } from "swiper/react";
import SwiperCard from "../../molecules/SwiperCard";

const FilmsSlider = () => {
  const dispatch = useDispatch();
  const { films, loading } = useSelector((state: any) => state.films);

  const fetchFilmsMemoized = useMemo(() => {
    return () => {
      dispatch(fetchFilmsAction() as any);
    };
  }, [dispatch]);

  useEffect(() => {
    fetchFilmsMemoized();
  }, [fetchFilmsMemoized]);
  
  return (
    <Section>
      <Container>
        <SectionHead title={"Films"} to={"/films"} />
        {loading && <Loader />}
        {!films?.results && !loading ? (
          <p className="not-found d-flex items-center justify-center">
            No data found
          </p>
        ) : (
          <SwiperSlider>
            {!loading &&
              films?.results?.map((item: Film, index: number) => {
                const filmImage = filmsImg[Number(index)];
                return (
                  <SwiperSlide key={index}>
                    <SwiperCard
                      title={item?.title}
                      catName="film"
                      id={item?.episode_id}
                      img={filmImage ? filmImage.img : ""}
                      imgId={index}
                    />
                  </SwiperSlide>
                );
              })}
          </SwiperSlider>
        )}
      </Container>
    </Section>
  );
};

export default FilmsSlider;
