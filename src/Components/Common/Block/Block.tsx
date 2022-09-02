function Block(props: BlockProps) {
  const { className, children, onClick } = props;
  const [left, middle, right] = children;
  return (
    <div
      className={`block-root ${className ? className : ""}`}
      onClick={onClick}
    >
      {left}
      {middle}
      {right}
    </div>
  );
}

export default Block;

interface BlockProps {
  className: string;
  children: any;
  onClick?: (event?: any) => void;
}
