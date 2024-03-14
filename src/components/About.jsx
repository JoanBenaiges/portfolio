import React, { useEffect, useState } from "react";

function About() {
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTitle(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="about-page">
            <div className="info">
                <div className="about-me">
                    <div className="image"></div>
                    <div className="my-text">
                        <div className="title-container">
                            <h1 className={showTitle ? "show-title" : ""}>¡Hey! I'm Joan.</h1>
                        </div>
                        <p>
                            After a significant career change in my life, I decided to dive into the exciting
                            world of programming, something that had always intrigued me. I began my journey
                            at Ironhack bootcamp, where I experienced exponential growth in my knowledge and skills.
                            <br />
                            <br />
                            I consider myself a patient and persistent individual, driven by a strong motivation
                            to continue learning and growing in this ever-evolving field. My goal is to contribute
                            my passion and expertise to the development of innovative and successful web projects.
                            <br />
                            <br />
                            Thank you for visiting my portfolio! I'm excited to share my work with you.
                        </p>
                    </div>
                </div>

                <div className="buttons-contact">

                    <div className="container">
                        <a className="button" href="https://www.linkedin.com/in/joan-benaiges-94bb9460/" style={{ '--color': '#32CD32' }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            LinkedIn
                        </a>

                        <a className="button" href="https://github.com/JoanBenaiges" style={{ '--color': '#32CD32' }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            GitHub
                        </a>

                        <a className="button" href="#" style={{ '--color': '#32CD32' }}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            My CV
                        </a>
                    </div>

                </div>
            </div>

            <div className="skills">

                <h1>Skills</h1>

                <div className="top">

                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Le.svg" alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14LL.svg" alt="HTML5" />
                        <p>HTML5</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Kp.svg" alt="CSS3" />
                        <p>CSS3</p>
                    </div>

                </div>

                <div className="mid">
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14KY.svg" alt="React" />
                        <p>React</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14KK.svg" alt="Angular" />
                        <p>Angular</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Ky.svg" alt="Axios" />
                        <p>Axios</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Lq.svg" alt="Node" />
                        <p>Node</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Hh.svg" alt="Express" />
                        <p>Express</p>
                    </div>
                </div>

                <div className="bottom">
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Ja.svg" alt="Bootstrap" />
                        <p>Bootstrap 5</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14Jb.svg" alt="SASS" />
                        <p>SASS</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14LV.svg" alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14L9.svg" alt="GitHub" />
                        <p>GitHub</p>
                    </div>
                    <div className="image-and-name">
                        <img src="https://svgur.com/i/14M1.svg" alt="Postman" />
                        <p>Postman</p>
                    </div>
                </div>

            </div>
        </div >

    );
}

export default About;
