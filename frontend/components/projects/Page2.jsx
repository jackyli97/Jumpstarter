import React from 'react';
import { Link } from 'react-router-dom';
import Page3 from './Page3'

class Page2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            end_date: "",
            location: "",
            photoFile: null,
            photoUrl: null,
            page: 2
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('project[title]', this.state.title);
        formData.append('project[end_date]', this.state.end_date);
        formData.append('project[location]', this.state.location);
        if (this.state.photoFile) {
            formData.append('project[photo]', this.state.photoFile);
        }
        this.setState({ page: 3 })
        // this.props.createProject(formData);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.currentTarget.value})
        }
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onLoadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file)
        }
    }

    render() {
        let display = (this.state.page === 3) ? <Page3 project={this.state} createProject={this.props.createProject} /> : (
            <div>
                <nav className="create-nav">2 of 4</nav>
                <h1>Start with the basics</h1>
                <br />
                <h4>Make it easy for people to learn about your project</h4>

                <form className="basics-form" onSubmit={this.handleSubmit}>
                    <div className="basics-fields">
                        <div className="create-title">
                            <label>Project Title
                                <input type="text" onChange={this.handleInput("title")} placeholder="Queen of Pain: A Roller Derby Dcoumentary"/>
                            </label>
                        </div>
                        <div className="create-location">
                            <label>Project Location
                                <input type="text" onChange={this.handleInput("location")} placeholder="Start typing your location..." />
                            </label>
                        </div>
                        <div className="create-image">
                            <label>Project Image
                                <input type="file" oncChange={this.handleFile}/>
                            </label>
                        </div>
                        <div className="create-duration">
                            <label>Campaign End Date

                            </label>
                        </div>
                    </div>
                    <div className="create-footer-section">
                        <Link to="/">Category</Link>
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