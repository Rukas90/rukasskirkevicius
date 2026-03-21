import { ContentContainer, LanguagePicker, Line, Trademark } from "@components"
import SocialRibbon from "./SocialRibbon"

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <ContentContainer className="flex sm:gap-0 gap-4 sm:flex-row flex-col-reverse justify-between items-center sm:py-12 py-6">
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
