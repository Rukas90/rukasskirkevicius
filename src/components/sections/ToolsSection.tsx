import {
  SectionText,
  SectionContainer,
  ProjectEntry,
  SideBySideContainer,
} from "@components"
import { useTranslation } from "react-i18next"
import { LocalizationProject, PixelHarmonyProject } from "@projects"

const GamesSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("tools")}</SectionText>
      <SideBySideContainer>
        <ProjectEntry {...PixelHarmonyProject} />
        <ProjectEntry {...LocalizationProject} />
      </SideBySideContainer>
    </SectionContainer>
  )
}
export default GamesSection
