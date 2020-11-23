import { connect } from 'react-redux';
import ProjectIndex from '../projects/ProjectIndex';
import { fetchProjectsByCategory } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/categories_actions';

const mapStateToProps = (state, ownProps) => {
    const projects = Object.values(state.entities.projects)
    const categories = Object.values(state.entities.categories)
    let rand = Math.random()
    let idx = Math.floor(rand * (projects.length))
    let array = [];
    for (let i = 1; i <= Math.ceil(projects.length / 3); i++) {
        array.push(i)
    }
    return {
        projects: projects,
        project: projects[idx],
        array: array,
        categories: categories,
        type: "category",
        arts: [
            "Discover the artists and organizations using Kickstarter to realize ambitious projects in visual art and performance.",
            [["Art", 0], ["Dance", 3], ["Photography", 11], ["Theater", 14]], "Arts"
        ],
        comics:
        [
            "Explore fantastical worlds and original characters from Kickstarter’s community of comics creators and illustrators."
                , [["Comics", 1]], "Comics"
        ],
        design:
        [
            "From fine design to innovative tech, discover projects from creators working to build a more beautiful future.",
                [["Design", 4], ["Technology", 13]], "Design & Tech"
        ],
        film:
        [
            "Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen."
            , [["Film",6]], "Film"
        ],
        food:
        [
            "See how artisans and entrepreneurs are using Kickstarter to break new ground in food, fashion, and crafts.",
                [["Crafts", 2], ["Food", 7], ["Fashion", 5]], "Food & Craft"
        ],
        games:
        [
            "From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.",
                [["Games", 8]], "Games"
        ],
        music:
        [
            "Discover new albums, performances, and independent venues from creators using Kickstarter to shape the future of sound.",
                [["Music", 10]], "Music"
        ],
        publishing:
        [
            "Explore how writers and publishers are using Kickstarter to bring new literature, periodicals, podcasts, and more to life.",
                [["Publishing", 12], ["Journalism", 9]], "Publishing"
        ]
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProjects: () => dispatch(fetchProjectsByCategory(ownProps.match.params.categoryName)),
        fetchCategories: () => dispatch(fetchCategories())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex)