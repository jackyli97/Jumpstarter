import React from 'react';
import { merge } from 'lodash';


class Rewards extends React.Component {
    constructor(props) {
        super(props)
        this.state = merge({}, this.props.project, {clicked: false, amountPledged: null, rewardId: null})
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({
            clicked: true
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.amount_pledged += (parseInt(this.state.amountPledged))
        this.props.createBacking({backing_amount: this.state.amountPledged, backer_id: this.props.currentUser, project_id: this.props.project.id, reward_id: this.state.rewardId})
            .then(() => {
                this.props.updateProject(this.state)
                this.props.successMessage(this.state.amountPledged)
                // .then((action) => {
                //     this.props.successMessage(this.state.amountPledged)
                // }) 
            }) 
    }

    handleInput(rewardId=null) {
        return e => {
            this.setState({amountPledged: e.currentTarget.value, rewardId})
        }
    }


    render() {
            let form = !this.props.rewards ? <div></div> : Object.values(this.props.rewards).map((reward, idx) => {
                return <li key={idx} className="reward-item-container">
                    {this.state.clicked ? null : <button id="select-reward" onClick={this.handleClick}> Select Reward</button>}
                    <div className="reward-label">
                        Pledge ${reward.cost} or more
                    </div>
                    <div className="reward-name">
                        {reward.title}
                    </div>
                    <div className="reward-desc">
                        {reward.description}
                    </div>
                    <div className="ship-details">
                        <div className="del-date">
                            <div className="detail-label">Estimated Delivery</div>
                            <div className="detail-content">{reward.estimated_delivery}</div>
                        </div>
                        <div className="ship-loc">
                            <div className="detail-label">Ships To</div>
                            <div className="detail-content">{reward.shipping_loc}</div>
                        </div>
                    </div>
                    <div className="backings-rewards-count">
                        {this.props.backers} backers
                    </div>
                    {this.props.currentUserBacked ? <div id="pledge-error">You Have Alreday Purchased This Reward</div> : null}
                    {!this.state.clicked || this.props.currentUserBacked ? null :
                        <form className="pledge-form-container" onSubmit={this.handleSubmit}>
                            <div className="container-name"> Pledge Amount </div>
                            <div className="pledge-value">
                                <div className="dollar-sign">$</div>
                                <input type="number" value={this.state.amountPledged === null ? reward.cost : this.state.amountPledged}
                                    min={reward.cost} step="any" onKeyUp={this.handleInput(reward.id)} onInput={this.handleInput(reward.id)} />
                            </div>
                            <button id="submit-pledge" disabled={(this.state.amountPledged >= reward.cost) && this.props.currentUser ? false : true}>Continue</button>
                            {this.props.currentUser ? null : <div id="pledge-error">Must Be Logged In To Make A Pledge</div>}
                            {this.state.amountPledged >= reward.cost ? null : <div id="pledge-error">Pledge Amount Must Not Be Less Than {reward.cost}</div>}
                        </form>}
                </li>
            })
        return(
            <>
                <li className="reward-item-container">
                    <div className="reward-label">
                        Pledge without a reward
                    </div>

                    <div className="messageBox">
                        <h3>
                            Back it because you believe in it.
                        </h3>
                        <p>
                            Support the project for no reward, just because it speaks to you.
                        </p>
                    </div>

                    <form className="pledge-form-container" onSubmit={this.handleSubmit}>
                        <div className="container-name"> Pledge Amount </div>
                        <div className="pledge-value">
                            <div className="dollar-sign">$</div>
                            <input type="number" value={this.state.amountPledged}
                                min="1" step="any" onKeyUp={this.handleInput()} onInput={this.handleInput()} />
                        </div>
                        <button id="submit-pledge" disabled={this.props.currentUser ? false : true}>Continue</button>
                        {this.props.currentUser ? null : <div id="pledge-error">Must Be Logged In To Make A Pledge</div>}
                    </form>
                </li>
                {form}
            </>
        )
    }
}

export default Rewards;