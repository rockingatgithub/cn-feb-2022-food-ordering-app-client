import React, { Component } from 'react';
import socketIO from 'socket.io-client';
// const scoket = socketIO.connect('http://localhost:8000')


class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }
    }
    

    componentDidMount = () => {
        // scoket.on('msg-from-backend', (msg) => {
        //     console.log('Message received!', msg)
        // })
    }

    msgHandler = (event) => {
        this.setState({
            msg: event.target.value
        })
    }

    sendMessage = () => {
        // scoket.emit('msg', this.state.msg)
    }

    render() {
        return (
            <div>

                <h1>Chat App</h1>

                <input type="text" onChange={this.msgHandler} />
                <button onClick={this.sendMessage} > Send </button>
                
            </div>
        );
    }
}

export default Chat;