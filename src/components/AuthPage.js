import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';


class AuthPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
		};
	}

	handleSubmit = e => {
		e.preventDefault();
    let { authMode, submitCred } = this.props;
		submitCred(authMode, this.state)
			.then(() => this.props.history.push("/welcome"));
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}

	render() {
    // Redirect if user is already logged in.
    if (this.props.currentUser.isAuthenticated) {
      return <Redirect to="/welcome" />;
    }

		let { 
      authMode,
		} = this.props;

		// Create Link to alternate Auth mode.
		let altPath, linkText;
		if (authMode === 'signin') {
			altPath = '/register';
			linkText = 'Register';
		} else if (authMode === 'register') {
			altPath = '/signin';
			linkText = 'Sign in';
		} else {
      // If another route is caught, redirect to that route.
			return (<Redirect to="/{authMode}" />);
		}

		return (
			<div className="authpage">
				<Link to="/">Return Home</Link>
				<p>Auth page, at: {authMode}</p>
				<hr />
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Username</label>
						<input 
							type="text"
							name="username"
							onChange={this.handleChange}
						/>
					</div>
					<div>
						<label>Password</label>
						<input 
							type="password"
							name="password"
							onChange={this.handleChange}
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
				<Link 
					to={altPath}
					onClick={this.clearState}>
					{linkText}
				</Link>
			</div>
		);
	}
}


export default AuthPage;