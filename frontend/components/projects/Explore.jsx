import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class Explore extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="explore-container">
                <div className="explore-collections">
                    <div className="explore-section-header">
                        <h1>Collections</h1>
                        <FontAwesomeIcon icon={faTimes} onClick={()=>this.props.history.push('/')} className="explore-close"/>
                    </div>
                    <ul>
                        <li>
                            <Link to={{ pathname: "/projects/explore/everything", state: "Everything" }}>
                                Everything
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="explore-sections">
                    <div className="explore-section-header">
                        <h1>Sections</h1>
                        <FontAwesomeIcon icon={faTimes} onClick={() => this.props.history.push('/')} className="explore-close"/>
                    </div>
                    <ul>
                        <li>
                            <Link to={{ pathname: "/projects/category/arts", state: "Arts" }}>
                                Arts
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/comics", state: "Comics & Illustration" }}>
                                Comics
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/design", state: "Design & Tech" }}>
                                Design & Tech
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/film", state: "Film" }}>
                                Film
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/food", state: "Food & Craft" }}>
                                Food & Craft
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/games", state: "Games" }}>
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/music", state: "Music" }}>
                                Music
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/category/publishing", state: "Publishing" }}>
                                Publishing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="explore-categories">
                    <div className="explore-section-header">
                        <h1>Categories</h1>
                        <FontAwesomeIcon icon={faTimes} onClick={() => this.props.history.push('/')} className="explore-close"/>
                    </div>
                    <ul>
                        <li>
                            <Link to={{ pathname: "/projects/explore/1", state: "Art" }}>
                                Arts
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/2", state: "Comics" }}>
                                Comics
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/3", state: "Crafts" }}>
                                Crafts
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/4", state: "Dance" }}>
                                Dance
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/5", state: "Desgin" }}>
                                Design
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/6", state: "Fashion" }}>
                                Fashion
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/7", state: "Film" }}>
                                Film
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/8", state: "Food" }}>
                                Food
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/9", state: "Games" }}>
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/10", state: "Journalism" }}>
                                Journalism
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/11", state: "Music" }}>
                                Music
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/12", state: "Photography" }}>
                                Photography
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/13", state: "Publishing" }}>
                                Publishing
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/14", state: "Technology" }}>
                                Technology
                            </Link>
                        </li>
                        <li>
                            <Link to={{ pathname: "/projects/explore/15", state: "Theater" }}>
                                Theater
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Explore;