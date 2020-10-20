import React from 'react';
import { Link } from 'react-router-dom';


class Page4 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="create-section">
                <h1>Introduce your project</h1>
                <br/>
                <h4>Tell people why they should be excited about your project. Get specific but be clear and brief.</h4>

                <form className="basics-form">
                    <div className="basics-fields">

                    </div>
                    <div className="create-footer-section">
                        <Link to="/">Funding</Link>
                        <button>Continue</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Page4