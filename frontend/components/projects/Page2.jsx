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
            photoFile: this.props.pageTwoProps.photoFile,
            photoUrl: this.props.pageTwoProps.photoUrl,
            page: 2,
            category: this.props.pageTwoProps.category,
            fundingGoal: this.props.pageTwoProps.fundingGoal,
            photoValue: this.props.pageTwoProps.photoValue
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
        debugger
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
            photoUrl: e.currentTarget.files[0],
            photoValue: e.currentTarget.value.slice(12, (e.currentTarget.value).length)
        })
    }

    render() {
        const preview = this.state.photoUrl ? <img className="img-preview" src={this.state.photoUrl} /> : null;
        let display = (this.state.page === 1) ? <Page1 createProject={this.props.createProject} pageOneProps={this.state} path={this.props.path} author={this.props.authorId} />  
        : (this.state.page === 3) ? 
        <Page3 project={this.state} path={this.props.path} author={this.props.author} createProject={this.props.createProject} /> : (
            <div>
                <nav className="create-nav">2 of 4</nav>
                <form className="basics-form" onSubmit={this.handleSubmit}>
                    <div className="basics-fields">
                        <div className="create-main">
                            <h1>Start with the basics</h1>
                            <br />
                            <p className="main-p">Make it easy for people to learn about your project</p>
                            <label>Project Title
                            <div className="create-title">
                                    <input type="text" value={this.state.title} required={true} onChange={this.handleInput("title")} placeholder="Queen of Pain: A Roller Derby Documentary" value={this.state.title}/>
                            </div>
                            </label>
                            <label>Project Location
                            <div className="create-location">
                                    <input type="text" value="this.state.location" required={true} onChange={this.handleInput("location")} placeholder="Start typing your location..." value={this.state.location}/>
                            </div>
                            </label>
                            <label>Project Image
                            <div className="create-image">
                            <input type="file" className={this.state.photoUrl !== "" ? "hidden-file-form" : "file-form"} required={this.state.photoFile === null ? true : false} onChange={this.handleFile}/>
                                <div className="custom-file">
                                    <span className="custom-file-upload">Upload Image</span>
                                    <span>{this.state.photoValue !== "" ? this.state.photoValue : "No image uploaded"}</span>
                                </div>
                                {preview}
                            </div>
                            </label>

                            <label>Campaign End Date 
                            <p>Set a time limit for your campaign. You won’t be able to change this after you launch. Campaigns that last 30 days or less are more likely to be successful.</p>
                            <div className="create-duration">
                                    <input type="date"
                                        value={this.state.endDate} required={true}
                                        min={this.state.date} max="2022-12-31" onChange={this.handleInput("endDate")}/>
                            </div>
                            </label>
                        </div>
                        <div className="create-footer-section">
                            <span onClick={this.handleClick}>Category</span>
                            <button>Next: Funding</button>
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

export default Page2