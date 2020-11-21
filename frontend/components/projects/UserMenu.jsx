import React from 'react';


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
                        </div>
                    </div>
                </li>
            })}
        </>
        return (
            <div className="user-menu">
                <h1>Created projects</h1>
                <p>A place to keep track of all your created projects</p>
                <h2>Started</h2>
                <ul>
                    {usersProjs}
                </ul>
            </div>
        )
    }
}

export default UserMenu