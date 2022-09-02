function Block(props: BlockProps) {
  const { className, children } = props;
  const [left, middle, right] = children;
  return (
    <div className={`block-root ${className ? className : ""}`}>
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
}
