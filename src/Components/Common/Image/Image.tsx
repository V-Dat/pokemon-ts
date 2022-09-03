function Image(props: ImageProps) {
  const { className, alt, src } = props;
  return (
    <img
      className={`image-root ${className ? className : ""}`}
      alt={alt}
      src={src}
      loading="lazy"
    />
  );
}

export default Image;

interface ImageProps {
  className?: string;
  alt: string;
  src: string;
}
