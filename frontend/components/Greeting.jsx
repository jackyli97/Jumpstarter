import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
    const content = currentUser ? (
        <div>
            <h1>Welcome {currentUser.name}!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
            <div>
                <button>

                    <Link to="/signup">Sign Up</Link>
                </button>
                <br />
                <button>

                    <Link to="/login">Log In</Link>
                </button>
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