import type { Project } from "@types"

export const DataDrivenItemsProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/systems/data-driven-items-architecture",
  },
  title: "Data-driven Items Architecture",
  subtitle: {
    localeKey: "dd_items_sub",
    fallback: "Modular, flexible, data-driven item creation functional design",
  },
  details: [
    {
      type: "PartOf",
      info: "Forsaken Dawn",
    },
    {
      type: "Summary",
      info: "A modular item architecture built around composable data components, attributes and action events. Items are constructed by combining components rather than inheriting from rigid class hierarchies, allowing flexible item creation without code changes.",
    },
    {
      type: "KeySoftware",
      info: "Unity",
    },
  ],
}
export const InputsHandlerProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/systems/inputs-handler-groups",
  },
  title: "Inputs Handler",
  subtitle: {
    localeKey: "inputs_handler_sub",
    fallback: "Group and layer based inputs management system",
  },
  details: [
    {
      type: "PartOf",
      info: "Forsaken Dawn",
    },
    {
      type: "Summary",
      info: "A group and layer based input management system that eliminates scattered input checks throughout the codebase. Only one group is active at a time, with layers activating based on pre-defined validation rules, preventing input conflicts as the game scales.",
    },
    {
      type: "KeySoftware",
      info: "Unity",
    },
  ],
}
export const ModularSaveLoadProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/systems/modular-save-load-system",
    classes: "object-bottom",
  },
  title: "Save & Load System",
  subtitle: {
    localeKey: "save_load_sub",
    fallback: "Modular, component-based persistance system",
  },
  details: [
    {
      type: "PartOf",
      info: "Forsaken Dawn",
    },
    {
      type: "Summary",
      info: "A component-based persistence system built around a Saveable middleware component. Each persistable component manages its own save logic independently, with scene-persistent GUIDs ensuring saved state survives prefab changes.",
    },
    {
      type: "KeySoftware",
      info: "Unity",
    },
  ],
}
export const OpenablesProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/systems/openable-system-2",
    classes: "object-center",
  },
  title: "Openables System",
  subtitle: {
    localeKey: "openables_sub",
    fallback: "Flexible in-game openables system",
  },
  details: [
    {
      type: "PartOf",
      info: "Forsaken Dawn",
    },
    {
      type: "Summary",
      info: "A flexible interactable system for openable objects, doors, cabinets, shelves. Supports direction-aware opening, connected objects for double doors, animation curves, and multi-point spatial audio with randomization.",
    },
    {
      type: "KeySoftware",
      info: "Unity, C#",
    },
  ],
}
