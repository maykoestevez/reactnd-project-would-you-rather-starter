import { Card } from "antd";
import { Link } from "react-router-dom";

export default function QuestionCard({ questions }) {
    return (
        <div>
            {questions?.map((question) => (
                < div key={question.id}>
                    <Card key={question.id} title={question.author} style={{ width: 300 }}>
                        <h4>Would your rather</h4>
                        <p></p>
                        <label>{question?.optionOne.text}</label>
                        <p></p>
                        <label>{question?.optionTwo.text}</label>
                        <p></p>
                        <Link to={`/questions/${question.id}`} >Go to poll</Link>
                    </Card>
                    <br></br>
                </div>
            ))}
        </div>
    )
}