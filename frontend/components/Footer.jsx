import React from "react";

const Footer = () => {
    // const linkedin = "https://www.linkedin.com/in/xlihuang/"
    // const github = "https://github.com/jackyli97"
    // <FontAwesomeIcon icon={faTimes} onClick={() => this.props.history.push('/')} className="explore-close" />

    return(
    <div className="footer-container">
        <div className="footer-top">
            <div className="footer-text-section">
                <div className="about-section">
                    <h3>About</h3>
                    <ul>
                        <li>
                                <a href="https://www.kickstarter.com/about?ref=global-footer" target="_blank">About us</a>
                        </li>
                        <li>
                                <a href="https://www.kickstarter.com/charter?ref=global-footer" target="_blank">Our chapter</a>
                        </li>
                        <li>
                                <a href="https://www.kickstarter.com/help/stats?ref=global-footer" target="_blank">Stats</a>
                        </li>
                        <li>
                                <a href="https://www.kickstarter.com/press?ref=global-footer" target="_blank">Press</a>
                        </li>
                        <li>
                                <a href="https://www.kickstarter.com/jobs?ref=global-footer" target="_blank">Jobs</a>
                        </li>
                    </ul>
                </div>
                <div className="support-section">
                    <h3>Support</h3>
                        <ul>
                            <li>
                                <a href="https://help.kickstarter.com/hc/en-us" target="_blank">Help Center</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/rules?ref=global-footer" target="_blank">Our Rules</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/help/handbook?ref=global-footer" target="_blank">Creator Handbook</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/patrons?ref=global-footer" target="_blank">Patrons</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/help/brand_assets?ref=global-footer" target="_blank">Brand assets</a>
                            </li>
                        </ul>
                </div>
                <div className="more-section">
                    <h3>More from Jumpstarter</h3>
                        <ul>
                            <li>
                                <a href="https://www.kickstarter.com/newsletters?ref=global-footer" target="_blank">Newsletter</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/magazine?ref=global-footer" target="_blank">Jumpstarter Magazine</a>
                            </li>
                            <li>
                                <a href="https://thecreativeindependent.com/?ref=global-footer" target="_blank">The Creative Independent</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/mobile?ref=global-footer" target="_blank">Mobile apps</a>
                            </li>
                            <li>
                                <a href="https://www.kickstarter.com/research?ref=global-footer" target="_blank">Research</a>
                            </li>
                        </ul>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="copyright-and-icons">
                <section className="copyright">
                    <img src={window.favicon} alt="jumpstarter" className="favicon-img" />
                    <span>Jumpstarter, PBC © 2020</span>
                </section>
                <section className="social-media">
                    <a href="https://github.com/jackyli97" target="_blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/xlihuang/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://angel.co/u/jacky-li-huang" target="_blank">
                        <i className="fab fa-angellist"></i>
                    </a>
                </section>
            </div>

                <section className="settings-section">
                    <div className="language-settings">
                        <select>
                                <option value="en" selected>English</option>
                        </select> 
                    </div>
                    <div className="currency-settings">
                        <select>
                                <option value="USD" selected>$  US Dollar   (USD)</option>
                        </select>
                    </div>
                </section>
        </div>

    </div>
    )
}

export default Footer