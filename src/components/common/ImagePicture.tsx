import clsx from "clsx"

export type PictureProps = React.ComponentProps<"picture">

interface Props extends PictureProps {
  path: string
  alt?: string
}
const ImagePicture = ({ path, className, children, alt, ...props }: Props) => {
  return (
    <picture className={clsx(className, "object-cover")} {...props}>
      <source srcSet={`${path}.avif`} type="image/avif" />
      <source srcSet={`${path}.webp`} type="image/webp" />
      <img
        src={`${path}.jpg`}
        alt={alt ?? "fallback image"}
        loading="lazy"
        className={clsx(className, "object-cover")}
      />
      {children}
    </picture>
  )
}
export default ImagePicture
