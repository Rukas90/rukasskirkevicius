import {
  ImagePicture,
  ListPlain,
  ProjectHero,
  ProjectSectionText,
  SideBySideContainer,
  TextPlain,
} from "@components"
import ProjectDetail from "@components/ProjectDetail"
import { PixelHarmonyProject } from "@projects"
import YouTube from "react-youtube"

const PixelHarmony = () => {
  const { startDate } = PixelHarmonyProject

  return (
    <div>
      <ProjectHero
        media={
          <YouTube
            videoId="ZfoQwBuBN0g"
            className="w-full h-full"
            iframeClassName="w-full h-full"
          />
        }
        {...PixelHarmonyProject}
        extraDetails={
          startDate && (
            <ProjectDetail
              detail={{
                type: "ProjectDate",
                info: startDate.getFullYear().toString(),
              }}
            />
          )
        }
      />
      <ProjectSectionText>Summary</ProjectSectionText>
      <TextPlain>
        Pixel Harmony is a fully-featured image editing plugin for the Unity
        Editor, published on the Unity Asset Store. Built to reduce the friction
        of context-switching between Unity and external tools like Photoshop, it
        brings a wide range of professional editing capabilities directly into
        the Unity workspace. The plugin is built around a layer-based rendering
        system and leverages GPU operations combined with Unity's Job System and
        Burst compiler for performant real-time processing. Significant effort
        went into designing a clean, intuitive UI that feels at home inside the
        Unity Editor, making the tool approachable without sacrificing depth.
      </TextPlain>
      <ProjectSectionText>Key Features</ProjectSectionText>
      <SideBySideContainer className="mb-6 lg:gap-8 gap-4">
        <div className="grid grid-cols-2 gap-6">
          <ImagePicture
            className="rounded-md h-full"
            path="/img/projects/pixel-harmony/picture_8"
          />
          <ImagePicture
            className="rounded-md h-full"
            path="/img/projects/pixel-harmony/picture_5"
          />
        </div>
        <ListPlain className="pr-12">
          <li>
            <span className="font-normal">Filters - </span>A broad filter
            library covering blur modes (Gaussian, Bilateral, High Pass),
            distortion, noise, emboss, tiling correction, gradients, and custom
            convolution, among others.
          </li>
          <li>
            <span className="font-normal">Adjustments - </span>Fine-grained
            image adjustments including Levels, Curves, Channel Mixer, Color
            Balance, Hue/Saturation, Lift/Gain/Gamma, Vibrance, and more.
          </li>
          <li>
            <span className="font-normal">PBR Material Generation - </span>
            Automatic generation of Height, Normal, Smoothness/Roughness,
            Metallic, and Ambient Occlusion maps from a single albedo texture.
          </li>
        </ListPlain>
      </SideBySideContainer>
      <SideBySideContainer className="mb-6 lg:gap-8 gap-4 [&>*:first-child]:lg:order-last">
        <div className="grid grid-cols-2 gap-6">
          <ImagePicture
            className="rounded-md h-full"
            path="/img/projects/pixel-harmony/picture_3"
          />
          <ImagePicture
            className="rounded-md h-full"
            path="/img/projects/pixel-harmony/picture_4"
          />
        </div>
        <ListPlain>
          <li>
            <span className="font-normal">Layer System - </span>A
            Photoshop-style layer pipeline supporting Pixel, Shape, Adjustment,
            Solid Color, and Gradient layer types, each with its own optional
            layer mask and blend mode. 32 blending modes total.
          </li>
          <li>
            <span className="font-normal">Tools - </span>A comprehensive toolset
            including Brush, Clone, Bucket Fill, Free Transform, Perspective,
            Dodge, Burn, Sponge, and more, with full pen tablet and pressure
            sensitivity support.
          </li>
          <li>
            <span className="font-normal">Painting - </span> Versatile
            brush-based painting with configurable opacity, symmetry, scatter,
            jitter, falloff, spacing, and texture support. Custom brushes can be
            created and saved.
          </li>
        </ListPlain>
      </SideBySideContainer>
      <ListPlain>
        <li>
          <span className="font-normal">Resources & Presets - </span> Brushes,
          gradients, patterns, color galleries, and filter/adjustment presets
          are all saveable and shared across projects via a local Documents
          folder.
        </li>
        <li>
          <span className="font-normal">Performance - </span> Processing is
          accelerated through GPU operations and Unity's Job + Burst pipeline,
          with configurable rendering settings to tune performance per project.
        </li>
        <li>
          <span className="font-normal">Export & Portability - </span> Projects
          save to a custom file format and individual layers or the full canvas
          can be exported as PNG or JPEG.
        </li>
      </ListPlain>
    </div>
  )
}
export default PixelHarmony
