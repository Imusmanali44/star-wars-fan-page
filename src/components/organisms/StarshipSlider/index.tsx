import React, { useEffect } from "react";
import Section from "../../atoms/Section";
import SectionHead from "../../molecules/SectionHead";
import Container from "../../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../molecules/Loader";
import { fetchStarShipsAction } from "../../../redux/actions/starshipsActions";

import { Starship } from "../../../types";
import { getId } from "../../../utils/helper";
import { starshipImg } from "../../../data/Starships";

//swiper Slider
import { SwiperSlide } from "swiper/react";
import SwiperCard from "../../molecules/SwiperCard";
import SwiperSlider from "../../molecules/SwiperSlider";

const StarshipsSlider = () => {
  const dispatch = useDispatch();
  const { starShips, loading } = useSelector((state: any) => state.starShips);

  useEffect(() => {
    dispatch(fetchStarShipsAction() as any);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <SectionHead title={"Starships"} to={"/starships"} />
        {loading && <Loader />}
        {!starShips?.results && !loading ? (
          <p className="not-found d-flex items-center justify-center">
            No data found
          </p>
        ) : (
          <SwiperSlider>
            {!loading &&
              starShips?.results?.map((item: Starship, index: number) => {
                const id = getId(item?.url);
                const starshipImage = starshipImg[Number(index)];

                return (
                  <SwiperSlide key={index}>
                    <SwiperCard
                      title={item?.name}
                      catName="starship"
                      id={id}
                      img={starshipImage ? starshipImage.img : ""}
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

export default StarshipsSlider;
