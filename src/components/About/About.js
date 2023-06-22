import profileInfo from "../ProfileInformation"
import "./About.css"

function About() {
    const profile = profileInfo();

    return (
        <div id="about" className="container-about">
            <div className="row">
                <div className="num-about">01</div>
                <div className="title-about">
                    About
                </div>
                <hr/>
            </div>
            <p className="info">
                {profile.aboutinfo}
            </p>
        </div>
    )
}

export default About;