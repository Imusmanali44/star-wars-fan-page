
interface PropsType {
  children: React.ReactNode;
}

const Container = ({ children }: PropsType) => {
  return <div className="container">{children}</div>;
};

export default Container;
