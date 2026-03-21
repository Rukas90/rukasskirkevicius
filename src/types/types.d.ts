export type Social = "Unity" | "Github" | "Youtube" | "Linkedin" | "Artstation"

export type DetailType =
  | "ProjectRole"
  | "Responsibilities"
  | "KeySoftware"
  | "Platform"
  | "ProjectStarted"
  | "ProjectStatus"
  | "ProjectDate"
  | "TechStack"
  | "ProjectType"
  | "Summary"
  | "ReleaseDate"
  | "PartOf"

export type EntryDetail = {
  type: DetailType
  info: LocalizedText | string
}
export type ImageBanner = {
  type: 'image'
  path: string
  classes?: string
}
export type VideoBanner = {
  type: 'video'
  videoId: string
}
export type Banner = ImageBanner | VideoBanner

export type Project = {
  banner: Banner
  title: LocalizedText | string
  startDate?: Date
  endDate?: Date | 'present'
  subtitle: LocalizedText | string
  details: EntryDetail[]
  afterLink?: LabeledLink
}
export type LocalizedText = {
  localeKey: string
  fallback?: string
}
export type LabeledLink = {
  label: LocalizedText
  url: string
  target?: "_blank" | "_self" = "_blank"
}
