import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
            userType: ''
        }
    }

    // used as an example ....
    componentDidUpdate = () => {
        console.log("Updated!")
      }

    componentWillUnmount = () => {
        console.log("The component is ready to unmount!")
    }

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

    submitHandler = async (event) => {

        const { email, password, userType } = this.state

        event.preventDefault()

        const user = {
            email,
            password
        }

        let res = await fetch(`http://localhost:8000/${userType}/${this.props.type}`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })

        let parsedRes = await res.json()
        console.log(parsedRes)

        if(parsedRes.message === "Success"){

            this.props.setUser(parsedRes.data)
            if(window) {
                document.cookie = 'user=' + parsedRes.token
            }

        }

    }

    userSelect = (event) => {

        this.setState({
            userType: event.target.value
        })

    }


    render() {

        console.log(this.props)

        const { email, password } = this.state

        return (
            <div>

                <form onSubmit={this.submitHandler} >
                    <input type="email" value={email} onChange={this.emailHandler} />
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

export default Login;