import { useSelector } from "react-redux";
import QuestionResultCard from "./QuestionResultCard";

export default function QuestionResult({question_id}) {
    const {
        questions,
        users,
        authedUser
    } = useSelector((state) => state)

    const question = questions[question_id]
    const optionOne = question.optionOne;
    const optionTwo = question.optionTwo
    const authedUserId = authedUser.id
    const votes = Object.keys(users).length

    return (
        <div>
            <h3>Results</h3>
            <p></p>
            <QuestionResultCard option={optionOne} votes={votes} authedUserId={authedUserId} />
            <QuestionResultCard option={optionTwo} votes={votes} authedUserId={authedUserId} />
        </div>
    )
}




