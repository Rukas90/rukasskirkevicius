import {
  SoftwareSection,
  GamesSection,
  ToolsSection,
  FilterMenu,
  SystemsSection,
} from "@components"
import { useEffect, useState } from "react"

const FilterTypes = ["All", "Games", "Tools", "Software", "Systems"] as const

type Filter = (typeof FilterTypes)[number]

const FilterLabel: Record<Filter, string> = {
  All: "all",
  Games: "games",
  Systems: "systems",
  Tools: "tools",
  Software: "software",
}

const SectionComponents: Partial<Record<Filter, React.FC>> = {
  Games: GamesSection,
  Systems: SystemsSection,
  Tools: ToolsSection,
  Software: SoftwareSection,
}

const ProjectsPage = () => {
  const [filter, setFilter] = useState<Filter>("All")

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) {
      return
    }
    const element = document.getElementById(hash)
    element?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <div>
      <FilterMenu
        types={FilterTypes}
        selected={filter}
        onFilterSelected={setFilter}
        localizedKeys={FilterLabel}
      />
      {(Object.entries(SectionComponents) as [Filter, React.FC][])
        .filter(([key]) => filter === "All" || key === filter)
        .map(([key, Section]) => (
          <div key={key} id={key.toLowerCase()}>
            <Section />
          </div>
        ))}
    </div>
  )
}
export default ProjectsPage
