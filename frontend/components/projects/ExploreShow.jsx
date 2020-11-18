import React from 'react';
import ProjectIndexItem from './ProjectIndexItem';
import { Link } from 'react-router-dom'

class Explore extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        let result = this.props.projects.map((project, idx) => {
            return <ProjectIndexItem key={idx} project={project} type={"explore"} />
        })
        let numProjects = this.props.projects.length
        return (
            <div className="explore-container">
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