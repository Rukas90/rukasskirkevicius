import type { Project } from "@types"

const LowPolyHospitalProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/hospital_interior_3d_environment/picture_1",
  },
  title: "Hospital Interior",
  subtitle: {
    localeKey: "forsaken_dawn_sub",
    fallback: "Minimalistic, low-poly 3d environment",
  },
  details: [
    {
      type: "Summary",
      info: "Project made to be sold on the Unity Assetstore. The pack consist of minimalistic, low-poly optimized 3D hospital interior environment models. All models are textured using solid colors. I have created a single PBR atlas map that all models in the pack use.",
    },
    {
      type: "KeySoftware",
      info: "Blender, Affinity Photo 2, Unity",
    },
  ],
  afterLink: {
    label: {
      localeKey: "learn_more",
      fallback: "Learn more",
    },
    url: "/games/forsaken-dawn",
  },
}
export default LowPolyHospitalProject
