import ImagePicture, { type PictureProps } from "./ImagePicture"

const Logo = ({ ...props }: PictureProps) => {
  return <ImagePicture {...props} path="/img/misc/profile" />
}
export default Logo
