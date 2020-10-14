import React from 'react';
import { Link } from 'react-router-dom';

const SessionFooterText = ({ path }) => {
    if (path === '/login') {
        return (
            <div className="auth-form-footer-text" >
                New to Jumpstarter? <Link to='/signup'> Signup!</Link>
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
        .fail(() => this.setState({ errors: this.props.errors }))
        ;
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

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        const display = (this.props.formType === 'login') ? (
            <div>
                <label>Log in</label>
                {/* <Link to="/signup">Sign Up</Link> */}
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input autoFocus id="email" type="email" placeholder="Email" value={this.state.email}
                        onChange={this.handleInput('email')}
                    />
                    <input id="password" type="password" placeholder="Password" value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                    <input type="button" className="submit-button" value="Log in"/>
                </form>
            </div>
        ) : (
            <div>
                <label>Sign up</label>
                {/* <Link to="/login">Log In</Link> */}
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <input autoFocus type="text" value={this.state.name} placeholder="Name"
                        onChange={this.handleInput('name')}
                    />
                    <input id="email" type="email" placeholder="Email" value={this.state.email}
                    onChange={this.handleInput('email')}
                    />
                    <input id="password" type="password"  placeholder="Password" value={this.state.password}
                        onChange={this.handleInput('password')}
                    />
                    <input type="button" className="submit-button" value="Create account" />
                </form>
            </div>
            )
        const errors = this.state.errors.map((error) => {
            return (
                <div className="errors-container">
                    <li className="auth-errors">
                        {error}
                    </li>
                </div>
            )
        })

        const demo = (
            <div className="demo-button-container">
                <input type="submit" className="submit-button" onClick={this.handleDemoSubmit} value="Demo Login" />
            </div>
        )
        let path = this.props.location.pathname;
        return (
            <div className="background-grey">
                <div className="login-box">
                    <div className="auth-form-container">
                        {display}
                        {demo}
                        {errors}
                    </div>
                    <div className="auth-form-footer">
                        <SessionFooterText path={path} />
                    </div>
                </div>
            </div>
        )
    }
}


export default SessionForm