import { useTranslation } from "react-i18next"
import NavItem from "./NavItem"
import ContentContainer from "./containers/ContentContainer"
import { ButtonBasic, IconDocument } from "@components"

const TopNav = () => {
  const { t } = useTranslation()

  return (
    <header className="py-8 bg-almost-white">
      <ContentContainer className="flex flex-col items-center">
        <p className="text-3xl font-semibold w-full text-center text-stone-600 uppercase">
          Rukas Skirkevicius
        </p>
        <p className="text-center text-stone-500 font-normal">
          {t("top_headline")}
        </p>
        <ButtonBasic className="mt-2 inline-flex gap-0.5 pl-2!">
          <IconDocument className="size-6 text-stone-500" /> {t("resume")}
        </ButtonBasic>
        <div className="w-16 h-px bg-stone-300 mx-auto my-4" />
        <ul className="flex gap-6 justify-center text-sm uppercase">
          <NavItem to="/">{t("home")}</NavItem>
          <NavItem to="/projects">{t("projects")}</NavItem>
          <NavItem to="/systems">{t("systems")}</NavItem>
          <NavItem to="/tools">{t("tools")}</NavItem>
          <NavItem to="/graphics">{t("graphics")}</NavItem>
          <NavItem to="/tutorials">{t("tutorials")}</NavItem>
          <NavItem to="/contact">{t("contact")}</NavItem>
        </ul>
      </ContentContainer>
    </header>
  )
}
export default TopNav
