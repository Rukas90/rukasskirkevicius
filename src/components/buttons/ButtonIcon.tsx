import clsx from "clsx"
import type { ReactNode } from "react"

interface ButtonIconProps extends Omit<
  React.ComponentProps<"button">,
  "children"
> {
  icon: ReactNode
}
const ButtonIcon = ({ icon, className, ...props }: ButtonIconProps) => {
  return (
    <button className={clsx(className, "cursor-pointer")} {...props}>
      <span className="pointer-events-none">{icon}</span>
    </button>
  )
}
export default ButtonIcon
