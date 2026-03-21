import {
  SectionText,
  SectionContainer,
  ProjectEntry,
  SideBySideContainer,
} from "@components"
import { FoodItemsProject, LowPolyHospitalProject } from "@projects"
import { useTranslation } from "react-i18next"

const GraphicsSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("graphics")}</SectionText>
      <SideBySideContainer>
        <ProjectEntry {...FoodItemsProject} />
        <ProjectEntry {...LowPolyHospitalProject} />
      </SideBySideContainer>
    </SectionContainer>
  )
}
export default GraphicsSection
