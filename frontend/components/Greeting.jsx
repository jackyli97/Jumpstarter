import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Profile from './Profile'

class Greeting extends React.Component{
    constructor(props) {
        super(props)
        this.state = ({clicked: false, searched: false, noResults: false, query: ""})
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.openSubMenu = this.openSubMenu.bind(this);
        this.closeSubMenu = this.closeSubMenu.bind(this);
    }

    openSubMenu(){
        document.getElementById('profile-container').className= "menu-open";
    }

    closeSubMenu(){
        document.getElementById('profile-container').className = "menu-close";
    }

    handleSearch(e) {
        if (e.key === 'Enter') {
            this.setState({ clicked: false, query: "" })
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
                <button className="profile-button" onMouseOver={this.openSubMenu}>
                    <img src={window.avatar} alt="avatar" className="avatar-img"/>
                    <Profile userId={this.props.userId} logout={this.props.logout} usersProjects={this.props.usersProjects} closeSubMenu={this.closeSubMenu} username={this.props.username} backedProjects={this.props.backedProjects}/>
                </button>
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
            <FontAwesomeIcon icon={faTimes} onClick={() => this.setState({ clicked: false })} className="search-close" />
        </div>
        return (
            <div>
                <div>
                    {this.state.clicked ? searchBar : content}
                </div>

            </div>
        )
    }
    }

export default Greeting