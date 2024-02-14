import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../passwordItem'
import './index.css'

class PasswordManger extends Component {
  state = {
    userList: [],
    userWeb: '',
    user: '',
    pass: '',
    hidePass: true,
    count: 0,
  }
  web = event => {
    this.setState({userWeb: event.target.value})
  }
  User = event => {
    this.setState({user: event.target.value})
  }
  pass = event => {
    this.setState({pass: event.target.value})
  }
  ShowPasswaord = () => {
    const {hidePass} = this.state
    this.setState(preState => {
      return {hidePass: !preState.hidePass}
    })
  }

  add = event => {
    event.preventDefault()
    const {userList, userWeb, user, pass} = this.state

    const newItem = {
      id: uuidv4(),
      website: userWeb,
      username: user,
      password: pass,
    }

    this.setState(preState => {
      return {
        userList: [...preState.userList, newItem],
        userWeb: '',
        user: '',
        pass: '',
        count: preState.count + 1,
      }
    })
  }
  onsearch = event => {
    const {userList} = this.state
    const newList = userList.filter(each =>
      each.website.toLowerCase().includes(event.target.value),
    )
    this.setState({userList: newList})
  }
  onDelete = id => {
    const {userList} = this.state
    const FilterList = userList.filter(eachVal => eachVal.id !== id)
    this.setState(preState => {
      return {userList: FilterList, count: preState.count - 1}
    })
  }

  render() {
    const {userList, userWeb, user, pass, hidePass, count} = this.state

    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          className="logo"
         
          alt="app logo"
        />

        <div className="inputDiv">
          <div className="form">
            <h1>Add New PassWord</h1>

            <form>
              <label htmlFor="userwebsite">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  alt="website"
                  className="inputImg"
                />{' '}
              </label>
              <input
                type="text"
                placeholder="Enter website"
                className="input"
                onChange={this.web}
                id="userwebsite"
                value={userWeb}
              />{' '}
              <br />
              <label htmlFor="userEnter">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  alt="username"
                  className="inputImg"
                />{' '}
              </label>
              <input
                type="text"
                id="userEnter"
                placeholder="Enter username"
                className="input"
                onChange={this.User}
                value={user}
              />{' '}
              <br />
              <label htmlFor="userPass">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="inputImg"
                />{' '}
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input"
                onChange={this.pass}
                id="userPass"
                value={pass}
              />{' '}
              <br />
              <button className="AddBut" onClick={this.add}>
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            className="passImg"  alt="password manager"
          />
        </div>
        <div className="card">
          <div className="NavBar">
            <h1 className="passHead">Your Passwords</h1>
            <p>{count}</p>
            <label htmlFor="searchItem">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="searchImg"
              />{' '}
            </label>
            <input
              type="search"
              className="searchInput"
              id="searchItem"
              onChange={this.onsearch}
            />
          </div>
          <hr className="hr" />
          <div className="checkboxItem">
            <input type="checkbox" id="box" onClick={this.ShowPasswaord} />
            <label htmlFor="box" className="passHead">
              Show passwords
            </label>
          </div>
          <div>
            <ul type="none" className="listCard">
              {userList.length > 0 ? (
                userList.map(eachItem => (
                  <PasswordItem
                    userDetails={eachItem}
                    key={eachItem.id}
                    hidePass={hidePass}
                    onDelete={this.onDelete}
                  />
                ))
              ) : (
                <div>
                  <p>No Passwords</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                    alt="no passwords"
                    className="noPass"
                  />
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManger
