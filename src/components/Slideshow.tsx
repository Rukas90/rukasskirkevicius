import type React from "react"
import { ImagePicture } from "./common"
import { useCallback, useEffect, useState } from "react"
import clsx from "clsx"
import { IconArrowDown } from "./icons"
import { ButtonIcon } from "./buttons"
import SlideshowDot from "./SlideshowDot"

type Paths = {
  directory: string
  fileNames: string[]
}
interface SlideshowProps extends Omit<React.ComponentProps<"div">, "children"> {
  paths: string[] | Paths
  autoSlide?: boolean
  autoDelay?: number
}
const Slideshow = ({
  paths,
  autoSlide,
  autoDelay,
  className,
  ...props
}: SlideshowProps) => {
  const [viewingIndex, setViewingIndex] = useState(0)

  const getPath = useCallback(
    (index: number): string => {
      if (Array.isArray(paths)) {
        return paths[index]
      }
      return `${paths.directory}/${paths.fileNames[index]}`
    },
    [paths],
  )
  const getFilesLength = useCallback((): number => {
    if (Array.isArray(paths)) return paths.length
    return paths.fileNames.length
  }, [paths])

  const viewNext = useCallback(() => {
    setViewingIndex((index) => {
      const newIndex = index + 1
      return newIndex >= getFilesLength() ? 0 : newIndex
    })
  }, [getFilesLength])

  const viewPrevious = useCallback(() => {
    setViewingIndex((index) => {
      const newIndex = index - 1
      return newIndex < 0 ? getFilesLength() - 1 : newIndex
    })
  }, [getFilesLength])

  useEffect(() => {
    if (!autoSlide) return
    const interval = setInterval(viewNext, autoDelay)
    return () => clearInterval(interval)
  }, [autoSlide, autoDelay, viewNext])

  return (
    <div
      className={clsx(
        className,
        "group flex relative! rounded-lg overflow-hidden shine",
      )}
      {...props}
    >
      <ImagePicture className="w-full h-full" path={getPath(viewingIndex)} />

      <ButtonIcon
        className="absolute rotate-90 size-16 text-stone-200 opacity-0 group-hover:opacity-10 hover:opacity-100 transition-opacity top-1/2 -translate-y-1/2 left-2.5"
        icon={<IconArrowDown />}
        onClick={viewPrevious}
      />
      <ButtonIcon
        className="absolute -rotate-90 size-16 text-stone-200 opacity-0 group-hover:opacity-10 hover:opacity-100 transition-opacity top-1/2 -translate-y-1/2 right-2.5"
        icon={<IconArrowDown />}
        onClick={viewNext}
      />
      <div className="absolute flex justify-center gap-2.5 w-full py-5 bottom-0 opacity-25 group-hover:opacity-50 transition-opacity">
        {Array.from({ length }).map((_, index) => (
          <SlideshowDot
            key={index}
            index={index}
            currentIndex={viewingIndex}
            setIndex={setViewingIndex}
          />
        ))}
      </div>
    </div>
  )
}
export default Slideshow
