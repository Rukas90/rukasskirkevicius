import type { Project } from "@types"

const FoodItemsProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/food-items/banner",
  },
  title: "Food Items",
  subtitle: {
    localeKey: "forsaken_dawn_sub",
    fallback: "Semi-realistic, detailed 3d props",
  },
  details: [
    {
      type: "Summary",
      info: "These are props I have made for my new upcoming, currently in-development video game - Forsaken Dawn. All product designs are made by me using Affinity Photo and finilized in Substance Painter. Moreover, all prop models are very low poly and all the details are baked from their high poly meshes in Substance.",
    },
    {
      type: "KeySoftware",
      info: "Blender, Adobe Substance 3D Painter, Affinity Photo 2, Unity",
    },
  ],
  afterLink: {
    label: {
      localeKey: "view_on_artstation",
      fallback: "View on Artstation",
    },
    url: "https://www.artstation.com/artwork/XJQRW3",
    target: "_blank",
  },
}
export default FoodItemsProject
