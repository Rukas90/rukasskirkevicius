import { useTranslation } from "react-i18next"
import NavItem from "./NavItem"
import ContentContainer from "./containers/ContentContainer"
import { ButtonBasic, IconDocument, Line } from "@components"
import { useState } from "react"
import useIsCollapsed from "@hooks/useIsCollapsed"
import clsx from "clsx"

const TopNav = () => {
  const { t } = useTranslation()
  const isCollapsed = useIsCollapsed()
  const [menuOpened, setMenuOpened] = useState(false)

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
        <div
          className={clsx(
            "grid w-full text-center sm:px-0 px-8 transition-all will-change-transform duration-300",
            isCollapsed
              ? menuOpened
                ? "grid-rows-[1fr] opacity-100 scale-x-100"
                : "grid-rows-[0fr] opacity-0 scale-x-0 pointer-events-none"
              : "grid-rows-[1fr]",
          )}
        >
          <div className="overflow-hidden">
            <ul className="flex sm:flex-row flex-col gap-6 justify-center sm:items-start items-center text-sm uppercase">
              <NavItem to="/">{t("home")}</NavItem>
              <NavItem to="/projects">{t("projects")}</NavItem>
              <NavItem to="/graphics">{t("graphics")}</NavItem>
              <NavItem to="/tutorials">{t("tutorials")}</NavItem>
              <NavItem to="/contact">{t("contact")}</NavItem>
            </ul>
            <Line
              className="sm:hidden block my-6 bg-stone-200"
              extend
              overridesColor
            />
          </div>
        </div>
        <button
          onClick={() => setMenuOpened((opened) => !opened)}
          className="text-base sm:hidden block uppercase text-stone-500 cursor-pointer"
        >
          Menu
        </button>
      </ContentContainer>
    </header>
  )
}
export default TopNav
