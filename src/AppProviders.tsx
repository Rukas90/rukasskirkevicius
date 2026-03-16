import { BrowserRouter } from "react-router-dom"
import { LanguageProvider } from "./contexts"

const AppProviders = ({
  children,
}: Pick<React.ComponentProps<"div">, "children">) => {
  return (
    <BrowserRouter>
      <LanguageProvider>{children}</LanguageProvider>
    </BrowserRouter>
  )
}
export default AppProviders
