import { ReactNode } from "react";
import Block from "../Block/Block";

function Card(props: CardProps) {
  const { className, children, handleClickCard } = props;
  return (
    <Block
      className={`card-root ${className ? className : ""}`}
      onClick={handleClickCard ? handleClickCard : undefined}
    >
      {children}
    </Block>
  );
}

export default Card;

interface CardProps {
  className?: string;
  children?: ReactNode;
  handleClickCard?: (event?: Event) => void;
}
