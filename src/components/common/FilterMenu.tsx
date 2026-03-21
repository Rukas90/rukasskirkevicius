import { DropdownItem, DropdownLabel, DropdownMenu } from "@components"
import { useTranslation } from "react-i18next"

interface FilterMenuProps<T extends string> {
  types: readonly T[]
  selected: T
  onFilterSelected: (filter: T) => void
  localizedKeys?: Record<T, string>
}
const FilterMenu = <T extends string>({
  types,
  selected,
  onFilterSelected,
  localizedKeys,
}: FilterMenuProps<T>) => {
  const { t } = useTranslation()

  const handleSelect = (newSelection: T) => {
    onFilterSelected(newSelection)
  }
  const getLabel = (filter: T) =>
    localizedKeys ? t(localizedKeys[filter]) : filter

  return (
    <div className="py-8 inline-flex items-center">
      <p className="text-base font-medium text-stone-700">
        {t("filter_by", "Filter by")}:
      </p>
      <DropdownMenu label={getLabel(selected)}>
        {types.map((type) => (
          <DropdownItem
            key={type}
            onSelected={() => handleSelect(type)}
            content={<DropdownLabel text={getLabel(type)} />}
          />
        ))}
      </DropdownMenu>
    </div>
  )
}
export default FilterMenu
