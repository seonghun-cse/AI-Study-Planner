import { useState } from 'react'
import PlannerForm from './PlannerForm'
import PlanList from './PlanList'
import { makePlan } from './makePlan'
import type { StudyPlan } from './types'
import './App.css'

function App() {
  const [subject, setSubject] = useState('')
  const [plan, setPlan] = useState<StudyPlan[]>([])

  function handleCreate(nextSubject: string, days: number) {
    setSubject(nextSubject)
    setPlan(makePlan(nextSubject, days))
  }

  function handleToggle(day: number) {
    setPlan((current) =>
      current.map((item) =>
        item.day === day ? { ...item, done: !item.done } : item,
      ),
    )
  }

  return (
    <main>
      <h1>AI Study Planner</h1>
      <p className="lead">공부할 과목과 기간을 넣으면 하루 계획을 만들어 줘요.</p>
      <PlannerForm onSubmit={handleCreate} />
      <PlanList subject={subject} plan={plan} onToggle={handleToggle} />
    </main>
  )
}

export default App
