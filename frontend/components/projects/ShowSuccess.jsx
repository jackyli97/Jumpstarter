import React from 'react';
import ProjectShowContainer from './ProjectShowContainer';
import { withRouter } from 'react-router-dom';

class ShowSuccess extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let element = document.getElementById('success')
        element.scrollIntoView({
            behavior: "smooth"
        });
    }

    render() {
        return(
            <div className="success-container" id="success">
                <div className="success-box">
                    <div className="success-box-left">
                        <span>You're a backer!</span>
                        <span>You pledged ${this.props.match.params.amountPledged}.</span>
                    </div>
                    <div className="success-box-right">
                    </div>
                </div>
                <ProjectShowContainer/>
            </div>
        )
    }
}

export default withRouter(ShowSuccess)