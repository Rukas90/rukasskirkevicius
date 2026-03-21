import { SectionText } from "@components"
import { SectionContainer } from "@components/containers"
import { useTranslation } from "react-i18next"
import SaxionLogo from "/img/saxion_hogescholen_logo.jpg"

const EducationSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("education", "Education")}</SectionText>
      <div className="inline-flex sm:gap-6 gap-4 items-center">
        <div className="shine min-w-15 min-h-15">
          <a href="https://www.saxion.edu/" target="_blank">
            <img
              src={SaxionLogo}
              className="w-15 h-15 rounded-md object-cover"
            />
          </a>
        </div>
        <div>
          <p className="text-sm font-medium text-stone-800">
            Saxion University of Applied Sciences
          </p>
          <p className="sm:text-sm text-xs text-stone-700">
            Bachelor's degree, Game and Interactive Media Design
          </p>
          <p className="text-sm font-light text-stone-700">2017 – 2021</p>
        </div>
      </div>
    </SectionContainer>
  )
}
export default EducationSection
