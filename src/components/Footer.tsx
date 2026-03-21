import { ContentContainer, LanguagePicker, Line, Trademark } from "@components"
import SocialRibbon from "./SocialRibbon"

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <ContentContainer className="flex justify-between items-center py-12">
        <Trademark />

        <div className="inline-flex">
          <SocialRibbon />
          <Line
            orientation="vertical"
            extend={false}
            className="h-3 mx-2 my-auto"
          />
          <LanguagePicker />
        </div>
      </ContentContainer>
    </footer>
  )
}
export default Footer
