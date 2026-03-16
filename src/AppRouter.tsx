import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import BasePage from "./pages/BasePage"

const Home = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.default })),
)
const Projects = lazy(() =>
  import("./pages/Projects").then((m) => ({ default: m.default })),
)
const Contact = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.default })),
)
const NotFound = lazy(() =>
  import("./pages/NotFound").then((m) => ({ default: m.default })),
)
const AppRouter = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<BasePage />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
export default AppRouter
