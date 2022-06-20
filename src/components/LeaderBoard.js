import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Divider } from "antd";
import { useSelector } from "react-redux";

export default function LeaderBoard() {
    const users = useSelector((state) => state.users);
    const userArray = Object.keys(users).map((k) => users[k]);
    const getNumberOfAnswers = (answers) => Object.keys(answers).length;

    userArray.sort((a, b) => {
        const sumA = getNumberOfAnswers(a.answers) + a.questions.length;
        const sumB = getNumberOfAnswers(b.answers) + b.questions.length;
        return sumB - sumA
    })
   
    const calculateTotal = (user) =>
        getNumberOfAnswers(user.answers) + user.questions.length

    return (
        <div>
            {
                userArray.map((user) => (
                    <Card key={user.id}>
                        <Avatar src={user.avatarURL} size={'large'} />
                        <p></p>
                        <h4>{user.name}</h4>
                        <div>
                            <label>Answred questions </label>
                            <span>{getNumberOfAnswers(user.answers)}</span>
                            <p></p>
                            <label>Created questions </label>
                            <span>{user.questions.length}</span>
                        </div>
                        <Divider type='horizontal'></Divider>
                        <h4>Score {calculateTotal(user)}</h4>
                    </Card>
                ))
            }

        </div>
    )
}
