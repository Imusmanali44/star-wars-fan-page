import React, { useState } from "react";
import "./style.css";
import { Film, Starship, Vehicle } from "../../../types";
import { useSelector } from "react-redux";
import CategoryCard from "../CategoryCard/CategoryCard";
import { getId } from "../../../utils/helper";
import { filmsImg } from "../../../data/FilmsImages";
import { vehiclesImg } from "../../../data/VehiclesImages";
import { starshipImg } from "../../../data/Starships";
interface PropTypes {
  item: Film;
}

const Tabs = ({ item }: PropTypes) => {
  const [activeTab, setActiveTab] = useState(0); // State to manage active tab
  const { films } = useSelector((state: any) => state.films);
  const { starShips } = useSelector((state: any) => state.starShips);
  const { vehicles } = useSelector((state: any) => state.vehicles);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabData = [
    { label: "Films", content: films },
    { label: "Vehicles", content: vehicles },
    { label: "Starships", content: starShips },
  ];

  console.log(films);

  return (
    <div className="tabs-wrap d-flex">
      <div className="tab-list">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab relative ${activeTab === index ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content d-flex flex-wrap">
        {tabData[activeTab].label === "Vehicles" &&
          tabData[activeTab].content?.results?.map(
            (item: Vehicle, index: number) => {
              const id = getId(item?.url);
              const filmImage = vehiclesImg[Number(index)];

              return (
                <CategoryCard
                  title={item?.name}
                  key={index}
                  name={"vehicle"}
                  id={id}
                  img={filmImage ? filmImage.img : ""}
                  imgId={index}
                />
              );
            }
          )}
        {tabData[activeTab].label === "Starships" &&
          tabData[activeTab].content?.results?.map(
            (item: Starship, index: number) => {
              const id = getId(item?.url);
              const filmImage = starshipImg[Number(index)];

              return (
                <CategoryCard
                  title={item?.name}
                  key={index}
                  name={"starship"}
                  id={id}
                  img={filmImage ? filmImage.img : ""}
                  imgId={index}
                />
              );
            }
          )}
        {tabData[activeTab].label === "Films" &&
          tabData[activeTab].content?.results?.map(
            (item: Film, index: number) => {
              const filmImage = filmsImg[Number(index)];

              return (
                <CategoryCard
                  title={item?.title}
                  key={index}
                  name={"film"}
                  id={item?.episode_id}
                  img={filmImage ? filmImage.img : ""}
                  imgId={index}
                />
              );
            }
          )}
      </div>
    </div>
  );
};

export default Tabs;
