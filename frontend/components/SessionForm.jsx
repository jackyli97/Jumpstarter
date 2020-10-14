import React from 'react';
import { Link } from 'react-router-dom';

const SessionFooterText = ({ path }) => {
    if (path === '/login') {
        return (
            <div className="auth-form-footer-text" >
                New to Jumpstarter? <Link to='/signup'> Sign up</Link>
            </div>
        )
    } else {
        return (
            <div className="auth-form-footer-text" >
                Have An Account? <Link to='/login'>Log in</Link>
            </div>
        )
    }
}

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        let path = '/' + this.props.formType;
        this.props.processForm(user).then(() => this.props.history.push('/'))
        .fail(() => this.setState({ errors: this.props.errors }));
    }

    handleDemoSubmit(e) {
        e.preventDefault();
        let demoEmail = 'demouser@aa.io'.split('');
        let demoPassword = 'password'.split('');
        this.setState({
            email: "",
            password: ""
        },
        () => this.demoUser(demoEmail, demoPassword))
    }
    // handleDemoSubmit logic borrowed from Chris Thompson, SF AA December 2019

    demoUser(demoEmail, demoPassword) {
        let rate = 50;
        if (demoEmail.length > 0) {
            this.setState({
                email: this.state.email += demoEmail.shift()
            }, () => window.setTimeout(() => this.demoUser(demoEmail, demoPassword), rate))
        } else if (demoPassword.length > 0) {
            this.setState({
                password: this.state.password += demoPassword.shift()
            }, () => window.setTimeout(() => this.demoUser(demoEmail, demoPassword), rate))

        } else if (demoPassword.length === 0) {
            // debugger
            if (!this.props.nextPath) {
                this.props.processForm(this.state)
                    .then(() => this.props.history.push('/'))
            } else {
                this.props.processForm(this.state)
                    .then(() => this.props.history.push(this.props.nextPath))
            }
        }
    }
    // demoUser logic borrowed from Chris Thompson, SF AA December 2019

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }
    
    render() {
        let errors = this.state.errors.map((error) => {
            return (
                <li className="auth-errors">
                    {error} 
                </li>
            )
        })
        let path = this.props.location.pathname;
        const display = (
            <div className="auth-form-container">
                {this.props.formType === 'login' ? <label>Log in</label> : <label>Sign up</label>}
                <form className="login-form" onSubmit={this.handleSubmit}>
                    {this.props.formType === 'signup' ? <input autoFocus type="text" value={this.state.name} placeholder="Name"
                        onChange={this.handleInput('name')}
                    /> : null}
                    {this.props.formType === 'login' ? <input autoFocus id="email" type="email" placeholder="Email" value={this.state.email}
                        onChange={this.handleInput('email')}
                    /> : <input id="email" type="email" placeholder="Email" value={this.state.email}
                        onChange={this.handleInput('email')}
                        />}
                    <input id="password" type="password" placeholder="Password" value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                    {this.props.formType === 'login' ? <input type="submit" className="submit-button" value="Log in" /> : 
                    <input type="submit" className="submit-button" id="signup" value="Sign up" />
                    }
                </form>
                {this.props.formType === 'login' ? <div className="demo-button-container">
                    <input type="submit" className="submit-button" id="demo" onClick={this.handleDemoSubmit} value="Demo Login" />
                </div> : null}
                <div className="errors-container">
                    {errors}
                </div>
            </div>
        )
        return (
            <div className="background-grey">
                <div className="login-box">
                    <div>
                        {display}
                    </div>
                </div>
                <div className="auth-form-footer auth-text">
                    <SessionFooterText path={path} />
                </div>
            </div>
        )
    }
}


export default SessionForm