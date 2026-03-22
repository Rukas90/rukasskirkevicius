import { BackLink, Line } from "@components"
import type { LocalizedText } from "@types"
import { Outlet } from "react-router-dom"

interface Props {
  backUrl: string
  backHash?: string
  label?: LocalizedText
}
const ProjectLayout = ({
  backUrl,
  backHash,
  label = { localeKey: "go_back", fallback: "Go Back" },
}: Props) => {
  const url = backHash ? `${backUrl}#${backHash}` : backUrl

  return (
    <div>
      <BackLink label={label} url={url} target="_self" />
      <Line className="bg-stone-100 mt-1.5 mb-5" overridesColor />
      <Outlet />
    </div>
  )
}
export default ProjectLayout
