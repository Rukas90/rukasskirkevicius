import clsx from "clsx"

const FlexCenterContainer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={clsx(className, "flex justify-center items-center flex-1")}
      {...props}
    >
      {children}
    </div>
  )
}
export default FlexCenterContainer
