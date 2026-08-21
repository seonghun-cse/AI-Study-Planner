# AI Study Planner

공부할 과목과 기간을 입력하면 하루 단위 계획을 만들어 주는 아주 작은 앱입니다.
Git 협업을 연습하기 좋게, 기능을 파일 단위로 나눠 두었습니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 나오는 주소(보통 `http://localhost:5173`)를 열면 됩니다.

## 파일 역할

| 파일 | 하는 일 |
| --- | --- |
| `src/PlannerForm.tsx` | 과목·기간 입력 폼 |
| `src/PlanList.tsx` | 계획 목록과 완료 체크 |
| `src/makePlan.ts` | 계획을 만드는 간단한 로직 |
| `src/App.tsx` | 위 파일들을 연결하는 화면 |

## Git 협업 연습 아이디어

서로 다른 파일을 고치면 충돌이 잘 안 납니다.

- `feature/form` 브랜치 → 입력 폼 문구/디자인 바꾸기
- `feature/list` 브랜치 → 계획 목록 모습 바꾸기
- `feature/ai` 브랜치 → `makePlan.ts`의 공부 내용 바꾸기
