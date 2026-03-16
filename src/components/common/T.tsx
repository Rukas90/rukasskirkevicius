import { Trans, useTranslation } from "react-i18next"

const T = ({
  i18nKey,
  components,
}: {
  i18nKey: string
  components?: Record<string, React.ReactElement>
}) => {
  const { i18n } = useTranslation()
  return <Trans i18n={i18n} i18nKey={i18nKey} components={components} />
}

export default T
