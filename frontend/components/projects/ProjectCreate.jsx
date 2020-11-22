import React from 'react';
import Page1 from './Page1'

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        if (this.props.type === "edit"){
            this.props.fetchProject(this.props.match.params.projectId)
        }
    }

    render() {
        if (!this.props.project){
            return null;
        }
        let pageOneProps = { projId: this.props.project.projId, type: this.props.type, existingPhoto: this.props.project.existingPhoto, category: this.props.project.category, page: 1, location: this.props.project.location, endDate: this.props.project.endDate
            , title: this.props.project.title, photoFile: this.props.project.photoFile,
             photoUrl: this.props.project.photoFile, photoValue: this.props.photoValue, description: this.props.project.description, fundingGoal: this.props.project.fundingGoal,
             risks_and_challenges: this.props.project.risks_and_challenges, campaign: this.props.project.campaign,
            rewardTitle: this.props.project.rewardTitle, rewardDes: this.props.project.rewardDes, rewardEst: this.props.project.rewardEst,
            rewardShip: this.props.project.rewardShip, rewardCost: this.props.project.rewardCost}
        return (
            <div>
                <div className="create-container">
                    <Page1 projectAction={this.props.type === "create" ? this.props.createProject : this.props.updateProject} createReward={this.props.createReward} pageOneProps={pageOneProps} path={this.props.path} author={this.props.authorId} /> 
                </div>
            </div>
        )
    }
}

export default ProjectCreate