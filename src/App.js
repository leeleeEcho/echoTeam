import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as userInfoActions from './actions/userInfo'

import { Button } from 'antd';
class App extends Component {
  login = () => {
    this.props._userInfo.login()
  }
  render() {
    return (
      <div className="App">
        <Button type="primary" onClick={this.login}>ssss</Button>
      </div>
    );
  }
}

export default connect(
  state => ({
    userInfo: state.userInfo
  }),
  dispatch => ({
    _userInfo: bindActionCreators(userInfoActions, dispatch),
  })
)(App);
