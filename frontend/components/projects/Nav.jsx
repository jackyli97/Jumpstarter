import React from 'react';
import { withRouter } from 'react-router-dom';
import GreetingContainer from "../GreetingContainer";
import { Link } from 'react-router-dom'

const Nav = ({projectPath}) => {
    return(
        <div>
            <nav className="top-nav">
                <section className="nav-container">
                    <Link to={'/projects/explore'}>Explore</Link>
                    {!projectPath ? 
                    <Link to={'/projects/start'}>Start a Project</Link> : <div></div>
                    }
                </section>
                <section className="nav-container-logo">
                    <Link to="/">
                        <h1>JUMPSTARTER</h1>
                    </Link>
                </section>
                <section className="nav-greeting-container">
                    <GreetingContainer />
                </section>
            </nav>
        </div>
    )
}

export default withRouter(Nav)