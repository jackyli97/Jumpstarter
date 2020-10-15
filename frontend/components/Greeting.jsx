import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
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
                {this.props.path ? null : <Link to="/login" >Log In</Link>}
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


// export default ({ currentUser, logout, path }) => {
//     const icon = 'Search ' + '\uD83D\uDD0D'
//     const content = currentUser ? (
//         <div className="right-nav">
//             <h1>Welcome {currentUser.name}!</h1>
//             <button onClick={logout}>Logout</button>
//         </div>
//     ) : (
//         <div className="greeting-links">
//             {/* <button>

//                 <Link to="/signup">Sign Up</Link>
//             </button>
//             <br /> */}
//             {/* <input type="text" value={icon}/> */}
//             {/* add search bar */}
//             {path ? null : <Link to="/login" >Log In</Link>}
//         </div>
//         );
//     return (
//         <div>
//             <h1>
//                 {content}
//             </h1>
//         </div>
//     )
// }