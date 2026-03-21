import { Line, ListPlain, ProjectHero, TextPlain } from "@components"
import Slideshow from "@components/Slideshow"
import { ForsakenDawnProject } from "@projects"

const ForsakenDawn = () => {
  return (
    <div>
      <ProjectHero
        media={
          <Slideshow
            paths={[
              "/img/projects/forsaken-dawn/banner",
              "/img/projects/forsaken-dawn/gas-station-interior-gs-1",
              "/img/projects/forsaken-dawn/camper-interior-gs-1",
            ]}
            className="w-full h-full"
          />
        }
        {...ForsakenDawnProject}
      />
      <p className="mt-6 text-xl mb-2">Summary</p>
      <TextPlain>
        Forsaken Dawn is an open-world survival horror set in a nuclear winter
        apocalypse with sci-fi elements. The world is merciless, scavenging
        scraps, never feeling safe, always on the edge of death. Inspired by my
        fascination with minimal-gear survival and the beauty of desolate
        landscapes, the goal is to make a world that feels hostile and cold.
      </TextPlain>
      <p className="mt-6 text-xl mb-2">Key Features</p>
      <TextPlain>
        Currently, in the game I have worked and implemented these features.
      </TextPlain>
      <ListPlain>
        <li>Player mechanics</li>
        <li>Interaction and Placement systems</li>
        <li>Inventory and Gear management</li>
        <li>Journal and Blueprints system</li>
        <li>Crafting system</li>
        <li>Construction system</li>
        <li>Data Persistance</li>
        <li>Data-driven item architecture</li>
        <li>MVC UI system using Unity's new UIToolkit</li>
        <li>Flexible Equippable system</li>
        <li>Day and night cycle</li>
        <li>FSM AI System</li>
        <li>Localiation</li>
        <li>Inputs system</li>
        <li>Temperature system</li>
        <li>Afflications and Status Effects</li>
      </ListPlain>
      <TextPlain>
        This is a current list of features, that are fully implemented into the
        game. However, there is much work to be done still.
        <br />
        These are only but a few features that I am currently working on, or am
        planning on implementing.
      </TextPlain>
      <ListPlain>
        <li>Weather system</li>
        <li>Modular world streaming system via Addressables</li>
        <li>GOAP AI System for complex AI type behaviours</li>
        <li>Improved weapons system</li>
        <li>Playable map and environment</li>
      </ListPlain>
      <Line className="my-8" />
      <p className="mt-6 text-xl mb-2">Key Features</p>
    </div>
  )
}
export default ForsakenDawn
