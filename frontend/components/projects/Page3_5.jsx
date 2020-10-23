import React from 'react';
import { Link } from 'react-router-dom';
import Page4 from './Page4'
import Page3 from './Page3'



class Page35 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.project.title,
            endDate: this.props.project.endDate,
            location: this.props.project.location,
            photoFile: this.props.project.photoFile,
            photoUrl: this.props.project.photoUrl,
            photoValue: this.props.project.photoValue,
            fundingGoal: this.props.project.fundingGoal,
            page: 35,
            category: this.props.project.category,
            amountPledged: 0,
            campaign: this.props.project.campaign,
            description: this.props.project.description,
            risks_and_challenges: this.props.project.risks_and_challenges,
            
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({ page: 3 })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ page: 4 })
    }

    handleInput(e) {
        this.setState({ fundingGoal: e.currentTarget.value })
    }

    render() {

        let display = (this.state.page === 3) ? <Page3 pageThreeProps={this.state} path={this.props.path} createProject={this.props.createProject} author={this.props.author} /> :
            (this.state.page === 4) ? <Page4 project={this.state} author={this.props.author} path={this.props.path} createProject={this.props.createProject} /> : (
                <div className="create-section">
                    <nav className="create-nav">3 of 4</nav>
                    <form className="basics-form" onSubmit={this.handleSubmit}>
                        <div className="basics-fields">
                            <div className="create-main">
                                <h1>Let's talk about money</h1>
                                <br />
                                <p className="main-p">Plan and manage your project's finances.</p>
                                <label>Funding Goal (USD)
                            <div className="create-funding">
                                        <div className="create-dollar-sign">$</div>
                                        <input type="number" value={this.state.fundingGoal} required={true} min="0" step="any" onKeyUp={this.handleInput} onInput={this.handleInput} />
                                    </div>
                                </label>
                            </div>
                            <div className="create-footer-section">
                                <span onClick={this.handleClick}>Basics</span>
                                <button>Next: Story</button>
                            </div>
                        </div>
                    </form>

                </div>
            )
        return (
            <div className="create-section">
                {display}
            </div>
        )
    }
}

export default Page3