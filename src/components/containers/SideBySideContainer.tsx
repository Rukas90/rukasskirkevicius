import clsx from "clsx"
import type React from "react"

const SideBySideContainer = ({
  children,
  className,
}: Pick<React.ComponentProps<"div">, "children" | "className">) => {
  return (
    <div className={clsx("grid lg:grid-cols-2 grid-cols-1", className)}>
      {children}
    </div>
  )
}
export default SideBySideContainer
