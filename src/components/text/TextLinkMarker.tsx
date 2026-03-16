import clsx from "clsx"
import type { TextLinkProps } from "./TextLink"
import TextLink from "./TextLink"

const TextLinkMarker = ({ className, ...props }: TextLinkProps) => {
  return (
    <TextLink
      className={clsx(className, "text-[#60b0f1] font-medium")}
      {...props}
    />
  )
}
export default TextLinkMarker
