import {
  FlexCenterContainer,
  Footer,
  MainContainer,
  TextLink,
} from "@components"
import { useTranslation } from "react-i18next"

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <MainContainer>
      <FlexCenterContainer className="flex-col">
        <p className="text-[clamp(3rem,8vw,4rem)] font-bold text-stone-700 shine uppercase">
          {t("not_found", "NOT FOUND")}
        </p>
        <TextLink
          indicatorSize="bigger"
          to="/"
          className="text-[clamp(0.5rem,5vw,2rem)] animate-moveup"
        >
          {t("go_home", "Go Home")}
        </TextLink>
      </FlexCenterContainer>
      <Footer />
    </MainContainer>
  )
}
export default NotFound
