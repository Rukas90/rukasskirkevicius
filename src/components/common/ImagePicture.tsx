import { IconSpinner } from "@components"
import clsx from "clsx"
import { useState } from "react"

export type PictureProps = React.ComponentProps<"picture">

interface Props extends PictureProps {
  path: string
  alt?: string
}
const ImagePicture = ({ path, className, children, alt, ...props }: Props) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <picture className={clsx(className, "relative object-cover")} {...props}>
      <source srcSet={`${path}.avif`} type="image/avif" />
      <source srcSet={`${path}.webp`} type="image/webp" />
      <img
        src={`${path}.jpg`}
        alt={alt ?? "fallback image"}
        loading="lazy"
        className={clsx(className, "object-cover")}
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <IconSpinner className="absolute top-1/2 left-1/2 size-12 -translate-1/2 text-stone-300 animate-spin" />
      )}
      {children}
    </picture>
  )
}
export default ImagePicture
