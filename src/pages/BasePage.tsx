import { Outlet } from "react-router-dom"
import { TopNav, Footer, MainContainer, ContentContainer } from "@components"

const BasePage = () => {
  return (
    <MainContainer>
      <TopNav />
      <main className="grow">
        <ContentContainer>
          <Outlet />
        </ContentContainer>
      </main>
      <Footer />
    </MainContainer>
  )
}
export default BasePage
