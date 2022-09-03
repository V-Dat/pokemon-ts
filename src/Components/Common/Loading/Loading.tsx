import "./Loading.scss";

function Loading(props: LoadingProps) {
  const { width = "3rem", thick = "0.5rem" } = props;
  const style = { width: width, height: width, borderWidth: thick };
  return (
    <div className="loading-root">
      <div className="loader" style={style}></div>
    </div>
  );
}

export default Loading;

interface LoadingProps {
  width?: string;
  thick?: string;
}
