import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {
    render() {
        let projectCheck;
        (this.props.project) ? projectCheck = this.props.project : projectCheck = null;
        let percent = ((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100
        return (
            !projectCheck ? <div></div> : (
            <div className="featured-section">
                <div className="featured-title">Featured Project</div>
                <div className="featured-project-props" >  
                <Link to={`/projects/${this.props.project.id}`}>
                    <img src={this.props.project.photo_url} className="project-img"/>
                    <div className="featured-progress-bar" style={{ width: percent }}></div>
                    <li>
                        {this.props.project.title}
                    </li>
                    <li className="project-description">
                        {this.props.project.description}
                    </li>
                    <li>By <span>
                            {this.props.project.author.name}
                        </span> 
                    </li>
                </Link>
                </div>
            </div>
            )
        )
    }
}

export default Featured