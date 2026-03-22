import type { Banner } from "@types"
import ImagePicture from "./ImagePicture"
import clsx from "clsx"
import YouTube from "react-youtube"

interface ProjectBannerProps extends Pick<
  React.ComponentProps<"div">,
  "className"
> {
  banner: Banner
}
const ProjectBanner = ({ banner, className }: ProjectBannerProps) => {
  return (
    <div>
      {banner.type === "image" ? (
        <ImagePicture
          path={banner.path}
          className={clsx(
            "object-cover brightness-103 saturate-107 w-full h-96",
            className,
            banner.classes,
          )}
        />
      ) : (
        <YouTube
          className={clsx(className, "w-full h-96")}
          videoId={banner.videoId}
        />
      )}
    </div>
  )
}
export default ProjectBanner
