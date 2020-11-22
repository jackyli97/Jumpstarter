import React from 'react';
import { Link } from 'react-router-dom'


class UserMenu extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let usersProjs = <>
            {this.props.usersProjects.map((project, idx) => {
                return <li key={idx}>
                    <div className="project-card">
                        <img src={project.photo_url} className="user-menu-project-img" />
                        <div className="project-cell">
                            <span>{project.title}</span>
                            <Link to={`/${this.props.userId}/projects/edit/${project.id}`}>
                                <span className="project-edit">Continue editing</span>
                            </Link>
                        </div>
                    </div>
                </li>
            })}
        </>
        return (
            <div className="user-menu-grey">
                <div className="user-menu-container">
                    <div className="user-menu-body">
                        <h1>Created projects</h1>
                        <p>A place to keep track of all your created projects</p>
                        <h2>Started</h2>
                        <ul>
                            {usersProjs}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserMenu