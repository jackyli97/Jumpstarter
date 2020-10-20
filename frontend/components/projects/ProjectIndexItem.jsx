import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let percent = ((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100
        return (
            <div className="project-preview-items">
                <Link to={`/projects/${this.props.project.id}`}>
                    <img src={this.props.project.photo_url} className="recommended-project-img" alt=""/>
                </Link>
                <ul>
                    <li>
                        <Link to={`/projects/${this.props.project.id}`}>
                            {this.props.project.title}
                        </Link>
                    </li>
                    <li>{percent} % funded</li>
                    <li>
                        <Link to={`/projects/${this.props.project.id}`}>
                            By {this.props.project.author_name}
                        </Link>
                    </li>
                </ul>
            </div>
        )
}
}

export default ProjectIndexItem