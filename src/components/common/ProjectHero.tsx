import { Line } from "@components"
import ProjectDetail from "@components/ProjectDetail"
import { TextLocalized } from "@components"
import type { EntryDetail, LocalizedText } from "@types"
import type { ReactNode } from "react"

interface ProjectHeroProps {
  media: ReactNode
  title: LocalizedText | string
  subtitle?: LocalizedText | string
  details?: EntryDetail[]
  extraDetails?: ReactNode
}

const ProjectHero = ({
  media,
  title,
  subtitle,
  details,
  extraDetails,
}: ProjectHeroProps) => {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-8 justify-center">
      <div className="h-96 max-w-full aspect-3/2">
        <div className="w-full h-full rounded-md overflow-hidden">{media}</div>
      </div>
      <div className="lg:w-auto w-full">
        <TextLocalized
          text={title}
          as="p"
          className="text-4xl font-medium text-stone-800"
        />
        {subtitle && (
          <TextLocalized text={subtitle} className="text-stone-600 text-lg" />
        )}
        <Line overridesColor className="bg-stone-200 my-3" />
        <div className="flex flex-col gap-2.5">
          {details?.map((detail) => (
            <ProjectDetail key={detail.type} detail={detail} />
          ))}
          {extraDetails}
        </div>
      </div>
    </div>
  )
}
export default ProjectHero
