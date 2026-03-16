import ImagePicture, { type PictureProps } from "./ImagePicture"

const Logo = ({ ...props }: PictureProps) => {
  return <ImagePicture {...props} path="src/assets/img/misc/profile" />
}
export default Logo
