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
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        let path = '/' + this.props.formType;
        this.props.processForm(user).then(() => this.props.history.push('/'))
            .fail(() => this.setState({ errors: this.props.errors }))
            ;
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    render() {
        const display = (this.props.formType === 'login') ? (
            <div >
                <Link to="/signup">Sign Up</Link>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                    <input type="text" value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password
                    <input type="password" value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button>Log In!</button>
                </form>
            </div>
        ) : (
                <div>
                    <Link to="/login">Log In</Link>
                    <form onSubmit={this.handleSubmit}>
                        <label>Name
                <input type="text" value={this.state.name}
                                onChange={this.handleInput('name')}
                            />
                        </label>
                        <label>Email
                <input type="text" value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password
                <input type="password" value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                        </label>
                        <button>Sign Up!</button>
                    </form>
                </div>
            )
        const errors = this.state.errors.map((error) => {
            return (
                <li>
                    {error}
                </li>
            )
        })
        return (
            <div>
                {display}
                {errors}
            </div>
        )
    }
}


export default SessionForm