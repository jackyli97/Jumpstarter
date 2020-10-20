import React from 'react';
import { Link } from 'react-router-dom';


class Page3 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="create-section">
                <h1>Let's talk about money</h1>
                <br />
                <h4>Plan and manage your project's finances.</h4>

                <form className="basics-form">
                    <div className="basics-fields">

                    </div>

                    <div className="create-footer-section">
                        <Link to="/">Basics</Link>
                        <button>Next: Story</button>
                    </div>
                </form>

            </div>
        )
    }
}

export default Page3