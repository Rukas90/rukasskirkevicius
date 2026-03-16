import clsx from "clsx"

const TextPlain = ({ className, ...props }: React.ComponentProps<"span">) => {
  return (
    <span
      className={clsx(className, "font-light text-[0.925rem]")}
      {...props}
    ></span>
  )
}
export default TextPlain
