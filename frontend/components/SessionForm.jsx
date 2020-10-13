import React from 'react';
import { Link } from 'react-router-dom';

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
        let demoEmail = 'BigFunder@fundIt.com'.split('');
        let demoPassword = 'password'.split('');
        this.setState({
            email: "",
            password: ""
        }, () => this.demoUser(demoEmail, demoPassword))
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        const display = (this.props.formType === 'login') ? (
            <div className="background-grey">
                <div className="login-box">
                    <div className="auth-form-container">
                        <p class="auth-login-heading">Log in</p>
                        <Link to="/signup">Sign Up</Link>
                        <form class="login-form" onSubmit={this.handleSubmit}>
                            <label>Email
                            <input id="email" type="text" value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                            </label>
                            <label>Password
                            <input id="password" type="password" value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            </label>
                            <button className="submit-button">Log In!</button>
                        </form>
                    </div>
                </div>
            </div>
        ) : (
            <div className="background-grey">
                <div className="login-box">
                    <div className="auth-form-container">
                        <p class="auth-login-heading">Log in</p>
                        <Link to="/login">Log In</Link>
                        <form class="login-form" onSubmit={this.handleSubmit}>
                            <label>Name
                            <input type="text" value={this.state.name}
                                onChange={this.handleInput('name')}
                            />
                            </label>
                            <label>Email
                            <input id="email" type="text" value={this.state.email}
                                            onChange={this.handleInput('email')}
                                />
                            </label>
                            <label>Password
                            <input id="password" type="password" value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            </label>
                            <button className="submit-button">Sign Up!</button>
                        </form>
                    </div>
                </div>
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
                <input type="submit" value="Demo Login" className="submit-button" onClick={this.handleDemoSubmit} />
            </div>
        )
        return (
            <div>
                {display}
                {errors}
                {demo}
            </div>
        )
    }
}


export default SessionForm