import { TextPlain } from "@components"

interface SkillRowProps {
  label: string
  skills: string[]
}
const SkillRow = ({ label, skills }: SkillRowProps) => {
  return (
    <div className="text-sm mb-4">
      <p className="mb-1 text-base">{label}</p>
      <TextPlain className="text-stone-700">
        {skills.join(", ").toString()}
      </TextPlain>
    </div>
  )
}
export default SkillRow
