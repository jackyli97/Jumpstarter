import React from 'react';

class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let percent = ((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100
        return (
            <div>
                <img src={this.props.project.photo_url} className="project-img" alt=""/>
                <li><a href="#">{this.props.project.title}</a></li>
                <li>{percent} % funded</li>
                <li>By {this.props.project.author_name}</li>
            </div>
        )
}
}

export default ProjectIndexItem