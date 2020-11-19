import React from 'react';
import ProjectIndexItem from './ProjectIndexItem';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

class Explore extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects();
        window.scrollTo(0, 0);
    }

    render() {
        let result = this.props.projects.map((project, idx) => {
            return <ProjectIndexItem key={idx} project={project} type={"explore"} />
        })
        let numProjects = this.props.projects.length;
        let noResults = 
        <>
            <span>
                <FontAwesomeIcon icon={faExclamationCircle} className="error-icon" /> 
                    We can't find projects that match your search
            </span>
                <span>Check out a collection of popular and recommended options below</span>
        </>
        return (
            <div className="explore-container">
                {/* <div className="show-me-section">
                    <span>Show me</span>
                    <span>{this.props.query ? this.props.query : this.props.category}</span>
                    <span>projects</span>
                </div>
                <div className="no-results-section">
                    {this.props.noResults ? noResults : ""}
                </div> */}
                <div className="explore-body">
                    <h3><span>Explore </span><span>{numProjects} projects</span></h3>
                    <div className="explore-project-items">
                        {result}
                    </div>
                </div>

            </div>
        )
    }
}

export default Explore;