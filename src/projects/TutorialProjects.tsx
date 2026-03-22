import type { Project } from "@types"

export const QuizGameSeriesProject: Project = {
  banner: {
    type: "video",
    videoId: "HWCFJP6C4bk",
  },
  title: "Quiz Game Series",
  subtitle: {
    localeKey: "quiz_game_sub",
    fallback: "Tutorial series on creating a quiz game in Unity",
  },
  details: [
    {
      type: "ReleaseDate",
      info: new Date("2019-01-15").toLocaleDateString(),
    },
    {
      type: "TechStack",
      info: "Unity, C#, uGUI",
    },
  ],
  afterLink: {
    label: {
      localeKey: "view_playlist",
      fallback: "View Playlist",
    },
    url: "https://www.youtube.com/playlist?list=PLfDfpN1H_F6FxLLSz5oVN-BwH2am0nPSg",
    target: "_blank",
  },
}

export const OptimizationProject: Project = {
  banner: {
    type: "video",
    videoId: "QnnecQIBHeE",
  },
  title: "Optimization Techniques",
  subtitle: {
    localeKey: "optimization_sub",
    fallback: "Tutorial video on Unity optimization techniques",
  },
  details: [
    {
      type: "ReleaseDate",
      info: new Date("2015-07-17").toLocaleDateString(),
    },
    {
      type: "TechStack",
      info: "Unity, C#, 3Ds Max",
    },
  ],
}

export const FlashlightProject: Project = {
  banner: {
    type: "video",
    videoId: "egsmflUmGkM",
  },
  title: "Flashlight System",
  subtitle: {
    localeKey: "flashlight_system_sub",
    fallback: "Tutorial video on implementing advanced flashlight in Unity",
  },
  details: [
    {
      type: "ReleaseDate",
      info: new Date("2019-04-21").toLocaleDateString(),
    },
    {
      type: "TechStack",
      info: "Unity, C#, Visual Studio",
    },
  ],
}

export const LowPolyEnvironmentProject: Project = {
  banner: {
    type: "video",
    videoId: "BC3AKOQUx04",
  },
  title: "Damage Indicators",
  subtitle: {
    localeKey: "damage_indicators_sub",
    fallback: "Tutorial video on implementing damage indicators in Unity",
  },
  details: [
    {
      type: "ReleaseDate",
      info: new Date("2019-07-08").toLocaleDateString(),
    },
    {
      type: "TechStack",
      info: "Unity",
    },
  ],
}
