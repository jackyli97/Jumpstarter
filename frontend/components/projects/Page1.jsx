import React from 'react';
import Page2 from './Page2'


class Page1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {category: this.props.pageOneProps.category,
            page: 1,
            projId: this.props.pageOneProps.projId,
            type: this.props.pageOneProps.type,
            title: this.props.pageOneProps.title,
            existingPhoto: this.props.pageOneProps.existingPhoto,
            location: this.props.pageOneProps.location,
            endDate: this.props.pageOneProps.endDate,
            photoFile: this.props.pageOneProps.photoFile,
            photoUrl: this.props.pageOneProps.photoUrl,
            fundingGoal: this.props.pageOneProps.fundingGoal,
            photoValue: this.props.pageOneProps.photoValue,
            campaign: this.props.pageOneProps.campaign,
            description: this.props.pageOneProps.description,
            risks_and_challenges: this.props.pageOneProps.risks_and_challenges,
            rewardTitle: this.props.pageOneProps.rewardTitle,
            rewardDes: this.props.pageOneProps.rewardDes,
            rewardEst: this.props.pageOneProps.rewardEst,
            rewardShip: this.props.pageOneProps.rewardShip,
            rewardCost: this.props.pageOneProps.rewardCost
            
        }
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({page: 2})
    }

    handleSelect(e) {
        e.preventDefault();
        this.setState({category: e.currentTarget.value})
    }

    render() {
        let display = (this.state.page === 2) ? <Page2 pageTwoProps={this.state}
            path={this.props.path} createReward={this.props.createReward} projectAction={this.props.projectAction} author={this.props.author} /> : (
        <div className="create-section">
            <nav className="create-nav">1 of 5</nav>
            <form className="basics-form" onSubmit={this.handleSubmit}>
                <div className="basics-fields">
                    <div className="create-main">
                        <h1>First, let's get you set up.</h1>
                        <br/>
                        <p className="main-p">Pick a project category to connect with a specific community. </p>
                        <select required={true} className="categories" onChange={this.handleSelect}>
                            <option value="" selected={this.state.category ? false : true} disabled={true}>Select your category</option>
                            <option value="1" selected={this.state.category === "1" ? true : false}>Art</option>
                            <option value="2" selected={this.state.category === "2" ? true : false}>Comics</option>
                            <option value="3" selected={this.state.category === "3" ? true : false}>Crafts</option>
                            <option value="4" selected={this.state.category === "4" ? true : false}>Dance</option>
                            <option value="5" selected={this.state.category === "5" ? true : false}>Design</option>
                            <option value="6" selected={this.state.category === "6" ? true : false}>Fashion</option>
                            <option value="7" selected={this.state.category === "7" ? true : false}>Film & Video</option>
                            <option value="8" selected={this.state.category === "8" ? true : false}>Food</option>
                            <option value="9" selected={this.state.category === "9" ? true : false}>Games</option>
                            <option value="10" selected={this.state.category === "10" ? true : false}>Journalism</option>
                            <option value="11" selected={this.state.category === "11" ? true : false}>Music</option>
                            <option value="12" selected={this.state.category === "12" ? true : false}>Photography</option>
                            <option value="13" selected={this.state.category === "13" ? true : false}>Publishing</option>
                            <option value="14" selected={this.state.category === "14" ? true : false}>Technology</option>
                            <option value="15" selected={this.state.category === "15" ? true : false}>Theater</option>
                        </select>

                    </div>
                    <div className="create-footer-section">
                        <span>Hello, Super Creator.</span>
                        <button>Next: Basics</button>
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

export default Page1

