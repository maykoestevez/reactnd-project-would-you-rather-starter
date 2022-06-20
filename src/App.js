import { Component } from "react";
import Login from "./components/Login";
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom';
import Home from "./components/Home";
import { Content, Header } from "antd/lib/layout/layout";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { setAuthedUser } from "./actions/authedUser";
import { withRouter } from "./components/WithRouter";
import NewQuestion from "./components/NewQuestion";
import LeaderBoard from "./components/LeaderBoard";
import QuestionSelection from "./components/QuestionSelection";
import QuestionResult from "./components/QuestionResults";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {

  render() {

    const navigateToComponent = (component) => currentUser.id ? component :  <Navigate to="/" replace />
    const { currentUser } = this.props;
    const logout = () => {
      this.props.dispatch(setAuthedUser({ id: undefined, name: '' }));
      this.props.navigate('/');
    }

    const showNavigate = (route) =>
      currentUser ? <Link to={route}></Link> : <Link to={'/'}></Link>

    return (
      <div>
        <Layout>
          <Header>
            <Row justify="space-between">
              <Col span={12}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} >
                  <Menu.Item key="home" >
                    <span>Home</span>
                    {showNavigate("/home")}
                  </Menu.Item>
                  <Menu.Item key="newQuestion"  >
                    <span>New Question</span>
                    {showNavigate("/add")}
                  </Menu.Item>
                  <Menu.Item key="leaderBoard"  >
                    <span> Leader Board</span>
                    {showNavigate("/leaderBoard")}
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={4}>
                {currentUser.id &&
                  <div>
                    <label style={{ color: "white", padding: "8px" }}>{currentUser.name}</label>
                    <Avatar src={currentUser?.avatarURL && ''} />
                    <label onClick={logout} style={{ cursor: 'pointer', color: "white", paddingLeft: "40px" }}>Log out</label>
                  </div>
                }
              </Col>
            </Row>
          </Header>
          <Content style={{ padding: '0 50px', minHeight: 400 }}>
            <Routes>
              <Route path='*' element={<NotFoundPage />} />
              <Route path="notFound" element={<NotFoundPage />} />
              <Route path='/' element={<Login />} />
              <Route path='/home' element={navigateToComponent(<Home />)} />
              <Route path='/add' element={navigateToComponent(<NewQuestion />)} />
              <Route path='/leaderBoard' element={navigateToComponent(<LeaderBoard />)} />
              <Route path='/questions/:question_id' element={navigateToComponent(<QuestionSelection />)} />
            </Routes>
          </Content>
        </Layout>
      </div>
    )
  }
}

function MapStateToProps({ authedUser, questions }) {
  return {
    currentUser: authedUser,
    questions
  }
}

export default connect(MapStateToProps)(withRouter(App))