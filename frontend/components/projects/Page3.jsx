import React from 'react';
import Page3_5 from './Page3_5'
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
            photoValue: this.props.project.photoValue,
            fundingGoal: this.props.project.fundingGoal,
            page: 3,
            category: this.props.project.category,
            amountPledged: 0,
            campaign: this.props.project.campaign,
            description: this.props.project.description,
            risks_and_challenges: this.props.project.risks_and_challenges,
            rewardTitle: this.props.project.rewardTitle,
            rewardDes: this.props.project.rewardDes,
            rewardEst: this.props.project.rewardEst,
            rewardShip: this.props.project.rewardShip,
            rewardCost: this.props.project.rewardCost
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleKey = this.handleKey.bind(this)
    }

    handleClick(e) {
        this.setState({ page: 2 })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ page: 35 })
    }

    handleKey(e) {
        this.setState({ fundingGoal: e.currentTarget.value })
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }


    render() {
        
        let display = (this.state.page === 2) ?  <Page2 pageTwoProps={this.state} path={this.props.path} createProject={this.props.createProject} author={this.props.author} /> :
            (this.state.page === 35) ? <Page3_5 project={this.state} createReward={this.props.createReward} author={this.props.author} path={this.props.path} createProject={this.props.createProject} /> : (
            <div className="create-section">
                <nav className="create-nav">3 of 5</nav>
                <form className="basics-form" onSubmit={this.handleSubmit}>
                    <div className="basics-fields">
                        <div className="create-main">
                            <h1>Let's talk about money</h1>
                            <br />
                            <p className="main-p">Plan and manage your project's finances.</p>
                            <label>Funding Goal
                            <div className="create-funding">
                                <div className="create-dollar-sign">USD$</div>
                                <input type="number" value={this.state.fundingGoal} required={true} min="1" step="any" onKeyUp={this.handleKey} onInput={this.handleInput("fundingGoal")}/>
                            </div>
                            </label>
                        </div>
                        <div className="create-footer-section">
                            <span onClick={this.handleClick}>Basics</span>
                            <button>Next: Rewards</button>
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