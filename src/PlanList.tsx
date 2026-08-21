import type { StudyPlan } from './types'

type PlanListProps = {
  subject: string
  plan: StudyPlan[]
  onToggle: (day: number) => void
}

function PlanList({ subject, plan, onToggle }: PlanListProps) {
  if (plan.length === 0) {
    return <p className="empty">과목과 기간을 입력하면 공부 계획이 나와요.</p>
  }

  const doneCount = plan.filter((item) => item.done).length

  return (
    <section className="plan">
      <h2>{subject} {plan.length}일 계획</h2>
      <p className="progress">
        {doneCount} / {plan.length} 완료
      </p>
      <ul>
        {plan.map((item) => (
          <li key={item.day}>
            <label className={item.done ? 'done' : ''}>
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => onToggle(item.day)}
              />
              <span className="day">{item.day}일차</span>
              <span>{item.task}</span>
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PlanList
