import React from 'react';
import Page1 from './Page1'

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let pageOneProps = { category: "", page: 1, location: "", endDate: "", title: "", photoFile: null, photoUrl: "" }
        return (
            <div>
                <div className="create-container">
                    <Page1 createProject={this.props.createProject} pageOneProps={pageOneProps} path={this.props.path} author={this.props.authorId} /> 
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