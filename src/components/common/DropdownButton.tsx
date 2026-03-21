import clsx from "clsx"
import IconArrowDown from "../icons/IconArrowDown"
import type { ReactNode } from "react"

interface Props extends Pick<React.ComponentProps<"button">, "ref"> {
  toggleMenu: () => void
  label?: ReactNode | string
  showing?: boolean
}
const DropdownButton = ({ toggleMenu, label, showing, ...props }: Props) => {
  return (
    <button
      {...props}
      onClick={toggleMenu}
      className={clsx(
        "flex gap-1 items-center cursor-pointer px-2 py-1.25 rounded-md transition-colors",
        "text-stone-500 hover:bg-almost-white active:bg-stone-50",
      )}
    >
      {label}
      <IconArrowDown
        className={clsx(
          "text-stone-500 size-6 transition-transform",
          showing && "-rotate-180",
        )}
      />
    </button>
  )
}
export default DropdownButton
