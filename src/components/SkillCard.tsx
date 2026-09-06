import type { Skill } from '../data/portfolio'

type SkillCardProps = {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className="skill-card">
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
    </article>
  )
}
