import clsx from "clsx"

const ButtonBasic = ({
  className,
  children,
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={clsx(
        className,
        "px-3 py-1 bg-stone-100 rounded-md text-stone-500 hover:text-stone-700 cursor-pointer",
      )}
    >
      {children}
    </button>
  )
}
export default ButtonBasic
