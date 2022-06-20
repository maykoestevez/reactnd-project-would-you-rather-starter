import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Radio } from "antd";
import { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withRouter } from "./WithRouter";
import { handleSaveQuestionAnswer } from "../actions/users";

class QuestionSelection extends Component {

    state = {
        selectedOption: 'optionOne'
    }
    saveAnswer(question) {
        this.props.dispatch(handleSaveQuestionAnswer({
            qid: question.id,
            authedUser: this.props.authedUser.id,
            answer: this.state.selectedOption
        }));
        this.props.navigate(`/questionResult/${question.id}`)
    }

    onChange = (e) => this.setState(() => ({ selectedOption: e.target.value }));

    render() {
        const { question, authedUser } = this.props;
        return (
            <div>
                <Card title={`${question?.author} asks:`}>
                    <div>
                        <Avatar src={authedUser.avatarURL} size={'large'} />
                        <p></p>
                        <h3>Would you rather...</h3>
                        <Radio.Group onChange={this.onChange} name="radiogroup" defaultValue={'optionOne'}>
                            <Radio value={'optionOne'}>{question?.optionOne.text}</Radio>
                            <Radio value={'optionTwo'}>{question?.optionTwo.text}</Radio>
                        </Radio.Group>
                        <p></p>
                        <Button onClick={() => this.saveAnswer(question)}>Submit</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
function MapStateToProps({ questions, authedUser }) {
    const { id } = useParams()
    const question = questions[id];

    return {
        question,
        authedUser
    }
}

export default connect(MapStateToProps)(withRouter(QuestionSelection))