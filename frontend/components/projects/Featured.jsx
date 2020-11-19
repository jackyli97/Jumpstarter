import React from 'react';
import { Link } from 'react-router-dom';

class Featured extends React.Component {
    render() {
        let projectCheck;
        (this.props.project) ? projectCheck = this.props.project : projectCheck = null;
        return (
            !projectCheck ? <div></div> : (
            <div className="featured-section">
                <div className="featured-title">Featured Project</div>
                <div className="featured-project-props" >  
                <Link to={`/projects/${this.props.project.id}`}>
                    <img src={this.props.project.photo_url} className="project-img"/>
                    <li>
                        {this.props.project.title}
                    </li>
                    <li>
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