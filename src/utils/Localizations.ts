import type { DetailType, LocalizedText } from "@types"

export const LocalizedDetailTypes: Record<DetailType, LocalizedText> = {
  ProjectRole: {
    localeKey: "project_role",
    fallback: "Project Role",
  },
  Responsibilities: {
    localeKey: "responsibilities",
    fallback: "Responsibilities",
  },
  KeySoftware: {
    localeKey: "key_software",
    fallback: "Key Software",
  },
  Platform: { localeKey: "platform", fallback: "Platform" },
  ProjectStarted: {
    localeKey: "project_started",
    fallback: "Project Started",
  },
  ProjectStatus: {
    localeKey: "project_status",
    fallback: "Project Status",
  },
  ProjectDate: {
    localeKey: "project_date",
    fallback: "Project Date",
  },
  TechStack: {
    localeKey: "tech_stack",
    fallback: "Tech Stack",
  },
  ProjectType: {
    localeKey: "project_type",
    fallback: "Project Type",
  },
  Summary: {
    localeKey: "summary",
    fallback: "Summary",
  },
  ReleaseDate: {
    localeKey: "release_date",
    fallback: "Release Date",
  },
  PartOf: {
    localeKey: "part_of",
    fallback: "Part of",
  },
}
