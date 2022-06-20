import { Button, Card } from "antd";
import { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestion } from "../actions/questions";
import { withRouter } from "./WithRouter";

class NewQuestion extends Component {

    state = {
        optionOne: "",
        optionTwo: "",
        submitDisabled: true
    }

    onChangeOptionOne = (e) => {
        const optionOne = e.target.value;
        const isDisabled = optionOne === "" || this.state.optionTwo === "";
        this.setState(() => ({ optionOne: optionOne, submitDisabled: isDisabled }))
    }

    onChangeOptionTwo = (e) => {
        const optionTwo = e.target.value;
        const isDisabled = optionTwo === "" || this.state.optionOne === "";
        this.setState(() => ({ optionTwo: optionTwo, submitDisabled: isDisabled }))
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
        const { optionOne, optionTwo } = this.state;
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
                        <Button disabled={this.state.submitDisabled} onClick={() => this.add()}>Submit</Button>
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