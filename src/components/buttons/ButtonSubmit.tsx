import clsx from "clsx"

const ButtonSubmit = ({
  className,
  children,
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={clsx(
        className,
        "bg-stone-700 hover:bg-stone-800 transition-colors cursor-pointer text-stone-100 px-5 py-2.5 rounded-md",
      )}
    >
      {children}
    </button>
  )
}
export default ButtonSubmit
