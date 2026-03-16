import { SectionText } from "@components"
import { SectionContainer } from "@components/containers"
import SkillRow from "@components/SkillRow"
import { useTranslation } from "react-i18next"

const SkillsSection = () => {
  const { t } = useTranslation()

  return (
    <SectionContainer>
      <SectionText>{t("skills")}</SectionText>
      <SkillRow
        label={t("programming_languages")}
        skills={["C#", "Java", "Typescript & Javascript", "HLSL"]}
      />
      <SkillRow
        label={t("game_development")}
        skills={[
          "Gameplay Systems",
          "AI",
          "Tools Development",
          "Animation Systems",
          "Optimization",
          "Profiling",
          "UI/UX",
        ]}
      />
      <SkillRow
        label={t("unity_engine_tech")}
        skills={[
          "Entities (ECS)",
          "Jobs",
          "Burst",
          "Render Pipelines",
          "UIToolkit",
          "uGUI",
        ]}
      />
      <SkillRow
        label={t("graphics")}
        skills={[
          "Modeling",
          "Texturing",
          "Mesh Baking",
          "Trim Sheets",
          "Texture Atlases",
          "LOD Systems",
        ]}
      />
      <SkillRow
        label={t("tools_software")}
        skills={[
          "Unity",
          "Godot",
          "Blender",
          "Affinity Photo",
          "Adobe Substance 3D Painter",
          "Rider",
          "Git",
          ".NET",
        ]}
      />
      <SkillRow
        label={t("libraries_frameworks")}
        skills={["UniTask", "ZLinq", "Zenject", "R3", "Odin"]}
      />
      <SkillRow
        label={t("platforms")}
        skills={["PC", "Android", "iOS", "AR", "VR"]}
      />
    </SectionContainer>
  )
}
export default SkillsSection
