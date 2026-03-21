import { useMediaQuery } from "react-responsive"

const useIsCollapsed = () =>
  useMediaQuery({
    query: "(width < 40rem)", // Equivalent to Tailwind's sm:
  })
export default useIsCollapsed
