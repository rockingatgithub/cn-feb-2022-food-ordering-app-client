import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoggedIn: false,
    }
  }
  

  setUser = (user) => {
    this.setState({
      user: user,
      isLoggedIn: true
    })
  }


  render() {
    return (
      <div>
        <h1>Food Ordering App</h1>
        {this.state.isLoggedIn ? <Profile user={this.state.user} /> : <><Login type="signup" setUser={this.setUser} />
          <Login type="signin" setUser={this.setUser} /> </>}


      </div>
    );
  }
}

export default App;