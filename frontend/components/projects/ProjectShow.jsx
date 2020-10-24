import React from 'react';
import Rewards from './Rewards';

class ProjectShow extends React.Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = {navPage: "campaign", article: "story", amountPledged: 0}
        this.handleClick = this.handleClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleClickArticle = this.handleClickArticle.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
        let element = document.getElementById('success')
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    }

    handleClickScroll(e) {
        e.preventDefault();
        let element = document.getElementById('support')
        element.scrollIntoView({
            behavior: "smooth"
        });
    }

    handleClick(page) {
        return (e) => {
            this.setState({navPage: page})
        }
    }

    handleClickArticle(article) {
        return (e) => {
            this.setState({ article })
        }
    }

    handleDelete(e) {
        this.props.deleteProject(this.props.project.id)
            .then(action => {
                return this.props.path.push(`/`)
            }) 
    }

    handleInput(e) {
        this.setState({ fundingGoal: e.currentTarget.value })
    }

    render() {
        debugger
        let success = this.props.currentUserBacked ? (
            <div className="success-container" id="success">
                <div className="success-box">
                    <div className="success-box-left">
                        <span>You're a backer!</span>
                        <span>You pledged ${this.props.backingAmt}.</span>
                    </div>
                    <div className="success-box-right">
                    </div>
                </div>
            </div>
        ) : <div></div>;
        let projectCheck;
        (this.props.project) ? projectCheck = this.props.project : projectCheck = null;
        let showBody = !projectCheck ? null : this.state.navPage === "campaign" ? (
        <div className="show-body-container">
            <article className="show-article-left">
                <span className={this.state.article === "story" ? "current-article-highlight" : null}
                onClick={this.handleClickArticle("story")}>STORY</span>
                <span className={this.state.article === "risks" ? "current-article-highlight" : null}
                    onClick={this.handleClickArticle("risks")}>RISKS</span>
            </article>
            <section className="show-section">
                <h3>Story</h3>
                <p>{this.props.project.description}</p>
                <h3>Risks and Challenges</h3>
                <p>{this.props.project.risks_and_challenges}</p>
            </section>
            <article className="show-article-right">
                <div className="creator-box">
                    <div className="creator-main-info">
                        <div className="creator-name">{this.props.project.author.name}</div>
                        <div className="creator-loc">{this.props.project.author.location}</div>
                    </div>
                    <div className="creator-biography">{this.props.project.author.biography}</div>
                </div>
                <h3>Support</h3>
                <div className="support-container" id="support">  
                    <ol>
                        <Rewards rewards={this.props.project.rewards} project={this.props.project} updateProject={this.props.updateProject} path={this.props.path} backers={this.props.project.num_backings} currentUser={this.props.currentUser} createBacking={this.props.createBacking}/>
                    </ol>
                </div>
                <div className="support-container">
                </div>
            </article>
        </div> ) : this.props.project.navPage === "faq" ? (
            <div className="show-body-container">
                <h3>Frequently Asked Questions</h3>
                {this.props.project.faq ? (
                <p>{this.props.project.faq}</p> ) :
                <p>Looks like there arent't any frequently asked questions yet</p>
                }
            </div>
        ) : <div className="show-body-container">
            <h3>Updates</h3>
            <p>{this.props.project.updates}</p>
        </div>
        let percent = !projectCheck ? null : (((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100) > 100 ? 100 : 
            ((this.props.project.amount_pledged / this.props.project.funding_goal).toFixed(2)) * 100;
        let daysLeft = !projectCheck ? null : (date) => {
            var today = new Date();
            var date_to_reply = new Date(date);
            var timeinmilisec = date_to_reply.getTime() - today.getTime();
            return (Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)));
        }
        let daysDisplay = !daysLeft ? null : daysLeft < 0 ? 0 : daysLeft(this.props.project.end_date).toString();
        let productButton = !projectCheck ? null : this.props.project.author.id === this.props.currentUser ? 
        <button className="destroy-button" onClick={this.handleDelete}>Destroy this project</button>

        : <button onClick={this.handleClickScroll} className="back-button">Back this project</button> ;
        return (
            !projectCheck ? <div></div> : (
            <div>
                {success}
                <div className="show-container">
                    <div className="show-bg-grey">
                        <div className="show-main">
                            <div className="big-show-text">
                                <div className="big-text-container">
                                    <h1>{this.props.project.title}</h1>
                                    <p>{this.props.project.campaign}</p>
                                </div>
                            </div>
                            <div className="misc-show">
                                <section className="show-img-section">
                                    <img src={this.props.project.photo_url} className="show-project-img" />
                                </section>
                                <section className="show-info-section">
                                    <div className="progress-bar-container">
                                        <div className="progress-bar" style={{width: percent}}></div>
                                    </div>
                                    <ul>
                                        <li>
                                            <span>
                                                ${this.props.project.amount_pledged}
                                            </span>
                                            <br/>
                                            <span>
                                                pledged of ${this.props.project.funding_goal} goal
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                {(this.props.project.num_backings)}
                                            </span>
                                            <br />
                                            <span>
                                                backers
                                            </span>
                                        </li>
                                            <li>
                                                <span>
                                                    {daysDisplay}
                                                </span>
                                                <br />
                                                <span>
                                                    days to go
                                                </span>
                                            </li>
                                    </ul>
                                    {productButton}
                                </section>
                            </div>
                        </div>

                    </div>
                    <div className="show-nav">
                        <span className={this.state.navPage === "campaign" ? "nav-bold" : null} onClick={this.handleClick("campaign")}>Campaign</span>
                        <span className={this.state.navPage === "faq" ? "nav-bold" : null} onClick={this.handleClick("faq")}>FAQ</span>
                        <span className={this.state.navPage === "updates" ? "nav-bold" : null} onClick={this.handleClick("updates")}>Updates</span>
                    </div>
                    <div>
                        {showBody}
                    </div>
                </div>
            </div>
            )
        )
    }
}

export default ProjectShow