import { ReactNode } from "react";

function Text(props: TextProps) {
  const { className, children } = props;
  return (
    <div className={`text-root ${className ? className : ""}`}>{children}</div>
  );
}

export default Text;

interface TextProps {
  className?: string;
  children?: ReactNode;
}
