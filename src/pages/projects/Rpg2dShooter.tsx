import {
  ListPlain,
  ProjectHero,
  ProjectSectionText,
  TextLinkMarker,
  TextPlain,
} from "@components"
import ProjectDetail from "@components/ProjectDetail"
import { Lua2DGameProject } from "@projects"
import YouTube from "react-youtube"

const Rpg2dShooter = () => {
  const { startDate } = Lua2DGameProject

  return (
    <div>
      <ProjectHero
        media={
          <YouTube
            videoId="PqZmD-KcNGc"
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        }
        {...Lua2DGameProject}
        extraDetails={
          startDate && (
            <ProjectDetail
              detail={{
                type: "ProjectDate",
                info: startDate.getFullYear().toString(),
              }}
            />
          )
        }
      />
      <ProjectSectionText localeKey="summary" />
      <TextPlain>
        This was an experimentational, hobby project, where I made an RPG 2D
        shooter game using Lua. The goal was to learn Lua and create a simple
        game project in the process. I used{" "}
        <TextLinkMarker to="https://love2d.org/" target="_blank">
          LÖVE
        </TextLinkMarker>{" "}
        engine, which is a game engine used to create 2D video games.
      </TextPlain>
      <ProjectSectionText localeKey="key_features" />
      <TextPlain>
        These are the features that were implemented into the final game.
      </TextPlain>
      <ListPlain>
        <li>Player mechanics</li>
        <li>Inventory system</li>
        <li>Weapons system</li>
        <li>Levels</li>
        <li>AI system</li>
        <li>Audio system</li>
        <li>Health & Sprint systems</li>
        <li>Functional main menu</li>
        <li>Ending</li>
      </ListPlain>
    </div>
  )
}
export default Rpg2dShooter
