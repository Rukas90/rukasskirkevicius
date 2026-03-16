import { FlexCenterContainer, MainContainer, TextLink } from "@components"

const NotFound = () => {
  return (
    <MainContainer>
      <FlexCenterContainer className="flex-col">
        <p className="text-[clamp(3rem,8vw,4rem)] font-bold text-stone-700">
          NOT FOUND
        </p>
        <TextLink
          indicatorSize="bigger"
          to="/"
          className="text-[clamp(0.5rem,5vw,2rem)] animate-moveup"
        >
          Go Home
        </TextLink>
      </FlexCenterContainer>
    </MainContainer>
  )
}
export default NotFound
