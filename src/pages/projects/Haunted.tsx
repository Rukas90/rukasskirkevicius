import {
  Line,
  ListPlain,
  ProjectSectionText,
  TextLocalized,
  TextPlain,
} from "@components"
import ProjectDetail from "@components/ProjectDetail"
import Slideshow from "@components/Slideshow"
import { HauntedProject } from "@projects"
import YouTube from "react-youtube"

const Haunted = () => {
  const { title, subtitle, details, startDate } = HauntedProject

  return (
    <div>
      <div className="inline-flex gap-8">
        <YouTube videoId="d8JEaiMXldY" className="h-96 w-250" />
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
        This project was part of an assignment to create a prototype game. I
        have chose to create a 3D first person zombie shooter, titled 'Haunted'.
        It was inspired by Left 4 Dead and .
      </TextPlain>
      <ProjectSectionText>Key Features</ProjectSectionText>
      <TextPlain>
        These are the features that were implemented in the final prototype game
        version.
      </TextPlain>
      <ListPlain>
        <li>Player mechanics</li>
        <li>Inventory system</li>
        <li>Weapons system</li>
        <li>Data persistance</li>
        <li>FSM AI system</li>
        <li>Minimap/Radar system</li>
        <li>Health system</li>
        <li>Functional main menu</li>
        <li>Map with objectives and an ending</li>
      </ListPlain>
      <ProjectSectionText>UI Design</ProjectSectionText>
      <div className="inline-flex gap-8">
        <p>
          <TextPlain>
            When working on the user interface, the idea was to create a clean,
            modern looking UI.
          </TextPlain>
          <br />
          <br />
          <TextPlain>
            Some of the design choices were inspired by existing games, like
            Wolfenstein, with its idiosyncratic difficulty levels, and Call of
            Duty: Black Ops II, with its modern, dark UI style.
          </TextPlain>
        </p>
        <Slideshow
          className="h-96 w-250"
          paths={{
            directory: "/img/projects/haunted",
            fileNames: [
              "main-menu",
              "settings-ui-1",
              "settings-ui-2",
              "difficulty-levels-ui",
            ],
          }}
        />
      </div>
    </div>
  )
}
export default Haunted
