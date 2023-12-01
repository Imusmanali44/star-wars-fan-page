import React from "react";
import RouteLink from "../../atoms/RouteLink";
import { Film } from "../../../types";
import "./style.css";

interface PropsType {
  title: string;
  name: string;
  item?: Film;
  id: number | string | null;
  img: string;
  imgId: React.Key | null | undefined;
}

const CategoryCard = ({ item, title, name, id, img, imgId }: PropsType) => {
  return (
    <div className="card-container">
      <div className="card-mask">
        <RouteLink
          to={`/${name}/${id}/${imgId}`}
          className="card-link-img"
        >
          <img className="thumb" alt={item?.title} src={img} />
        </RouteLink>
        <div className="card-content-wrapper">
          <div className="card-decal">
            <div className="decal"></div>
          </div>
          <RouteLink to={`/${name}/${id}?imgId=${imgId}`} className="card-link">
            <h3 className="card-title">{title}</h3>
          </RouteLink>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
