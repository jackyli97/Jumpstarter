import React from 'react';
import ProjectIndexItem from './ProjectIndexItem';
import Featured from './Featured'
import Categories from '../categories/categories'
import { Link } from 'react-router-dom'


class ProjectIndex extends React.Component {

    constructor(props) {
        super(props)
        this.state = { currentPage: 1, type: this.props.type,
        arts: this.props.arts,
        comics: this.props.comics,
        design: this.props.design,
        film: this.props.film,
        food: this.props.film,
        games: this.props.games,
        music: this.props.music,
        publishing: this.props.publishing
        }
        this.changeProject = this.changeProject.bind(this)
    }

    componentDidMount() {
        this.props.fetchProjects();
        this.props.fetchCategories();
    }

    componentDidUpdate(prevProps) {
        if ((this.props.match.params.categoryName) && prevProps.match.params.categoryName !== this.props.match.params.categoryName) {
            this.props.fetchProjects();
            this.props.fetchCategories();
        }
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
            if (parseInt(currentPage) === 1){
                document.getElementById('left-arrow').parentElement.className="grey-arrow";
                document.getElementById('right-arrow').parentElement.className = "blue-arrow";
            }
            else if (parseInt(currentPage) === array.length){
                document.getElementById('right-arrow').parentElement.className = "grey-arrow";
                document.getElementById('left-arrow').parentElement.className = "blue-arrow";
            }
        }

        for (let i=0; i<array.length;i++) {
            array[i].className = "unhighlighted-numbering"
        }
        array[currentPage - 1].className = "highlighted-numbering"
        this.setState({ currentPage });
    }

    render() {
        if (this.props.projects.length === 0 || (this.props.categories).length === 0){
            return null;
        }
        let projects = this.props.projects;
        let categories = this.props.categories;

        let filtered = projects.slice(((this.state.currentPage)-1)*3, (this.state.currentPage*3))
        let result = filtered.map((project, idx) => {
            return <ProjectIndexItem key={idx} project={project} type={"main"} />
        })
        let project = this.props.project;
        let categoryName = this.props.match.params.categoryName;
        
        let categoryWelcome = this.state.type === "main" ? <div></div> :
        <div className="category-welcome">
                <h3>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h3>
                <p>{this.state[categoryName][0]}</p>
                <div className="explore-categories-section">
                    {this.state[categoryName][1].map((cat, idx)=> {
                        return (
                            <Link to={`/projects/explore/${cat[1]}`} key={idx}>
                            Explore {cat[0]}
                            </Link>
                        )
                    }
                    )}
                </div>
        </div>
        return (
            <div className="home-page">
                <div className="categories-nav-container">
                    <ul className="categories-list">
                        <Categories categories={categories} projects={this.props.projects} project={this.props.project} array={this.props.array} fetchProjects={this.props.fetchProjects} fetchCategories={this.props.fetchCategories}/>
                    </ul>
                </div>
                {categoryWelcome}
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
                                } disabled={this.state.currentPage === 1}>
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
                                    this.state.currentPage === this.props.array.length  ? "grey-arrow" : "blue-arrow"
                                } disabled={this.state.currentPage === this.props.array.length}>
                                    <i className="fas fa-chevron-right" id="right-arrow"></i>
                                </li>
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectIndex;