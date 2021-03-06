import React from 'react';
import Page3_5 from './Page3_5'
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as legoData from "../../util/legoloading.json";

class Page4 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.project.title,
            type: this.props.project.type,
            projId: this.props.project.projId,
            endDate: this.props.project.endDate,
            location: this.props.project.location,
            existingPhoto: this.props.project.existingPhoto,
            photoFile: this.props.project.photoFile,
            photoUrl: this.props.project.photoUrl,
            photoValue: this.props.project.photoValue,
            category: this.props.project.category,
            amountPledged: this.props.project.amountPledged,
            fundingGoal: this.props.project.fundingGoal,
            campaign: this.props.project.campaign,
            description: this.props.project.description,
            risks_and_challenges: this.props.project.risks_and_challenges,
            page: 4,
            rewardTitle: this.props.project.rewardTitle,
            rewardDes: this.props.project.rewardDes,
            rewardEst: this.props.project.rewardEst,
            rewardShip: this.props.project.rewardShip,
            rewardCost: this.props.project.rewardCost,
            loading: false
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.setState({ page: 35 })
    }

    handleSubmit(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
        this.setState({ loading: true })
        let projectProps;
        let formData;
        if (this.state.type === "create" || this.state.photoFile){
            formData = new FormData();
            formData.append('project[title]', this.state.title);
            formData.append('project[end_date]', this.state.endDate);
            formData.append('project[location]', this.state.location);
            formData.append('project[category_id]', (this.state.category));
            formData.append('project[amount_pledged]', (this.state.amountPledged));
            formData.append('project[funding_goal]', (this.state.fundingGoal));
            formData.append('project[description]', this.state.description);
            formData.append('project[risks_and_challenges]', this.state.risks_and_challenges);
            formData.append('project[campaign]', (this.state.campaign));
            formData.append('project[author_id]', this.props.author);
    
            if (this.state.photoFile) {
                formData.append('project[photo]', this.state.photoFile);
            }
        }
        else{
            projectProps = 
            {
                category_id: this.props.project.category, location: this.props.project.location, end_date: this.props.project.endDate
                ,title: this.props.project.title, photoFile: this.props.project.photoFile, description: this.props.project.description, funding_goal: this.props.project.fundingGoal,
                risks_and_challenges: this.props.project.risks_and_challenges, campaign: this.props.project.campaign, author_id: this.props.author
            }
        }
        this.props.projectAction((this.state.type === "create" || this.state.photoFile) ? formData : projectProps, this.state.type === "edit" ? this.state.projId : null, this.state.type === "create" ? null : (this.state.type === "create" || this.state.photoFile) ? true : false)
            .then(action => {
                if (this.state.rewardTitle !== ""){
                    this.props.createReward({title: this.state.rewardTitle, description: this.state.rewardDes,
                    estimated_delivery: this.state.rewardEst, shipping_loc: this.state.rewardShip, cost: this.state.rewardCost, project_id: action.project.project.id})
                        .then(action => {
                            return this.props.path.push(`/projects/${action.reward.reward.project_id}`)
                        }) 
                }
                else{
                    return this.props.path.push(`/projects/${action.project.project.id}`)
                }
            }) 
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.currentTarget.value })
        }
    }

    render() {
        let defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: legoData.default,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
        let display = (this.state.page === 35) ? <Page3_5 project={this.state} path={this.props.path} author={this.props.author} projectAction={this.props.projectAction} /> :
            !this.state.loading ? <div className="create-section">
                <nav className="create-nav">5 of 5</nav>
                <form className="basics-form" onSubmit={this.handleSubmit}>
                    <div className="basics-fields">
                        <div className="create-main">
                            <h1>Introduce your project</h1>
                            <br/>
                            <p className="main-p">Tell people why they should be excited about your project. Get specific but be clear and brief.</p>
                            <label>Project Description
                            <p>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know.</p>
                            <div className="create-description">
                                    <textarea onChange={this.handleInput("description")} required={true}
                                        placeholder="Write about your project like you're explaining it to a friend..." value={this.state.description}/>
                            </div>
                            </label>
                            <label>Risks and Challenges
                            <p>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.</p>
                            <div className="create-risks">
                                    <textarea onChange={this.handleInput("risks_and_challenges")} required={true}
                                        placeholder="Common risks and challenges you may want to address include budgeting, timelines for rewards and the project itself, the size of your audience.... " value={this.state.risks_and_challenges}/>
                            </div>
                            </label>
                            <label>Campaign
                            <p>Have an attention grabbing slogan for your campaign that will be displayed alongside your title.</p>
                            <div className="create-campaign">
                                    <textarea onChange={this.handleInput("campaign")} required={true}
                                        placeholder="A gorgeous system of phone cases, mounts, and accessories that brilliantly adapt your phone to every aspect of your life. " value={this.state.campaign}/>
                            </div>
                            </label>
                        </div>
                        <div className="create-footer-section">
                            <span onClick={this.handleClick}>Rewards</span>
                            <button>Continue</button>
                        </div>
                    </div>
                </form>
            </div> :
            (
                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center">
                        <h1 className="creating-project">{this.state.type === "create" ? "Creating Project" : "Updating Project"}</h1>
                        <Lottie options={defaultOptions} height={120} width={120} />
                    </div>
                </FadeIn>
            )
        return (
            <div>
                {display}
            </div>
        )
    }
}

export default Page4