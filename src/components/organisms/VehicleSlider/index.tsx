import React, { useEffect } from "react";
import Section from "../../atoms/Section";
import SectionHead from "../../molecules/SectionHead";
import Container from "../../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../molecules/Loader";
import { fetchVehiclesAction } from "../../../redux/actions/vehiclesActions";

import { Vehicle } from "../../../types";
import { getId } from "../../../utils/helper";
import { vehiclesImg } from "../../../data/VehiclesImages";

//swiper Slider
import { SwiperSlide } from "swiper/react";
import SwiperCard from "../../molecules/SwiperCard";

import SwiperSlider from "../../molecules/SwiperSlider";

const VehicleSlider = () => {
  const dispatch = useDispatch();
  const { vehicles, loading } = useSelector((state: any) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehiclesAction() as any);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <SectionHead title={"Vehicles"} to={"/vehicles"} />
        {loading && <Loader />}
        {!vehicles?.results && !loading ? (
          <p className="not-found d-flex items-center justify-center">No data found</p>
        ) : (
          <SwiperSlider>
            {!loading &&
              vehicles?.results?.map((item: Vehicle, index: number) => {
                const id = getId(item?.url);
                const vehiclesImage = vehiclesImg[Number(index)];

                return (
                  <SwiperSlide key={index}>
                    <SwiperCard
                      title={item?.name}
                      catName="vehicle"
                      id={id}
                      img={vehiclesImage ? vehiclesImage.img : ""}
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

export default VehicleSlider;
