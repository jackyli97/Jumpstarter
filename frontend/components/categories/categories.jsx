import React from 'react';
import { Link } from 'react-router-dom';

class Categories extends React.Component {

    constructor(props) {
        super(props)
    }

    render(){
        return(
            <>
                <li>
                    <Link to={{pathname:"/projects/category/arts", state: "Arts" }}>
                        Arts
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/comics", state: "Comics & Illustration" }}>
                        Comics & Illustration
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/design", state: "Design & Tech"}}>
                        Design & Tech
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/film", state: "Film"  }}>
                        Film
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/food", state: "Food & Craft"  }}>
                        Food & Craft
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/games", state:  "Games"  }}>
                        Games
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/music", state:  "Music"  }}>
                        Music
                    </Link>
                </li>
                <li>
                    <Link to={{ pathname: "/projects/category/publishing", state:  "Publishing"  }}>
                        Publishing
                    </Link>
                </li>
            </>
        )
    }

}

export default Categories;