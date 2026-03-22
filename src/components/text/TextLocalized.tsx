import type { LocalizedText } from "@types"
import { useTranslation } from "react-i18next"

export type TextLocalizedProps<T extends React.ElementType = "p"> = {
  text?: LocalizedText | string
  localeKey?: string
  as?: T
} & React.ComponentPropsWithoutRef<T>

const TextLocalized = <T extends React.ElementType = "p">({
  text,
  localeKey,
  as,
  children,
  ...props
}: TextLocalizedProps<T>) => {
  const { t } = useTranslation()
  const Tag = as ?? "p"
  const content = localeKey
    ? t(localeKey)
    : typeof text === "string"
      ? text
      : text
        ? t(text.localeKey, text.fallback ?? "")
        : ""
  return (
    <Tag {...props}>
      {content}
      {children}
    </Tag>
  )
}
export default TextLocalized
