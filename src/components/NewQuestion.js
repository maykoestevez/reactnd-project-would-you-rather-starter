import { Button, Card } from "antd";
import { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { withRouter } from "./WithRouter";

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: ''
    }

    onChangeOptionOne = (e) => {
        const optionOne = e.target.value;
        this.setState(() => ({ optionOne: optionOne }))

    }

    onChangeOptionTwo = (e) => {
        const optionTwo = e.target.value;
        this.setState(() => ({ optionTwo: optionTwo }))
    }
    add = () => {
        const { optionOne, optionTwo } = this.state;
        const question = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: this.props.authedUser.id
        }
        this.props.dispatch(handleSaveQuestion(question))
        this.props.navigate('/home')
    }

    render() {

        return (
            <div>
                <Card title="Create New Question">
                    <div>
                        <h5>Complete the question</h5>
                        <h3>Would you rather...</h3>
                        <input onChange={this.onChangeOptionOne} placeholder="Enter option one"></input>
                        <p></p>
                        <input onChange={this.onChangeOptionTwo} placeholder="Enter option two"></input>
                        <p></p>
                        <Button onClick={() => this.add()}>Submit</Button>
                    </div>
                </Card>
            </div>
        )
    }
}
function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(withRouter(NewQuestion))