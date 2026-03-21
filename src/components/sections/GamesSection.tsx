import {
  SectionText,
  SectionContainer,
  ProjectEntry,
  SideBySideContainer,
} from "@components"
import {
  ForsakenDawnProject,
  HauntedProject,
  Lua2DGameProject,
} from "@projects"
import { useTranslation } from "react-i18next"

const GamesSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("games")}</SectionText>
      <SideBySideContainer>
        <ProjectEntry {...ForsakenDawnProject} />
        <ProjectEntry {...HauntedProject} />
        <ProjectEntry {...Lua2DGameProject} />
      </SideBySideContainer>
    </SectionContainer>
  )
}
export default GamesSection
