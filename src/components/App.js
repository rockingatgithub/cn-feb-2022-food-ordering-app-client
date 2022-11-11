import Cookies from 'js-cookie';
import React, { Component } from 'react';
import Chat from './Chat';
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

  componentDidMount = async () => {

    const res = await fetch('http://localhost:8000/profile', {
      headers: {
        'Authorization': `Bearer ${Cookies.get('user')}`
      }
    })
    const parsedRes = await res.json()
    this.setUser(parsedRes.user)

  }

 


  render() {
    return (
      <div>
        <h1>Food Ordering App</h1>
        {this.state.isLoggedIn ? <Profile user={this.state.user} /> : <><Login type="signup" setUser={this.setUser} />
          <Login type="signin" setUser={this.setUser} /> </>}

          <Chat/>

      </div>
    );
  }
}

export default App;