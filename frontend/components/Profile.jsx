import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let backedProjs = <>
            {this.props.backedProjects.map((backing,idx)=>{
                return <Link key={idx} to={`/projects/${backing.project.id}`} onClick={this.props.closeSubMenu}>
                    <li>
                        <img src={backing.project.photo_url} className="profile-project-img" />
                        <span>{backing.project.title}</span>
                    </li>
                </Link>
            })}
        </>
        let usersProjs = <>
            {this.props.usersProjects.map((project,idx)=>{
                return <Link key={idx} to={`/projects/${project.id}`} onClick={this.props.closeSubMenu}>
                    <li>
                        <img src={project.photo_url} className="profile-project-img" />
                        <span>{project.title}</span>
                    </li>
                </Link>
            })}
        </>
        return (
            <div id="profile-container" className="menu-close" onMouseLeave={this.props.closeSubMenu}>
                <div className="profile-body">
                    <div className="hello-user">
                        <span className="profile-headers">
                        Hello {this.props.username}
                        </span>
                    </div>
                    <div className="backed-projects">
                        <span className="profile-headers">
                        Backed Projects
                        </span>
                        <ul>
                            {backedProjs}
                        </ul>
                    </div>
                    <div className="created-projects">
                        <span className="profile-headers">
                        Created Projects
                        </span>
                        <ul>
                            {usersProjs}
                        </ul>
                        <Link to='/projects/start' className="profile-new-project-container" onClick={this.props.closeSubMenu}>
                            <div to={'/projects/start'}>
                                <FontAwesomeIcon icon={faPlus} className="add-icon"/>
                            </div>
                            <span>New</span>
                        </Link>
                        <Link to={`profile/projects/${this.props.userId}`} className="profile-view-all-container" onClick={this.props.closeSubMenu}>
                            View all
                        </Link>
                    </div>
                </div>
                <div className="profile-logout" onClick={this.props.logout}>
                    Log out
                </div>
            </div>
        )
    }
}

export default Profile