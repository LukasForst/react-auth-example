import { QuestionDtoOut } from '../generated';

export default function Question({ question }: {question: QuestionDtoOut}) {
  console.log(question)
  return (
    <li key={question.id}>
      Q: {question.cs}
    </li>
  )
}
