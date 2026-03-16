import clsx from "clsx"

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string
}
const InputField = ({ label, className, ...props }: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-medium lowercase">{label}</label>
      )}
      <input
        {...props}
        className={clsx(
          className,
          "text-sm px-2 py-2 border-2 rounded-md border-stone-500 hover:border-stone-700 active:border-stone-700 transition-colors",
        )}
      />
    </div>
  )
}
export default InputField
