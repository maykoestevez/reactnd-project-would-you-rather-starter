
import { Component } from "react";
import { Card, Col, Row, Tabs } from 'antd';
import { connect } from "react-redux";
import { handleQuestions } from "../actions/questions";
import QuestionCard from "./QuestionCard";
const { TabPane } = Tabs;

class Home extends Component {
    componentDidMount() {
        this.props.dispatch(handleQuestions());
    }
    render() {
        const { unansweredQuestions, answeredQuestions } = this.props;
        return (
            <div>
                <Row justify="center">
                    <Col span={8}>
                        <Card>
                            <Tabs defaultActiveKey="1" >
                                <TabPane tab="Unanswered Questions" key="1">
                                    <QuestionCard questions={unansweredQuestions} />
                                </TabPane>
                                <TabPane tab="Answered Questions" key="2">
                                    <QuestionCard questions={answeredQuestions} />
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>
                </Row>
            </div >
        )
    }
}
function mapStateToProps({ questions, authedUser, users }) {
    const questionsArray = Object.keys(questions).map((key) => questions[key]);
    const currentUser = users[authedUser.id]
    let unansweredQuestions = []
    let answeredQuestions = []
    if (authedUser.answers) {
        const answerIds = Object.keys(currentUser?.answers).map((key) => key);
        unansweredQuestions = questionsArray.filter(q => !answerIds.some(a => a === q.id))
        unansweredQuestions.sort((a, b) => b.timestamp - a.timestamp)
        answeredQuestions = questionsArray.filter(q => answerIds.some(a => a === q.id))
        answeredQuestions.sort((a, b) => b.timestamp - a.timestamp)
    }

    return {
        unansweredQuestions,
        answeredQuestions
    }
}

export default connect(mapStateToProps)(Home)