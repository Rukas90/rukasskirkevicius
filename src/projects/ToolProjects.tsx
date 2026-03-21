import type { Project } from "@types"

export const PixelHarmonyProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/pixel-harmony/banner",
  },
  title: "Pixel Harmony",
  subtitle: {
    localeKey: "pixel_harmony_sub",
    fallback: "Advanced image editing software",
  },
  details: [
    {
      type: "ProjectType",
      info: "Editor-Tool",
    },
    {
      type: "Responsibilities",
      info: {
        localeKey: "pixel_harmony_responsibilities",
        fallback:
          "During this project I have worked and created an editor tool in Unity, that provides advanced image editing features, similar to software like Photoshop. I have worked on this project from stratch, implementing the user interface, functionality and ultimately published to be sold on the Unity AssetStore.",
      },
    },
    {
      type: "TechStack",
      info: "Unity, C#, UIToolkit, HLSL",
    },
  ],
  afterLink: {
    label: {
      localeKey: "learn_more",
      fallback: "Learn more",
    },
    url: "/tools/pixel-harmony",
  },
}

export const LocalizationProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/tools/localization-editor",
  },
  title: "Localization",
  subtitle: {
    localeKey: "pixel_harmony_sub",
    fallback: "Custom localization solution and editor management tool",
  },
  details: [
    {
      type: "Responsibilities",
      info: {
        localeKey: "pixel_harmony_responsibilities",
        fallback:
          "During this project I have worked and created an editor tool in Unity, that provides advanced image editing features, similar to software like Photoshop. I have worked on this project from stratch, implementing the user interface, functionality and ultimately published to be sold on the Unity AssetStore.",
      },
    },
    {
      type: "TechStack",
      info: "Unity, C#",
    },
  ],
  afterLink: {
    label: {
      localeKey: "learn_more",
      fallback: "Learn more",
    },
    url: "/tools/pixel-harmony",
  },
}
