import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let percent = ((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100
        let daysLeft = (date) => {
            var today = new Date();
            var date_to_reply = new Date(date);
            var timeinmilisec = date_to_reply.getTime() - today.getTime();
            return (Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
        }
        let daysDisplay = daysLeft(this.props.project.end_date) < 0 ? "0" : daysLeft(this.props.project.end_date).toString();

        let display = this.props.type === "main" ?
            <div className="project-preview-items">
                <Link to={`/projects/${this.props.project.id}`}>
                    <img src={this.props.project.photo_url} className="recommended-project-img" alt="" />
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
                            By {this.props.project.author.name}
                        </Link>
                    </li>
                </ul>
            </div> :
                <ul>
                    <li>
                        <Link to={`/projects/${this.props.project.id}`}>
                            <img src={this.props.project.photo_url} alt="" className="explore-project-image"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={`/projects/${this.props.project.id}`} className="explore-show-title">
                            {this.props.project.title}
                        </Link>
                    </li>
                    <li className="explore-show-description">
                        {this.props.project.description}
                    </li>
                    <li>
                        By {this.props.project.author.name}
                    </li>
                    <li className="explore-progress-bar-container">
                        <div className="explore-progress-bar" style={{ width: percent }}></div>
                    </li>
                    <li>${this.props.project.amount_pledged} pledged</li>
                    <li>{percent} % funded</li>
                    <li>{daysDisplay} days to go</li>
                    <li className="author-and-location">
                        <span>{this.props.project.author.name}</span>
                        <span>{this.props.project.location}</span>
                    </li>
                </ul>
        return (
            <>
            {display}
            </>
        )
}
}

export default ProjectIndexItem