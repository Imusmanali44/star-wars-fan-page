interface PropsType {
  className?: string;
  children: React.ReactNode;
  element?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

const Button = ({ className, children, style }: PropsType) => {
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
};

export default Button;
