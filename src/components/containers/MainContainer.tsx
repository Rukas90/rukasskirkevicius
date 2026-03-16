import clsx from "clsx"

const MainContainer = ({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "relative min-w-svw min-h-svh flex flex-col animate-fadein",
      )}
    >
      {children}
    </div>
  )
}
export default MainContainer
