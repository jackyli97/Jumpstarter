import React from 'react';
import ProjectIndexItem from './ProjectIndexItem';
import Featured from './Featured'
// import { fetchProjects } from '../../util/project_util';

class ProjectIndex extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        let projects = this.props.projects
        let result = projects.map((project, idx) => {
            return <ProjectIndexItem key={idx} project={project} />
        })
        let project = this.props.project
        return (
            <div className="home-body-container">
                <section className="featured-container">
                    <Featured project={project}/>
                </section>
                <section className="recommended-container">
                    <ul>
                        <h4 className="recommendations-title">RECOMMENDED FOR YOU</h4>
                        {result}
                    </ul>
                </section>
            </div>
        )
    }
}

export default ProjectIndex;