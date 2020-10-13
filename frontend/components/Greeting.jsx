import React from 'react';
import { Link } from 'react-router-dom';


export default ({ currentUser, logout }) => {
    const icon = 'Search ' + '\uD83D\uDD0D'
    const content = currentUser ? (
        <div>
            <h1>Welcome {currentUser.name}!</h1>
            <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div class="greeting-links">
            {/* <button>

                <Link to="/signup">Sign Up</Link>
            </button>
            <br /> */}
            {/* <input type="text" value={icon}/> */}
            {/* add search bar */}
            <Link to="/login" >Log In</Link>
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