import type { ReactChildren } from "@types"

const SideBySideContainer = ({ children }: ReactChildren) => {
  return <div className="grid lg:grid-cols-2 grid-cols-1">{children}</div>
}
export default SideBySideContainer
