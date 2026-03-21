import {
  SectionText,
  SectionContainer,
  ProjectEntry,
  SideBySideContainer,
} from "@components"
import {
  DataDrivenItemsProject,
  InputsHandlerProject,
  ModularSaveLoadProject,
  OpenablesProject,
} from "@projects"
import { useTranslation } from "react-i18next"

const SystemsSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("systems")}</SectionText>
      <SideBySideContainer>
        <ProjectEntry {...DataDrivenItemsProject} />
        <ProjectEntry {...InputsHandlerProject} />
        <ProjectEntry {...ModularSaveLoadProject} />
        <ProjectEntry {...OpenablesProject} />
      </SideBySideContainer>
    </SectionContainer>
  )
}
export default SystemsSection
