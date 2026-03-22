import type { Project } from "@types"

const LowPolyHospitalProject: Project = {
  banner: {
    type: "image",
    path: "/img/projects/hospital_interior_3d_environment/picture_1",
  },
  title: "Hospital Interior",
  subtitle: {
    localeKey: "hospital_interior_sub",
    fallback: "Minimalistic, low-poly 3d environment",
  },
  details: [
    {
      type: "Summary",
      info: {
        localeKey: "hospital_interior_summary",
        fallback:
          "Project made to be sold on the Unity Assetstore. The pack consist of minimalistic, low-poly optimized 3D hospital interior environment models. All models are textured using solid colors. I have created a single PBR atlas map that all models in the pack use.",
      },
    },
    {
      type: "TechStack",
      info: "Blender, Affinity Photo 2, Unity",
    },
  ],
  afterLink: {
    label: {
      localeKey: "view_on_assetstore",
      fallback: "View on AssetStore",
    },
    url: "https://assetstore.unity.com/packages/3d/environments/hospital-interior-low-poly-3d-environment-assets-287356",
    target: "_blank",
  },
}
export default LowPolyHospitalProject
