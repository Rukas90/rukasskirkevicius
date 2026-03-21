import { ButtonSubmit, ImagePicture, TextLocalized } from "@components"
import type { Project } from "@types"
import ProjectDetail from "./ProjectDetail"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import YouTube from "react-youtube"
import clsx from "clsx"

const ProjectEntry = ({
  banner,
  title,
  subtitle,
  details,
  startDate,
  endDate,
  afterLink,
}: Project) => {
  const { t } = useTranslation()

  const formatDate = (startDate: Date, endDate?: Date | "present"): string => {
    const start = startDate.getFullYear()

    const end =
      endDate === undefined
        ? ""
        : endDate === "present"
          ? ` - ${t("present", "Present")}`
          : ` - ${endDate.getFullYear()}`

    return `(${start}${end})`
  }
  return (
    <div className="p-4">
      <TextLocalized
        text={title}
        as="p"
        className="relative text-2xl font-medium"
      >
        {startDate && (
          <span className="absolute text-base font-semibold align-super ml-1.25">
            {formatDate(startDate, endDate)}
          </span>
        )}
      </TextLocalized>
      <TextLocalized
        text={subtitle}
        as="p"
        className="font-normal xl:text-base text-sm mb-4 text-stone-500"
      />
      <div className="shine w-full rounded-lg mb-4">
        {banner.type === "image" ? (
          <ImagePicture
            path={banner.path}
            className={clsx(
              "object-cover w-full h-84 brightness-103 saturate-107",
              banner.classes,
            )}
          />
        ) : (
          <YouTube className="w-full h-84" videoId={banner.videoId} />
        )}
      </div>
      <div className="flex flex-col gap-2.5">
        {details.map((detail) => (
          <ProjectDetail
            key={`Project_${title.toString}_${detail.type}`}
            detail={detail}
          />
        ))}
      </div>
      {afterLink && (
        <Link to={afterLink.url} target={afterLink.target}>
          <ButtonSubmit className="mt-5 text-sm">
            <TextLocalized text={afterLink.label} as="span" />
          </ButtonSubmit>
        </Link>
      )}
    </div>
  )
}
export default ProjectEntry
