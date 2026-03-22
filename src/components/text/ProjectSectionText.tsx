import clsx from "clsx"
import type { TextLocalizedProps } from "./TextLocalized"
import TextLocalized from "./TextLocalized"

const ProjectSectionText = ({ className, ...props }: TextLocalizedProps) => {
  return (
    <TextLocalized
      className={clsx(className, "mt-6 text-xl mb-2")}
      {...props}
    />
  )
}
export default ProjectSectionText
