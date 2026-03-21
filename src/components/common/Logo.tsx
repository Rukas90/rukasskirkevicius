import ImagePicture, { type PictureProps } from "./ImagePicture"

const Logo = ({ ...props }: PictureProps) => {
  return <ImagePicture {...props} path="public/img/misc/profile" />
}
export default Logo
