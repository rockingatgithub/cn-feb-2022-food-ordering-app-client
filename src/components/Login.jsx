import { connect } from 'react-redux';
import React, { Component } from 'react';
import { createSession } from '../actions';



// export const Component = withRouter(({ history, location }) =>{

// })

// class Comp extends Component {
//     render(){
//         const { location, history } = this.props
//     }
// }
class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            name: '',
            userType: ''
        }
        this.intervalId = ''
    }

    // componentDidMount = () => {
    //     this.intervalId = setInterval(() => {
    //         console.log("Running interval!")
    //     }, 1000)
    // }

    // componentWillUnmount = () => {
    //     clearInterval(this.intervalId)    
    // }

    emailHandler = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    passwordHandler = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    nameHandler = (event) => {

        this.setState({
            name: event.target.value,
        })

    }

    submitHandler = async (event) => {

        const { email, password, userType } = this.state
        event.preventDefault()
        const user = {
            email,
            password
        }
        this.props.dispatch(createSession(user, userType, this.props.type))

    }

    userSelect = (event) => {

        this.setState({
            userType: event.target.value
        })

    }


    render() {

        console.log(this.props)

        const { email, password, name } = this.state

        return (
            <div>

                <form onSubmit={this.submitHandler} >
                    <input type="email" value={email} onChange={this.emailHandler} />
                    <input type="text" value={name} onChange={this.nameHandler} />
                    <input type="password" value={password} onChange={this.passwordHandler} />
                    <br/>
                    Customer: <input type="radio" name='userType' value="customer" onChange={this.userSelect} />
                    Restaurant: <input type="radio" name='userType' value="restaurant" onChange={this.userSelect} />

                    <button type='submit' > {this.props.type} </button>

                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      main: state
    }
  }

// const Router = withRouter(Comp)


export default  connect(mapStateToProps)(Login);