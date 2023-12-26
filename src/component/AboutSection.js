import React from 'react'
import "./style/about.css"


const AboutSection = () => {
    return (
        <>
            <div className="about container">
                <div className="about-sub1">
                    <div className="can-help">
                        <h1>What Can I Help?</h1>
                        <a href="#"></a>
                    </div>

                    <div className="about-text" id='about-text'>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate earum exercitationem ratione quidem rerum adipisci reprehenderit fugiat eligendi, tempore totam dolore tenetur, nostrum,
                            optio voluptate reiciendis
                            aliquam veritatis voluptatibus quos?</p>
                    </div>

                    <div className="about-btn">
                        <div className="experiance">
                            <h2>0.4y+</h2>
                            <p>Experiance</p>
                        </div>
                        <div className="project-count">
                            <h2>5+</h2>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
                <div className="about-sub2">
                    <div className="about-me">
                        <h1>About Me</h1>
                    </div>
                    <div className="about-text">
                        <p id="about-me">Hey! I'm Vishal Prakash Maurya, a recent Computer Science graduate from Babu Banarasi Das National Institute of Technology and Management. My academic voyage was a dive into tech's forefront, exploring machine learning, web development, and more, culminating in a strong 8.1 CGPA.
While I may be new to the professional scene, my education involved hands-on projects with real companies. I've gained valuable problem-solving skills through this practical experience.
Now, I'm enthusiastic about turning my learning into action. I have a strong desire to solve real-world problems and contribute my skills to meaningful projects. I'm eager for an opportunity to step into the professional world and make a real impact with what I've learned.</p>

                    </div>

                    <div className="download-cv">
                        <button>Download CV</button >
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection