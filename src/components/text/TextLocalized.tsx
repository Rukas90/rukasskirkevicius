import type { LocalizedText } from "@types"
import { useTranslation } from "react-i18next"

type TextLocalizedProps<T extends React.ElementType = "p"> = {
  text: LocalizedText | string
  as?: T
} & React.ComponentPropsWithoutRef<T>

const TextLocalized = <T extends React.ElementType = "p">({
  text,
  as,
  children,
  ...props
}: TextLocalizedProps<T>) => {
  const { t } = useTranslation()
  const Tag = as ?? "p"
  const content =
    typeof text === "string" ? text : t(text.localeKey, text.fallback ?? "")
  return (
    <Tag {...props}>
      {content}
      {children}
    </Tag>
  )
}
export default TextLocalized
