import type { ReactNode } from "react"

interface Props {
  text?: string
  icon?: ReactNode
}
const DropdownLabel = ({ text, icon }: Props) => {
  return (
    <div className="group flex gap-0.5 items-center text-sm font-medium w-full">
      {icon}
      <p className="group-hover:text-stone-500 text-stone-400 transition-colors">
        {text}
      </p>
    </div>
  )
}
export default DropdownLabel
