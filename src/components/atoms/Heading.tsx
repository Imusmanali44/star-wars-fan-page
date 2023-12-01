
interface PropsType {
  className?: string;
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

const Heading = ({ className, children, element, style }: PropsType) => {
  const HeadingTag = element ? element : "h4";
  return (
    <HeadingTag className={className} style={style}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
