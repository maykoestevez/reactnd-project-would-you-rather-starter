import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Radio } from "antd";
import { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withRouter } from "./WithRouter";
import { handleSaveQuestionAnswer } from "../actions/users";
import QuestionResult from "./QuestionResults";

class QuestionSelection extends Component {

    state = {
        selectedOption: 'optionOne',
        redirectToResult: false
    }
    isQuestionAnswered = () => {
        const { question, authedUser } = this.props
        const isAnswered = question?.optionOne.votes.some(u => authedUser.id === u) ||
            question?.optionTwo.votes.some(u => authedUser.id === u)
        this.setState(() => ({ redirectToResult: isAnswered }))
    }
    componentDidMount() {
        this.isQuestionAnswered();
        if (!this.props.question)
        {
            this.props.navigate('/notFound')
        }
    }
    saveAnswer(question) {
        this.props.dispatch(handleSaveQuestionAnswer({
            qid: question.id,
            authedUser: this.props.authedUser.id,
            answer: this.state.selectedOption
        }));
        this.setState(() => ({ redirectToResult: true }))
    }

    onChange = (e) => this.setState(() => ({ selectedOption: e.target.value }));

    render() {
        const { question, authedUser } = this.props;
        return (

            <div>
                {
                    this.state.redirectToResult ?
                        <QuestionResult question_id={question.id} />
                        : <Card title={`${question?.author} asks:`}>
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
                }

            </div>
        )
    }
}
function MapStateToProps({ questions, authedUser }) {
    const { question_id } = useParams()
    const question = questions[question_id];

    return {
        question,
        authedUser
    }
}

export default connect(MapStateToProps)(withRouter(QuestionSelection))