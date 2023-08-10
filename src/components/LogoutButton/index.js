import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const logoutClicked = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={logoutClicked}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
