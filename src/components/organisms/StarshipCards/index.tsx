import React, { useEffect } from "react";
import Container from "../../atoms/Container";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../molecules/CategoryCard/CategoryCard";
import { Starship } from "../../../types";
import SectionHead from "../../molecules/SectionHead";
import Section from "../../atoms/Section";
import Loader from "../../molecules/Loader";
import { fetchStarShipsAction } from "../../../redux/actions/starshipsActions";
import { getId } from "../../../utils/helper";
import { starshipImg } from "../../../data/Starships";
import "./style.css";

const StarShipsCard = () => {
  const dispatch = useDispatch();
  const { starShips, loading } = useSelector((state: any) => state.starShips);

  useEffect(() => {
    dispatch(fetchStarShipsAction() as any);
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <SectionHead title={"Browser Starships"} />

        <Section className="d-flex flex-wrap justify-center films-container">
          {loading && <Loader />}
          {starShips?.length === 0 && !loading ? (
            <p>No data found</p>
          ) : (
            !loading &&
            starShips?.results?.map(
              (item: Starship, index: React.Key | null | undefined) => {
                const id = getId(item?.url);
                const starshipImage = starshipImg[Number(index)];

                return (
                  <CategoryCard
                    title={item?.name}
                    key={index}
                    name={"starship"}
                    id={id}
                    img={starshipImage ? starshipImage.img : ''}
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

export default StarShipsCard;
