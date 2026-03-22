import { Logo, SectionText, TextLinkMarker, TextPlain } from "@components"
import { SectionContainer } from "@components/containers"
import { Trans, useTranslation } from "react-i18next"

const AboutSection = () => {
  const { t, i18n } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("about_me")}</SectionText>
      <div className="flex md:flex-row flex-col gap-9">
        <Logo className="relative md:w-34 w-full min-w-34 md:h-52 rounded-xl opacity-95 skew shine" />
        <p className="flex flex-col leading-7 break-after-column wrap-normal overflow-hidden justify-center text-justify">
          <TextPlain className="font-normal! mb-2">
            {t("about_parag_1")}
          </TextPlain>
          <TextPlain>{t("about_parag_2")}</TextPlain>
          <TextPlain>{t("about_parag_3")}</TextPlain>
          <TextPlain>
            <Trans
              i18n={i18n}
              i18nKey="about_parag_4"
              components={{
                i: <span className="italic" />,
              }}
            />
          </TextPlain>
          <TextPlain className="mt-2">
            <Trans
              i18n={i18n}
              i18nKey="about_parag_5"
              components={{
                GameLink: <TextLinkMarker to="/projects/forsaken-dawn" />,
              }}
            />
          </TextPlain>
          <TextPlain>{t("about_parag_6")}</TextPlain>
        </p>
      </div>
    </SectionContainer>
  )
}
export default AboutSection
