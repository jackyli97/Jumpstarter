import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ExploreShow from './projects/ExploreShow'

class Greeting extends React.Component{
    constructor(props) {
        super(props)
        this.state = ({clicked: false, noResults: false})
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    handleSearch(e) {
        e.preventDefault();
        if (e.key === 'Enter') {
            let filteredProjectsList = this.props.projects.filter((project) => (project.title.toLowerCase().includes(this.state.query.toLowerCase())));
            if (filteredProjectsList.length === 0){
                let filteredProjectsList = this.props.projects.filter((project) => (project.category.category_name.toLowerCase().includes(this.state.query.toLowerCase())));
            }
            if (filteredProjectsList.length === 0) {
                filteredProjectsList = this.props.projects
                this.setState({noResults: true})
            }
            return <ExploreShow projects={filteredProjectsList} fetchProjects={this.props.fetchProjects} query={this.state.query} noResults={this.state.noResults}/>
        }
    }

    handleChange(type) {
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    render() {
        if (!this.props.path && !this.props.authPath) {
            this.props.history.push('./')
        }
        const icon = 'Search ' + '\uD83D\uDD0D'
        const content = this.props.currentUser ? (
            <div className="right-nav">
                <span onClick={()=>this.setState({clicked: true})}>Search <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </span>
                <h1>Welcome {this.props.currentUser.name}!</h1>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        ) : (
            <div className="greeting-links">
                <span onClick={() => this.setState({ clicked: true })}>Search <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </span>
                {this.props.authPath ? null : <Link to="/login" >Log In</Link>}
            </div>
            );
        const searchBar = <div className="search-container" onKeyDown={this.handleSearch}>
            <input className="search-bar" type="text" placeholder="Search for projects or categories" value={this.state.query} onChange={this.handleChange("query")} />
        </div>
        return (
            <div>
                <h1>
                    {this.state.clicked ? searchBar : content}
                </h1>
            </div>
        )
    }
    }

export default Greeting