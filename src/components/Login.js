import { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { handleUsers } from "../actions/users";
import { withRouter } from "./WithRouter";

class Login extends Component {
    state = {
        slectedUser: undefined,
    }
    componentDidMount() {
        this.props.dispatch(handleUsers());
    }

    setLoggedUser = () => {
        if (!this.state.slectedUser) {
            this.setState(() => ({
                slectedUser: this.props.usersArray[0]
            }))
            this.props.dispatch(setAuthedUser(this.props.usersArray[0]));
        } else {
            this.props.dispatch(setAuthedUser(this.state.slectedUser));
        }

        this.props.navigate('/home')
    }

    setSelectedUser = (event) => {
        const userId = event.target.value;
        if (!userId) {
            userId = this.props.usersArray[0]
        }
        this.setState(() => ({
            slectedUser: this.props.usersArray.find(x => x.id === userId)
        }))
    }

    render() {
        const { usersArray } = this.props;
        return (
            <div>
                <h2>Welcome to would rather app</h2>
                <h4>Sign in to continue</h4>
                <select defaultValue={usersArray[0]} onChange={this.setSelectedUser} placeholder="Select User">
                    {usersArray?.map(user => (
                        <option value={user.id} key={user.id}>{user.name}</option>
                    ))}
                </select>
                <p></p>
                <button onClick={() => this.setLoggedUser()}>Sign in</button>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    const usersArray = Object.keys(users).map((key) => users[key]);
    return {
        usersArray,
    }
}

export default connect(mapStateToProps)(withRouter(Login))