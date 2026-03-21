import type { EntryDetail } from "@types"
import clsx from "clsx"
import { TextLocalized } from "./text"
import { LocalizedDetailTypes } from "@utils"

interface ProjectDetail extends Omit<React.ComponentProps<"p">, "children"> {
  detail: Pick<EntryDetail, "type" | "info">
}
const ProjectDetail = ({ detail, className, ...props }: ProjectDetail) => {
  return (
    <TextLocalized
      text={LocalizedDetailTypes[detail.type]}
      className={clsx(className, "text-sm font-medium")}
      as="p"
      {...props}
    >
      {": "}
      <TextLocalized
        text={detail.info}
        as="span"
        className="font-light whitespace-pre-line"
      />
    </TextLocalized>
  )
}
export default ProjectDetail
