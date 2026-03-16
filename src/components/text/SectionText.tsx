import { Line } from "@components"
import type { ReactChildren } from "@types"

const SectionText = ({ children }: ReactChildren) => {
  return (
    <div className="mb-6">
      <p className="uppercase text-[clamp(1.25rem,3vw,1.5rem)] font-light text-stone-500">
        {children}
      </p>
      <Line overridesColor className="bg-stone-200 my-2" />
    </div>
  )
}
export default SectionText
