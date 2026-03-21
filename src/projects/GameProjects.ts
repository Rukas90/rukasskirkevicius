import type { Project } from "@types"

export const ForsakenDawnProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/forsaken-dawn/banner",
  },
  title: "Forsaken Dawn",
  startDate: new Date("2025-01-01"),
  endDate: "present",
  subtitle: {
    localeKey: "forsaken_dawn_sub",
    fallback: "An upcoming open-world survival horror game",
  },
  details: [
    {
      type: "ProjectRole",
      info: {
        localeKey: "forsaken_dawn_role_info",
        fallback: "Solo game developer",
      },
    },
    {
      type: "Responsibilities",
      info: {
        localeKey: "forsaken_dawn_responsibilities",
        fallback:
          "As a solo developer, I am responsible for the full development of the project, covering both technical and artistic aspects.\nThis includes implementing core gameplay systems, AI behavior, and player mechanics, as well as developing tools and systems for efficient content creation.\nI also handle 3D asset creation, level design, UI systems, and overall project architecture.",
      },
    },
    {
      type: "Platform",
      info: "PC",
    },
    {
      type: "KeySoftware",
      info: "Unity, C#, Blender, Adobe Substance 3D Painter, Rider",
    },
  ],
  afterLink: {
    label: {
      localeKey: "learn_more",
      fallback: "Learn more",
    },
    url: "/projects/forsaken-dawn",
  },
}

export const HauntedProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/haunted/banner-2",
  },
  title: "Haunted",
  subtitle: {
    localeKey: "haunted_sub",
    fallback: "3D zombie shooter prototype project",
  },
  startDate: new Date("2019-01-01"),
  details: [
    {
      type: "ProjectRole",
      info: {
        localeKey: "forsaken_dawn_role_info",
        fallback: "Solo game developer",
      },
    },
    {
      type: "Responsibilities",
      info: {
        localeKey: "forsaken_dawn_responsibilities",
        fallback:
          "During this two weeks long project, I have worked on implementing a 3D zombie shooter game prototype. The entire project was made from stratch, which included, gameplay functionality, graphical design, UI/UX, audio and profiling and building.",
      },
    },
    {
      type: "Platform",
      info: "PC",
    },
    {
      type: "KeySoftware",
      info: "Unity, C#, Blender, Adobe Substance 3D Painter, Visual Studio",
    },
  ],
  afterLink: {
    label: {
      localeKey: "learn_more",
      fallback: "Learn more",
    },
    url: "/projects/haunted",
  },
}

export const Lua2DGameProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/lua-game/banner",
  },
  title: "2D RPG Shooter",
  startDate: new Date("2018-01-01"),
  subtitle: {
    localeKey: "lua_game_sub",
    fallback: "Over the weekend RPG shooter game",
  },
  details: [
    {
      type: "ProjectRole",
      info: {
        localeKey: "forsaken_dawn_role_info",
        fallback: "Solo game developer",
      },
    },
    {
      type: "Responsibilities",
      info: {
        localeKey: "forsaken_dawn_responsibilities",
        fallback:
          "As a solo developer, I am responsible for the full development of the project, covering both technical and artistic aspects.\nThis includes implementing core gameplay systems, AI behavior, and player mechanics, as well as developing tools and systems for efficient content creation.\nI also handle 3D asset creation, level design, UI systems, and overall project architecture.",
      },
    },
    {
      type: "Platform",
      info: "PC",
    },
    {
      type: "TechStack",
      info: "Lua, LÖVE, Zerobrane",
    },
  ],
  afterLink: {
    label: {
      localeKey: "learn_more",
      fallback: "Learn more",
    },
    url: "/projects/rpg-2d-shooter",
  },
}
