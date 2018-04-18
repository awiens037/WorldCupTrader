import React, { Component } from 'react';
//import './Chat.css'; 
import openSocket from 'socket.io-client';

class Chat extends Component {
	constructor(props){
		super(props);


	
		this.state = { 
			username: '',
			message: '',
			messages: [] 
		};

		// console.log('test')

		const socket = openSocket('localhost:5000');

		this.socket = socket;

		//listener to append new messages to be rendered
		socket.on('message', (msg) => {
			console.log('message recieved from ' + msg.name)
	    	this.setState({
	    		messages: [...this.state.messages, msg],
	    		username: '',
				message: ''
	    	})
	 	});

	};

	handleSubmit = () => {

		const msgToSend = {
			name: this.state.username,
			message: this.state.message,
		}

		this.setState({
    		messages: [...this.state.messages, msgToSend],
    		username: '',
			message: ''
    	})


		console.log('emmitting message from ' + msgToSend.name)

	    this.socket.emit('message', msgToSend)

	};


	handleInputChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({
			[name]: value,
		})
	}


	render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-title">Global Chat</div>
                                <hr/>
                                <div className="messages">
								    {this.state.messages.map(message => {
								        return (
								            <div key={message.index}><b>{message.name}</b>: {message.message}</div>
								        )
								    })}                                	
                                </div>
                                <div className="footer">
                                    <input 
	                                    type="text" 
	                                    name="username" 
	                                    placeholder="Username" 
	                                    value={this.state.username} 
	                                    onChange={this.handleInputChange} 
	                                    className="form-control"/>
                                    <br/>
                                    <input 
                                    	type="text" 
                                    	name="message" 
                                    	placeholder="Message" 
                                    	className="form-control" 
                                    	value={this.state.message} 
							            onChange={this.handleInputChange}
                                    	onKeyPress={event => {
							                if (event.key === 'Enter') {
							                  this.handleSubmit()
							            	}}}
							            	/>
                                    <br/>
                                    <button className="btn btn-primary form-control" onClick={this.handleSubmit}>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
	}
}

export default Chat;