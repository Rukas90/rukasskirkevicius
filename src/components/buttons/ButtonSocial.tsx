import {
  IconArtstation,
  IconGithub,
  IconLinkedin,
  IconUnity,
  IconYoutube,
} from "@components/icons"
import type { ReactNode } from "react"
import ButtonIcon from "./ButtonIcon"
import { Link } from "react-router-dom"
import clsx from "clsx"

export type Social = "Unity" | "Github" | "Youtube" | "Linkedin" | "Artstation"

const Icons: Record<Social, ReactNode> = {
  Unity: <IconUnity />,
  Github: <IconGithub />,
  Youtube: <IconYoutube />,
  Linkedin: <IconLinkedin />,
  Artstation: <IconArtstation />,
}
const Urls: Record<Social, string> = {
  Unity: "https://assetstore.unity.com/publishers/8326",
  Github: "https://github.com/Rukas90",
  Youtube: "https://www.youtube.com/@WatchFindDoMedia",
  Linkedin: "https://www.linkedin.com/in/rukas-skirkevicius-a405101b7/",
  Artstation: "https://www.artstation.com/thatmistguy",
}
interface ButtonSocialProps extends Omit<
  React.ComponentProps<"button">,
  "children"
> {
  social: Social
}
const ButtonSocial = ({ social, className, ...props }: ButtonSocialProps) => {
  console.log(className)
  return (
    <Link to={Urls[social]} target="_blank" className="flex">
      <ButtonIcon
        className={clsx(className, "text-stone-500 size-4")}
        icon={Icons[social]}
        {...props}
      />
    </Link>
  )
}
export default ButtonSocial
