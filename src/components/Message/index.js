import './index.css'

const Message = props => {
  const {status} = props
  return status === 'login' ? 'Welcome User' : 'Please Login'
}

export default Message
