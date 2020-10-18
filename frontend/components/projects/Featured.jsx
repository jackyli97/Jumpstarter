import React from 'react';

class Featured extends React.Component {
    constructor(props) {
        super(props)
        this.state = {currentProject: 0}
        this.changeProject = this.changeProject.bind(this)
    }


    render() {
        let projectCheck;
        (this.props.project) ? projectCheck = this.props.project : projectCheck = null;
        return (
            !projectCheck ? <div>Fetching Info</div> : (
            <div className="featured-container">
                <h4 className="featured-title">FEATURED PROJECT</h4>
                <img src={this.props.project.photo_url} className="project-img"/>
                <li><a href="#">{this.props.project.title}</a></li>
                <li>{this.props.project.description}</li>
                <li>By {this.props.project.author_name}</li>
            </div>
            )
        )
    }
}

export default Featured