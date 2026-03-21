import { IconArrowDown, TextLocalized } from "@components"
import type { LabeledLink } from "@types"
import { Link } from "react-router-dom"

const BackLink = ({ label, url, target }: LabeledLink) => {
  return (
    <Link to={url} target={target}>
      <div className="group inline-flex items-center text-stone-500 hover:text-stone-800 transition-colors">
        <IconArrowDown className="size-6 rotate-90 mr-1 pointer-events-none will-change-transform transition-transform group-hover:-translate-x-1.5" />
        <TextLocalized
          text={label}
          className="text-md pointer-events-none"
          as="p"
        />
      </div>
    </Link>
  )
}
export default BackLink
