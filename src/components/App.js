import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCounter, setProfile } from '../actions';
import Chat from './Chat';
import Login from './Login';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch(setProfile())
  }

  render() {

    return (
      <div>
        <h1>Food Ordering App</h1>
        {this.props.main.isLoggedIn ? <Profile user={this.props.main.user} /> : <><Login type="signup"  />
          <Login type="signin" /> </>}

          {/* <Chat/> */}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    main: state
  }
}

export default connect(mapStateToProps)(App);