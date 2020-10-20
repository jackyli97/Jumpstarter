import React from 'react';
import Page1 from './Page1'

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className="create-container">
                    <h1>Project Create</h1>
                    <Page1 createProject={this.props.createProject} /> 
                    {/* {this.state.page === 1 ? <Page1 createProject={this.props.createProject}/> : 
                        this.state.page === 2 ? <Page2 preateProject={this.props.createProject}/> : 
                            this.state.page === 3 ? <Page3 createProject={this.props.createProject}/> : 
                            <Page4 createProject={this.props.createProject}/>} */}
                </div>
            </div>
        )
    }
}

export default ProjectCreate