import React from 'react';
import { Link } from 'react-router-dom';
import Page4 from './Page4'
import Page2 from './Page2'



class Page3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.project.title,
            endDate: this.props.project.endDate,
            location: this.props.project.location,
            photoFile: this.props.project.photoFile,
            photoUrl: this.props.project.photoUrl,
            page: 3,
            category: this.props.project.category,
            amountPledged: 0,
            campaign: this.props.project.campaign,
            description: this.props.project.description,
            risks_and_challenges: this.props.project.risks_and_challenges
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({ page: 2 })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ page: 4 })
    }

    handleInput(e) {
        this.setState({ fundingGoal: e.currentTarget.value })
    }

    render() {
        let display = (this.state.page === 2) ?  <Page2 pageTwoProps={this.state} path={this.props.path} createProject={this.props.createProject} author={this.props.author} /> :
         (this.state.page === 4) ? <Page4 project={this.state} author={this.props.author} path={this.props.path} createProject={this.props.createProject} /> : (
            <div className="create-section">
                <h1>Let's talk about money</h1>
                <br />
                <h4>Plan and manage your project's finances.</h4>

                <form className="basics-form" onSubmit={this.handleSubmit}>
                    <div className="basics-fields">
                        <div className="create-funding">
                            <label>Funding Goal
                                <input type="number" value="300" required={true} min="1" step="any" onKeyUp={this.handleInput} onInput={this.handleInput} placeholder="USD" />
                            </label>
                        </div>
                    </div>

                    <div className="create-footer-section">
                        <span onClick={this.handleClick}>Basics</span>
                        <button>Next: Story</button>
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