import {Component} from 'react'

import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {status: 'logout'}

  changeStatus = () => {
    const {status} = this.state
    if (status === 'login') {
      this.setState({status: 'logout'})
    } else {
      this.setState({status: 'login'})
    }
  }

  logInOrLogout = () => {
    const {status} = this.state
    return status === 'login' ? <Logout /> : <Login />
  }

  render() {
    const {status} = this.state

    return (
      <div className="Home_container">
        <div className="container">
          <h1 className="heading">
            <Message status={status} />
          </h1>
          <button onClick={this.changeStatus} type="button" className="button">
            {this.logInOrLogout()}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
