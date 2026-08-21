import type { StudyPlan } from './types'

const tasks = [
  (subject: string) => `${subject} 기초 개념 공부하기`,
  (subject: string) => `${subject} 핵심 정리하기`,
  (subject: string) => `${subject} 예제 풀어보기`,
  (subject: string) => `${subject} 오답 복습하기`,
  (subject: string) => `${subject} 요약 노트 만들기`,
]

export function makePlan(subject: string, days: number): StudyPlan[] {
  const plan: StudyPlan[] = []

  for (let day = 1; day <= days; day++) {
    const isLastDay = day === days && days > 1
    const task = isLastDay
      ? `${subject} 전체 복습하고 점검하기`
      : tasks[(day - 1) % tasks.length](subject)

    plan.push({ day, task, done: false })
  }

  return plan
}
