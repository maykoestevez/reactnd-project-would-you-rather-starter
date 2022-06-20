import { Card, Progress } from "antd";

export default function QuestionResultCard({ option, votes, authedUserId }) {
    const voteForOption = option.votes.some(x => x === authedUserId)
    const calculatePercentage = (option) => Math.round((option?.votes.length / votes) * 100,)
    return (
        <div>
            <Card style={voteForOption ? { backgroundColor: 'lightblue' } : { backgroundColor: 'white' }}>
                <div style={{ float: 'right' }}>
                    {
                        voteForOption && <h3 style={{ color: 'green' }}>Your vote</h3>
                    }
                </div>
                <h4>Would you rather {option.text}</h4>
                <Progress percent={calculatePercentage(option)} />
                <label>{option?.votes.length} out of {votes} votes</label>
            </Card>
        </div>
    )
}