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
          "A fully-featured image editing Unity editor program published on the Unity Asset Store. Built from scratch covering UI, rendering pipeline via HLSL shaders, 55+ filters and adjustments, a custom brush engine, pixel art tools, special pbr generation filters, layering system, and much more. All optimized using GPU processing via Pixel and Compute shaders, in combination to Job + Burst.",
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
    url: "/projects/pixel-harmony",
  },
}

export const LocalizationProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/tools/localization-editor",
  },
  title: "Localization",
  subtitle: {
    localeKey: "localization_sub",
    fallback: "Custom localization solution and editor management tool",
  },
  details: [
    {
      type: "PartOf",
      info: "Forsaken Dawn",
    },
    {
      type: "Responsibilities",
      info: {
        localeKey: "localization_responsibilities",
        fallback:
          "A custom localization system built for Forsaken Dawn, featuring a dedicated Unity editor tool for managing translation entries across multiple languages, with group-based organization, per-locale font references, and Addressable asset streaming.",
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
    url: "/projects/localization",
  },
}
