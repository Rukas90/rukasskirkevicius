import {
  Line,
  ListPlain,
  ProjectHero,
  ProjectSectionText,
  TextPlain,
} from "@components"
import Slideshow from "@components/Slideshow"
import { ForsakenDawnProject } from "@projects"
import { useTranslation } from "react-i18next"

const ForsakenDawn = () => {
  const { t } = useTranslation()

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
      <ProjectSectionText localeKey="summary" />
      <TextPlain>{t("forsaken_dawn_summary")}</TextPlain>
      <ProjectSectionText localeKey="key_features" />
      <div className="flex flex-col gap-2">
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
          This is a current list of features, that are fully implemented into
          the game. However, there is much work to be done still.
          <br />
          These are only but a few features that I am currently working on, or
          am planning on implementing.
        </TextPlain>
        <ListPlain>
          <li>Weather system</li>
          <li>Modular world streaming system via Addressables</li>
          <li>GOAP AI System for complex AI type behaviours</li>
          <li>Improved weapons system</li>
          <li>Playable map and environment</li>
        </ListPlain>
      </div>
      <Line className="my-8" />
    </div>
  )
}
export default ForsakenDawn
