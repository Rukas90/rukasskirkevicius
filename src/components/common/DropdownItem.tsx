import type { ReactNode } from "react"
import clsx from "clsx"
import { useDropdown } from "../../contexts/DropdownContext"

interface Props {
  content: string | ReactNode
  onSelected?: () => void
  disabled?: boolean
}
const DropdownItem = ({ content, onSelected, disabled = false }: Props) => {
  const { close } = useDropdown()

  const handleClick = () => {
    onSelected?.()
    close()
  }
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={clsx(
        "flex px-2 py-1",
        disabled
          ? "text-stone-500"
          : "text-stone-800 hover:bg-stone-100 transition-colors",
      )}
    >
      {content}
    </button>
  )
}
export default DropdownItem
