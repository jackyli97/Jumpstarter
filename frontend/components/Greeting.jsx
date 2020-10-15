import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.path && !this.props.authPath) {
            this.props.history.push('./')
        }
        const icon = 'Search ' + '\uD83D\uDD0D'
        const content = this.props.currentUser ? (
            <div className="right-nav">
                <h1>Welcome {this.props.currentUser.name}!</h1>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        ) : (
            <div className="greeting-links">
                {/* <button>

        <Link to="/signup">Sign Up</Link>
    </button>
    <br /> */}
                {/* <input type="text" value={icon}/> */}
                {/* add search bar */}
                {this.props.authPath ? null : <Link to="/login" >Log In</Link>}
            </div>
            );
        return (
            <div>
                <h1>
                    {content}
                </h1>
            </div>
        )
    }
    }

export default Greeting