import clsx from "clsx"

interface Props extends React.ComponentProps<"div"> {
  orientation?: "horizontal" | "vertical"
  extend?: boolean
  overridesColor?: boolean
  overridesThickness?: boolean
}
const Line = ({
  orientation = "horizontal",
  extend = true,
  overridesColor,
  overridesThickness,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={clsx(
        className,
        extend && (orientation === "horizontal" ? "w-full" : "h-full"),
        !overridesThickness && (orientation === "horizontal" ? "h-px" : "w-px"),
        !overridesColor && "bg-stone-300",
      )}
      {...props}
    />
  )
}
export default Line
