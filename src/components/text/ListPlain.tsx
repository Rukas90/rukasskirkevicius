import clsx from "clsx"

const ListPlain = ({ className, children }: React.ComponentProps<"ul">) => {
  return (
    <ul
      className={clsx(
        "list-disc pl-4 my-4 font-light text-[0.925rem]",
        className,
      )}
    >
      {children}
    </ul>
  )
}
export default ListPlain
