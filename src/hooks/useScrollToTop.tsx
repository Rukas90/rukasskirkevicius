import { useEffect } from "react"

interface Props {
  scrollOnLoad: boolean
}
const useScrollToTop = ({ scrollOnLoad }: Props) => {
  const scrollToTop = (behavior: ScrollBehavior = "smooth") => {
    window.scroll({
      top: 0,
      left: 0,
      behavior,
    })
  }

  useEffect(() => {
    if (!scrollOnLoad) {
      return
    }
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual"
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.scrollTo({ top: 0, behavior: "instant" })
      })
    })
  }, [])

  return {
    scrollToTop,
  }
}
export default useScrollToTop
