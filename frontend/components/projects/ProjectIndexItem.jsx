import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.project){
            return null;
        }
        let percent = ((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100;
        if (percent > 100) {
            percent = 100
        }
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
                        <Link to={`/projects/${this.props.project.id}`} className="project-preview-title">
                            {this.props.project.title}
                        </Link>
                    </li>
                    <li>{percent} % funded</li>
                    <li>
                        <Link to={`/projects/${this.props.project.id}`}>
                            By <span className="by-author">{this.props.project.author.name}</span>
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
                    <li className="explore-show-title">
                    <Link to={`/projects/${this.props.project.id}`}>
                        {this.props.project.title}
                    </Link>
                    </li>

                    <li className="explore-show-description">
                    <Link to={`/projects/${this.props.project.id}`}>
                        {this.props.project.campaign.length > 110 ? this.props.project.campaign.slice(0,110) + "..." : this.props.project.campaign}
                    </Link>
                    </li>
                    <li>
                        By {this.props.project.author.name}
                    </li>
                    <li className="explore-progress-bar-container">
                    <div className="explore-progress-bar" style={{ width: `calc(1% * ${percent})`}}></div>
                    </li>
                    <li>${this.props.project.amount_pledged} pledged</li>
                    <li>{percent} % funded</li>
                    <li>{daysDisplay} days to go</li>
                    <li className="author-and-location">
                        <span>{this.props.project.category.category_name}</span>
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