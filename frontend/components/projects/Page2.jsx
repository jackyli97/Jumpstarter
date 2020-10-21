import React from 'react';
import { Link } from 'react-router-dom';
import Page3 from './Page3'
import Page1 from './Page1'

class Page2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.pageTwoProps.title,
            location: this.props.pageTwoProps.location,
            endDate: this.props.pageTwoProps.endDate,
            page: 2,
            category: this.props.pageTwoProps.category,
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        this.setState({ page: 1 })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ page: 3 })
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
        
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }else {
            this.setState({ photoUrl: "", photoFile: null })
        }
        this.setState({
            photoFile: e.currentTarget.files[0],
            photoUrl: e.currentTarget.files[0]
        })
    }

    render() {
        const preview = this.state.photoUrl ? <img className="img-preview" src={this.state.photoUrl} /> : null;
        let pageOneProps = { category: this.state.category, page: 1 }
        let display = (this.state.page === 1) ? <Page1 createProject={this.props.createProject} pageOneProps={pageOneProps} path={this.props.path} author={this.props.authorId} />  
        : (this.state.page === 3) ? 
        <Page3 project={this.state} path={this.props.path} author={this.props.author} createProject={this.props.createProject} /> : (
            <div>
                <nav className="create-nav">2 of 4</nav>
                <h1>Start with the basics</h1>
                <br />
                <h4>Make it easy for people to learn about your project</h4>

                <form className="basics-form" onSubmit={this.handleSubmit}>
                    <div className="basics-fields">
                        <div className="create-title">
                            <label>Project Title
                                <input type="text" value={this.state.title} required={true} onChange={this.handleInput("title")} placeholder="Queen of Pain: A Roller Derby Dcoumentary" value={this.state.title}/>
                            </label>
                        </div>
                        <div className="create-location">
                            <label>Project Location
                                <input type="text" value="this.state.location" required={true} onChange={this.handleInput("location")} placeholder="Start typing your location..." value={this.state.location}/>
                            </label>
                        </div>
                        <div className="create-image">
                            <label>Project Image
                                <input type="file" required={true} onChange={this.handleFile}/>
                            </label>
                            {preview}
                        </div>
                        <div className="create-duration">
                            <label>Campaign End Date 
                                <p>Set a time limit for your campaign. You won’t be able to change this after you launch. Campaigns that last 30 days or less are more likely to be successful.</p>
                                <input type="date"
                                    value={this.state.endDate} required={true}
                                    min={this.state.date} max="2022-12-31" onChange={this.handleInput("endDate")}/>
                            </label>
                        </div>
                    </div>
                    <div className="create-footer-section">
                        <span onClick={this.handleClick}>Category</span>
                        <button>Next: Funding</button>
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

export default Page2