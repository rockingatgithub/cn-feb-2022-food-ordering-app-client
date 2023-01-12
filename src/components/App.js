import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import setTheProfile, { setCounter } from '../actions';
import Chat from './Chat';
import HooksApp from './HooksApp';
import Login from './Login';
import Profile from './Profile';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.dispatch(setTheProfile())
  }


  render() {

    return (
      <BrowserRouter>
        <div>
          <h1>Food Ordering App</h1>
          {/* {this.props.main.isLoggedIn ? <Profile user={this.props.main.user} /> : <><Login type="signup"  />
            <Login type="signin" /> </>} */}
            {/* <HooksApp/> */}
            <Routes>
              <Route path='/signup' element={<Login type="signup"  />} />
              <Route path='/signin' element={<Login type="signin"  />} />
              <Route path='/profile' element={<Profile user={this.props.main.user} />} />
              {/* <Route path='/chat' element={<Chat/>}  /> */}
            </Routes>
        </div>
        <div>
          <Link to='/signup'> Signup </Link>
          <Link to='/signin' > Singin </Link>
          <Link to='/profile'> Profile </Link>
          <Link to='/chat'> Chat </Link>
        </div>

      </BrowserRouter>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    main: state
  }
}

export default connect(mapStateToProps)(App);