import React from 'react';

class ProjectShow extends React.Component {
    constructor(props) {
        // debugger
        super(props)
    }

    componentDidMount() {
        // debugger
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render() {
        // debugger
        let projectCheck;
        (this.props.project) ? projectCheck = this.props.project : projectCheck = null;
        return (
            !projectCheck ? <div></div> : (
            <div>
                <div className="main-show-container">
                    <div className="big-show-text">
                        <h1>{this.props.project.title}</h1>
                        <p>{this.props.project.campaign}</p>
                    </div>
                    <div className="misc-show">
                        <section className="show-img-section">
                            <img src={this.props.project.photo_url} className="project-img" />
                        </section>
                        <section className="show-info-section">
                            <ul>
                                <li>
                                    ${this.props.project.amount_pledged}
                                    <br/>
                                    pledged of ${this.props.project.funding_goal} goal
                                </li>
                                <li>
                                    ${this.props.project.amount_pledged}
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            )
        )
    }
}

export default ProjectShow