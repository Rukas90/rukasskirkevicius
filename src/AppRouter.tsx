import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import BasePage from "./pages/BasePage"

const Home = lazy(() => import("./pages/Home"))
const GamePage = lazy(() => import("./pages/projects/GamePage"))
const GraphicsPage = lazy(() => import("./pages/GraphicsPage"))
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"))
const ForsakenDawn = lazy(() => import("./pages/projects/ForsakenDawn"))
const Haunted = lazy(() => import("./pages/projects/Haunted"))
const Rpg2dShooter = lazy(() => import("./pages/projects/Rpg2dShooter"))
const TutorialsPage = lazy(() => import("./pages/TutorialsPage"))
const Contact = lazy(() => import("./pages/Contact"))
const NotFound = lazy(() => import("./pages/NotFound"))

const AppRouter = () => {
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<BasePage />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects">
            <Route index element={<ProjectsPage />} />
            <Route element={<GamePage />}>
              <Route path="forsaken-dawn" element={<ForsakenDawn />} />
              <Route path="haunted" element={<Haunted />} />
              <Route path="rpg-2d-shooter" element={<Rpg2dShooter />} />
            </Route>
          </Route>
          <Route path="/graphics">
            <Route index element={<GraphicsPage />} />
          </Route>
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
export default AppRouter
