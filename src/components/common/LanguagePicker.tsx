import { DropdownItem, DropdownMenu, IconFlag } from "@components"
import useLanguageContext from "@hooks/useLanguageContext"

const LanguagePicker = () => {
  const { currentLanguage, setLanguage, languages } = useLanguageContext()

  return (
    <DropdownMenu
      label={
        <IconFlag code={currentLanguage.flag} className="size-3.5 rounded-sm" />
      }
    >
      {languages &&
        languages.map((lang) => (
          <DropdownItem
            key={lang.code}
            onSelected={() => {
              setLanguage(lang.code)
            }}
            content={
              <div className="inline-flex gap-1.25 items-center">
                <IconFlag className="size-3.5 rounded-sm" code={lang.flag} />
                <p className="font-semibold uppercase text-xs text-stone-600">
                  {lang.code}
                </p>
              </div>
            }
          />
        ))}
    </DropdownMenu>
  )
}
export default LanguagePicker
