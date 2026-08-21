type PlannerFormProps = {
  onSubmit: (subject: string, days: number) => void;
};

function PlannerForm({ onSubmit }: PlannerFormProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get("subject") ?? "").trim();
    const days = Number(data.get("days"));

    if (!subject || days < 1) {
      return;
    }

    onSubmit(subject, days);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        무엇을 공부할까요???????ㄴㄴㄴㄴ
        <input
          name="subject"
          type="text"
          placeholder="예: 파이썬, 영어, Git"
          required
        />
      </label>

      <label>
        며칠 동안 공부할까요?
        <input name="days" type="number" min={1} max={30} defaultValue={7} />
      </label>

      <button type="submit">계획 만들기</button>
    </form>
  );
}

export default PlannerForm;
