import {
  SectionText,
  SectionContainer,
  ProjectEntry,
  SideBySideContainer,
} from "@components"
import {
  FlashlightProject,
  OptimizationProject,
  QuizGameSeriesProject,
  LowPolyEnvironmentProject,
} from "@projects"
import { useTranslation } from "react-i18next"

const TutorialsSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("tutorials")}</SectionText>
      <SideBySideContainer>
        <ProjectEntry {...QuizGameSeriesProject} />
        <ProjectEntry {...FlashlightProject} />
        <ProjectEntry {...OptimizationProject} />
        <ProjectEntry {...LowPolyEnvironmentProject} />
      </SideBySideContainer>
    </SectionContainer>
  )
}
export default TutorialsSection
