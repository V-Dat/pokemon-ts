import Card from "../../Common/Card/Card";
import Image from "../../Common/Image/Image";
import Text from "../../Common/Text/Text";

function CardTextAndImage(props: CardTextAndImageProps) {
  const { text, src, alt, handleClickCardTextAndImage, className } = props;

  return (
    <Card
      className={`cardtextandimage-root ${className ? className : ""}`}
      handleClickCard={handleClickCardTextAndImage}
    >
      <Text children={text} />
      <Image src={src} alt={alt} />
    </Card>
  );
}

export default CardTextAndImage;

interface CardTextAndImageProps {
  text: string;
  src: string;
  alt: string;
  className?: string;
  handleClickCardTextAndImage?: (event?: Event) => void;
}
