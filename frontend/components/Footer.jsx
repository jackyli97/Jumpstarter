import React from "react";

const Footer = () => {
    const linkedin = "https://www.linkedin.com/in/xlihuang/"
    const github = "https://github.com/jackyli97"
    return(
    <div>
        <div id="subcategory-bar">
            <div className="border-bottom-one">
                <div className="grid-container">
                    <div className="grid-row">
                        <div className="grid-col">
                            <ul>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                                <li className="footer-category-link">

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="grid-container">
            <div className="grid-row-flex">
                <div className="grid-col">
                    <section id="footer-about">
                        <h3 className="footer-about-text"></h3>
                        <ul>
                            <li>
                                    <a href="#" className="link-soft-black">

                                    </a>
                            </li>
                            <li>
                                <a href="#" className="link-soft-black">

                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-soft-black">

                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-soft-black">

                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-soft-black">

                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>

        <div className="border-bottom-two">
            <div className="grid-container">
                <div className="grid-row">
                    <div className="grid-col">
                        <div className="flex-items-center">
                            <section className="section-footer-social">
                                <ul className="flex-social">
                                    <li>
                                        <a href={linkedin} className="social-link">
                                            <img src={window.linkedin} alt="linkedin"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={github} className="social-link">
                                            <img src={window.github} alt="github" />
                                        </a>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="border-bottom-three">
            <div className="grid-container">
                <div className="grid-row">
                    <div className="col">
                        <section className="section-footer-legal">
                            <ul className="flex-wrap-type">
                                <li>
                                    <a href="#" className="link-soft-black"></a>
                                </li>
                                <li>
                                    <a href="#" className="link-soft-black"></a>
                                </li>
                                <li>
                                    <a href="#" className="link-soft-black"></a>
                                </li>
                                <li>
                                    <a href="#" className="link-soft-black"></a>
                                </li>
                                <li>
                                    <a href="#" className="link-soft-black"></a>
                                </li>
                                <li>
                                    <a href="#" className="link-soft-black"></a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Footer