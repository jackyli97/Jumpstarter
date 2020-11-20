import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import ExploreShow from './projects/ExploreShow'

class Greeting extends React.Component{
    constructor(props) {
        super(props)
        this.state = ({clicked: false, searched: false, noResults: false, query: ""})
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects();
    }

    handleSearch(e) {
        if (e.key === 'Enter') {
            this.setState({ clicked: false })
            this.props.history.push(`/projects/search/${this.state.query}`)
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
        const content = this.props.currentUser ? (
            <div className="right-nav">
                <span className="search-section" onClick={()=>this.setState({clicked: true})}>Search  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </span>
                <h1>Welcome {this.props.currentUser.name}!</h1>
                <button onClick={this.props.logout}>Logout</button>
            </div>
        ) : (
            <div className="greeting-links">
                <span className="search-section" onClick={() => this.setState({ clicked: true })}>Search <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </span>
                {this.props.authPath ? null : <Link to="/login" >Log In</Link>}
            </div>
            );
        const searchBar = <div className="search-container">
            <input type="text"
            className="search-bar" 
            onKeyDown={this.handleSearch} 
            placeholder="Search for projects or categories"
            value={this.state.query}
            onChange={this.handleChange("query")} />
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