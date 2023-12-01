interface PropsType {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Section = ({ className, children, style }: PropsType) => {
  return (
    <section className={`section ${className || ''}`} style={style}>
      {children}
    </section>
  );
};


export default Section;
