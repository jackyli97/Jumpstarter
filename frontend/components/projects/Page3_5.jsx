import React from 'react';
import { Link } from 'react-router-dom';
import Page4 from './Page4'
import Page3 from './Page3'

class Page3_5 extends React.Component {
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
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleClick(e) {
        this.setState({ page: 3 })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ page: 4 })
    }

    handleSelect(e) {
        e.preventDefault();
        this.setState({rewardShip: e.currentTarget.value})
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value })
        }
    }

    handleKey(e) {
        this.setState({ rewardCost: e.currentTarget.value })
    }

    render() {

        let display = (this.state.page === 3) ? <Page3 project={this.state} path={this.props.path} createProject={this.props.createProject} author={this.props.author} /> :
            (this.state.page === 4) ? <Page4 project={this.state} createReward={this.props.createReward} author={this.props.author} path={this.props.path} createProject={this.props.createProject} /> : (
                <div className="create-section">
                    <nav className="create-nav">4 of 5</nav>
                    <form className="basics-form" onSubmit={this.handleSubmit}>
                        <div className="basics-fields">
                            <div className="create-main">
                                <h1>Add your rewards</h1>
                                <br />
                                <p className="main-p">Offer simple, meaningful ways to bring backers closer to your project and celebrate it coming to life.</p>
                                <p className="rewards-message">Or if you're not ready yet, click 'Next', you can always add rewards later.</p>
                                <label>Title
                            <       div className="create-title">
                                        <input type="text" value={this.state.rewardTitle} onChange={this.handleInput("rewardTitle")} placeholder="Signed limited-edition" value={this.state.rewardTitle} />
                                    </div>
                                </label>
                                <label>Amount
                                    <div className="create-funding">
                                        <div className="create-dollar-sign">USD$</div>
                                        <input type="number" value={this.state.rewardCost} min="1" step="any" onKeyUp={this.handleKey} onInput={this.handleInput("rewardCost")} />
                                    </div>
                                </label>
                                <label>Description
                                    <div className="create-description">
                                        <textarea onChange={this.handleInput("rewardDes")} 
                                            placeholder="Get an early copy - hot off the presses!" value={this.state.rewardDes} />
                                    </div>
                                </label>
                                <label>Campaign End Date
                                    <p>Give yourself plenty of time. It's better to deliver to backers ahead of schedule than behind.</p>
                                    <div className="create-duration">
                                        <input type="date"
                                            value={this.state.rewardEst} 
                                            min={this.state.rewardEst} max="2023-12-31" onChange={this.handleInput("rewardEst")} />
                                    </div>
                                </label>
                                <label>Shipping
                                    <select className="shipping" onChange={this.handleSelect}>
                                        <option value="" selected={this.state.rewardShip ? false : true} disabled={true}>Select an option</option>
                                        <option value="No shipping" selected={this.state.rewardShip === "No shipping" ? true : false}>No shipping</option>
                                        <option value="Only certain countries" selected={this.state.rewardShip === "Only certain countries" ? true : false}>Only certain countries</option>
                                        <option value="Anywhere in the world" selected={this.state.rewardShip === "Anywhere in the world" ? true : false}>Anywhere in the world</option>
                                    </select>
                                </label>
                            </div>
                            <div className="create-footer-section">
                                <span onClick={this.handleClick}>Funding</span>
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

export default Page3_5