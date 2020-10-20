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
        let currentPage;
        let kids = document.getElementById('pages').children
        let array = Array.from(kids)
        array.shift()
        array.pop()
        if (li.id === 'left-arrow') {
            if (this.state.currentPage === 1) {
                currentPage = 1
            }
            else{
                currentPage = (this.state.currentPage) - 1
            }
        }
        else if (li.id === 'right-arrow') {
            if (this.state.currentPage === array.length) {
                currentPage = array.length
            }
            else {
                currentPage = (this.state.currentPage) + 1
            }
        }
        else{
            currentPage = li.id;
        }

        // currentPage === 1 ? kids[0].className="grey-arrow" : currentPage === array.length ? 
        // kids[kids.length - 1].className="grey-arrow" : null;

        for (let i=0; i<array.length;i++) {
            array[i].className = "unhighlighted-numbering"
        }
        array[currentPage - 1].className = "highlighted-numbering"
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
                <div className="home-flex">
                    <section className="featured-container">
                        <Featured project={project}/>
                    </section>
                    <section className="recommended-container">
                        <div className="recommended-section">
                            <div className="recommendations-title">Recommended For You</div>
                            {result}
                        </div>
                        <ul onClick={this.changeProject} className="recommendations-numbering" id="pages">
                            <li className={
                                this.state.currentPage === 1 ? "grey-arrow" : "blue-arrow"
                            }>
                                <i className="fas fa-chevron-left" id="left-arrow"></i>
                            </li>
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
                            <li className={
                                this.state.currentPage === this.props.array.length + 1 ? "grey-arrow" : "blue-arrow"
                            }>
                                <i className="fas fa-chevron-right" id="right-arrow"></i>
                            </li>
                        </ul>
                    </section>

                </div>
            </div>
        )
    }
}

export default ProjectIndex;