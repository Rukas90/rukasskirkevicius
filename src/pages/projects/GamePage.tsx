import { BackLink, Line } from "@components"
import { Outlet } from "react-router-dom"

const GamePage = () => {
  return (
    <div>
      <BackLink
        label={{ localeKey: "back_to_games", fallback: "Go Back" }}
        url="/projects/#games"
        target="_self"
      />
      <Line className="bg-stone-100 mt-1.5 mb-5" overridesColor />
      <Outlet />
    </div>
  )
}
export default GamePage
