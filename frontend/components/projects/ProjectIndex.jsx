import React from 'react';
import ProjectIndexItem from './ProjectIndexItem';
import Featured from './Featured'

class ProjectIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = { currentPage: 1 }
        this.changeProject = this.changeProject.bind(this)
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    changeProject(e) {
        let li = e.target;
        let currentPage = li.id;
        let kids = document.getElementById('pages').children
        for (let i=0; i<kids.length;i++) {
            kids[i].className = "unhighlighted-numbering"
        }
        kids[currentPage - 1].className = "highlighted-numbering"
        this.setState({ currentPage });
    }

    render() {
        let projects = this.props.projects
        let filtered = projects.slice(((this.state.currentPage)-1)*3, (this.state.currentPage*3))
        let result = filtered.map((project, idx) => {
            return <ProjectIndexItem key={idx} project={project} />
        })
        let project = this.props.project
        return (
            <div className="home-body-container">
                <section className="featured-container">
                    <Featured project={project}/>
                </section>
                <section className="recommended-container">
                    <div>
                        <h4 className="recommendations-title">RECOMMENDED FOR YOU</h4>
                        {result}
                        <ul onClick={this.changeProject} className="recommendations-numbering" id="pages">
                            {
                            this.props.array.map((num) => {
                                return (
                                    <li key={num} className={
                                        this.state.currentPage === num ? "highlighted-numbering" : "unhighlighted-numbering"
                                    }>
                                        <span id={num}>{num}</span>
                                    </li>
                                )})
                            }
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

export default ProjectIndex;