import clsx from "clsx"

interface TextAreaProps extends React.ComponentProps<"textarea"> {
  label?: string
}
const TextArea = ({ label, className, ...props }: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-medium lowercase">{label}</label>
      )}
      <textarea
        {...props}
        className={clsx(
          className,
          "text-sm px-2 py-2 border-2 rounded-md border-stone-500 hover:border-stone-700 active:border-stone-700 transition-colors",
        )}
      />
    </div>
  )
}
export default TextArea
