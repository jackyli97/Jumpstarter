import React from 'react';
import { Link } from 'react-router-dom';

class Categories extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        let arts = [this.props.categories[1], this.props.categories[4], this.props.categories[12], this.props.categories[15]];
        let comicsAndIllustration = [this.props.categories[2]];
        let designAndTech = [this.props.categories[5], this.props.categories[14]];
        let film = [this.props.categories[7]];
        let foodAndCraft = [this.props.categories[3], this.props.categories[8], this.props.categories[6]]
        let games = [this.props.categories[9]];
        let music = [this.props.categories[11]];
        let publishing = [this.props.categories[13], this.props.categories[10]];
        return(
            <>
                <li>
                    <Link to={{pathname:"/projects/explore/arts", state: "Arts" }}>
                        Arts
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/comics", state: "Comics & Illustration" }}>
                        Comics & Illustration
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/design", state: "Design & Tech"}}>
                        Design & Tech
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/film", state: "Film"  }}>
                        Film
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/food", state: "Food & Craft"  }}>
                        Food & Craft
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/games", state:  "Games"  }}>
                        Games
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/music", state:  "Music"  }}>
                        Music
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/explore/publishing", state:  "Publishing"  }}>
                        Publishing
                    </Link>
                </li>
            </>
        )
    }

}

export default Categories;