import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom'


class UserMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({projects: this.props.usersProjects})
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(projectId) {
        this.props.deleteProject(projectId)
            .then(action => {
                this.setState({projects: this.state.projects.filter(project=>{project.id !== projectId})})
            })
    }

    render() {
        let usersProjs = <>
            {this.state.projects.map((project, idx) => {
                return <li key={idx}>
                    <div className="project-card">
                        <Link to={`/projects/${project.id}`}>
                            <img src={project.photo_url} className="user-menu-project-img" />
                        </Link>
                        <div className="project-cell">
                            <Link to={`/projects/${project.id}`}>
                                <span className="user-project-title">{project.title}</span>
                            </Link>
                            <div className="user-project-actions">
                                <Link to={`/${this.props.userId}/projects/edit/${project.id}`}>
                                    <span className="project-edit">Continue editing</span>
                                </Link>
                                <span className="project-delete" onClick={()=>{this.handleDelete(project.id)}}>Delete project</span>
                            </div>
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