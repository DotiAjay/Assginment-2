import {Component} from 'react'
import './index.css'

class PasswordItem extends Component {
  render() {
    const {userDetails, hidePass, onDelete} = this.props
    const {id, website, username, password} = userDetails
    console.log(hidePass)
    const DeleteItem = () => {
      onDelete(id)
    }

    return (
      <li key={id} className="bgcard">
        <div className="userLog">
          <p>{username}</p>
        </div>
        <div className="paraCard">
          <p>
            {website} 
          </p>
          <p>{username}</p>
          <p>
            {hidePass ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                alt="stars"
                className="stars"
              />
            ) : (
              password
            )}
          </p>
        </div>
        <button className="deleteBut" onClick={DeleteItem}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="deleteImg" data-testId="delete"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItem
