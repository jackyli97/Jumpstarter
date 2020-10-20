import React from 'react';
import { Link } from 'react-router-dom';
import Page2 from './Page2'


class Page1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {category: "", page: 1}
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
    let display = (this.state.page === 2) ? <Page2 cateogry={this.state.category} createProject={this.props.createProject} /> : (
        <div className="create-section">
            <nav className="create-nav">1 of 4</nav>
            <h1>First, let's get you set up.</h1>
            <br/>
            <h4>Pick a project category to connect with a specific community. </h4>

            <form className="basics-form" onSubmit={this.handleSubmit}>
                <div className="basics-fields">
                    <select className="categories" onChange={this.handleSelect}>
                        <option value="" selected="true" disabled="true">Select your category</option>
                        <option value="0">Art</option>
                        <option value="1">Comics</option>
                        <option value="2">Crafts</option>
                        <option value="3" >Dance</option>
                        <option value="4" >Design</option>
                        <option value="5" >Fashion</option>
                        <option value="6" >Film & Video</option>
                        <option value="7" >Food</option>
                        <option value="8" >Games</option>
                        <option value="9" >Journalism</option>
                        <option value="10" >Music</option>
                        <option value="11" >Photography</option>
                        <option value="12" >Publishing</option>
                        <option value="13" >Technology</option>
                        <option value="14" >Theater</option>
                    </select>
                </div>
                <div className="create-footer-section">
                    <Link to="/">Hello again!</Link>
                    <button>Next: Basics</button>
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

