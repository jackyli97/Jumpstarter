import React from 'react';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {navPage: "campaign", article: "story"}
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    handleClick(page) {
        return (e) => {
            this.setState({navPage: page})
        }
    }

    handleClickArticle(article) {
        return (e) => {
            this.setState({ navPage: page })
        }
    }

    render() {
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
                <h3>Support</h3>
                <div className="support-container">
                    <label>Pledge without a reward</label>
                </div>
                <div className="support-container">
                    <label>Pledge $20 or more</label>
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
        let daysDisplay = !daysLeft ? null : daysLeft > "0" ? 0 : daysLeft.toString();
        return (
            !projectCheck ? <div></div> : (
            <div>
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
                                                142
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
                                    <button className="back-button">Back this project</button>
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