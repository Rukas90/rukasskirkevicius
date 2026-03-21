import clsx from "clsx"

interface SlideshowDotProps {
  index: number
  currentIndex: number
  setIndex: (index: number) => void
}
const SlideshowDot = ({ index, currentIndex, setIndex }: SlideshowDotProps) => {
  const isCurrent = currentIndex === index
  return (
    <button
      className={clsx(
        "p-1 border rounded-full transition-transform",
        isCurrent
          ? "bg-stone-100 border-stone-100"
          : "bg-transparent border-stone-300 hover:bg-stone-300 hover:scale-120",
      )}
      onClick={() => setIndex(index)}
    />
  )
}
export default SlideshowDot
