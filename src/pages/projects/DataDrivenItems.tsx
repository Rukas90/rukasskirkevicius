import {
  Line,
  ListPlain,
  ProjectSectionText,
  TextLinkMarker,
  TextLocalized,
  TextPlain,
} from "@components"
import ProjectDetail from "@components/ProjectDetail"
import { DataDrivenItemsProject } from "@projects"
import YouTube from "react-youtube"

const DataDrivenItems = () => {
  const { title, subtitle, details, startDate } = DataDrivenItemsProject

  return (
    <div>
      <div className="inline-flex gap-8">
        <YouTube videoId="PqZmD-KcNGc" className="h-96 w-250" />
        <div>
          <TextLocalized
            text={title}
            as="p"
            className="text-4xl font-medium text-stone-800"
          />
          <TextLocalized text={subtitle} className="text-stone-600 text-lg" />
          <Line overridesColor className="bg-stone-200 my-3" />
          <div className="flex flex-col gap-2.5">
            {startDate && (
              <ProjectDetail
                detail={{
                  type: "ProjectDate",
                  info: startDate.getFullYear().toString(),
                }}
              />
            )}
            {details.map((detail) => (
              <ProjectDetail detail={detail} />
            ))}
          </div>
        </div>
      </div>
      <ProjectSectionText>Summary</ProjectSectionText>
      <TextPlain>
        This was an experimentational, hobby project, where I made an RPG 2D
        shooter game using Lua. The goal was to learn Lua and create a simple
        game project in the process. I used{" "}
        <TextLinkMarker to="https://love2d.org/" target="_blank">
          LÖVE
        </TextLinkMarker>{" "}
        engine, which is a game engine used to create 2D video games.
      </TextPlain>
      <ProjectSectionText>Key Features</ProjectSectionText>
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
export default DataDrivenItems
