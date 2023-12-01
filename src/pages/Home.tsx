import Layout from "../layout";
import FilmsSlider from "../components/organisms/FilmSlider";
import StarshipsSlider from "../components/organisms/StarshipSlider";
import VehicleSlider from "../components/organisms/VehicleSlider";

const Home = () => {
  return (
    <Layout>
      <FilmsSlider />
      <StarshipsSlider />
      <VehicleSlider />
    </Layout>
  );
};

export default Home;
