import { ReactNode } from "react";

function Button(props: ButtonProps) {
  const { className, text, children, handleClickButton } = props;
  return (
    <div
      className={`button-root ${className ? className : ""}`}
      onClick={handleClickButton ? handleClickButton : undefined}
    >
      {text && text}
      {children}
    </div>
  );
}

export default Button;

interface ButtonProps {
  className?: string;
  text: string;
  children?: ReactNode;
  handleClickButton?: (event?: any) => void;
}
