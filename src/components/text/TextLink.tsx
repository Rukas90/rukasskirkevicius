import clsx from "clsx"
import { Link, type LinkProps } from "react-router-dom"

type IndicatorSize = "small" | "bigger"

const IndicatorStyles: Record<IndicatorSize, string> = {
  small: "after:size-1 hover:after:-bottom-1.5",
  bigger: "after:size-1.5 hover:after:-bottom-2.5",
}
export interface TextLinkProps extends LinkProps {
  indicatorSize?: IndicatorSize
}
const TextLink = ({
  indicatorSize = "small",
  className,
  children,
  ...props
}: TextLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        `relative
         after:content-['']
         after:absolute
         after:left-1/2
         after:-translate-x-1/2
         after:rounded-full
         after:origin-left
         after:transition-all
         after:will-change-transform
         hover:text-stone-800 
         after:bg-transparent 
         hover:after:bg-stone-500
         after:bottom-0
         ${IndicatorStyles[indicatorSize]}`,
      )}
    >
      <span>{children}</span>
    </Link>
  )
}
export default TextLink
