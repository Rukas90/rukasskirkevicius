import clsx from "clsx"

const ContentContainer = ({
  className,
  children,
}: Pick<React.ComponentProps<"div">, "className" | "children">) => {
  return (
    <div className={clsx(className, "mx-auto w-full max-w-7xl lg:px-8 px-4")}>
      {children}
    </div>
  )
}
export default ContentContainer
