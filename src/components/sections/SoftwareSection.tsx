import {
  SectionText,
  SectionContainer,
  ProjectEntry,
  SideBySideContainer,
} from "@components"
import { SecureDashboardProject, IthoARProject } from "@projects"
import { useTranslation } from "react-i18next"

const GamesSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("software")}</SectionText>
      <SideBySideContainer>
        <ProjectEntry {...SecureDashboardProject} />
        <ProjectEntry {...IthoARProject} />
      </SideBySideContainer>
    </SectionContainer>
  )
}
export default GamesSection
