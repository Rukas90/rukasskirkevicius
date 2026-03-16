import { useState } from "react"
import type { Social } from "@types"
import { ButtonSocial } from "@components/buttons"
import clsx from "clsx"

const SocialRibbon = () => {
  const [hovered, setHovered] = useState<Social | null>(null)

  const renderSocialButton = (social: Social) => (
    <ButtonSocial
      className={clsx(
        "transition-opacity",
        hovered && hovered !== social && "opacity-50",
      )}
      social={social}
      onMouseEnter={() => setHovered(social)}
      onMouseLeave={() => setHovered(null)}
    />
  )
  return (
    <div className="flex gap-4 mr-2 items-center">
      {renderSocialButton("Unity")}
      {renderSocialButton("Github")}
      {renderSocialButton("Youtube")}
      {renderSocialButton("Linkedin")}
      {renderSocialButton("Artstation")}
    </div>
  )
}
export default SocialRibbon
