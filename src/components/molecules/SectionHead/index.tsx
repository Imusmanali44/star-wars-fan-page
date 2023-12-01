import RouteLink from "../../atoms/RouteLink";
import Heading from "../../atoms/Heading";
import "./style.css";

interface PropTypes {
  title: string;
  to?: string;
}

const SectionHead = ({ title, to }: PropTypes) => {
  return (
    <div className="title d-flex justify-between relative">
      <Heading element="h2">{title}</Heading>
      {to && (
        <RouteLink to={to} className="relative">
          View All
        </RouteLink>
      )}
    </div>
  );
};

export default SectionHead;
