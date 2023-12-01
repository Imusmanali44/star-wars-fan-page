import React from "react";
import RouteLink from "../../atoms/RouteLink";
import "./style.css";

interface PropsType {
  title: string;
  id: number | string | null;
  catName: string;
  img: string;
  imgId: number
}

const SwiperCard = ({ title, id, catName, img, imgId }: PropsType) => {
  return (
    <div className="entity-container">
      <div className="entity-mask">
        <RouteLink to={`/${catName}/${id}/${imgId}`} className="entity-link outer-link">
          <img className="thumb" alt={title} src={img} />
        </RouteLink>
        <div className="entity-details text-left visible">
          <div className="decal-contain">
            <div className="decal"></div>
          </div>
          <RouteLink
            to={`/${catName}/${id}/${imgId}`}
            className="entity-link title-link show-details"
          >
            <h3 className="title no_focus">{title}</h3>
          </RouteLink>
          <div className="notch-contain"></div>
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
