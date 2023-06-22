import profileInfo from "../ProfileInformation"
import "./FrontPage.css"


function FrontPage() {
    const profile = profileInfo();
    return (
        <div className="container-frontpage">
            <div className="name">
            Hi, my name is {profile.firstname}.
            </div>
            <div className="title">
                I'm a webdeveloper.
            </div>
            <p className="description">
            Tijdens mijn minor programmeren aan de Universiteit van Amsterdam heb ik gewerkt met de talen C, Python, CSS, HTML en Javascript. De opdrachten voor het vak Webapps maakten mij enthousiast omdat het creativiteit combineert met programmeren. 

            </p>
            <button>Let's connect!</button>
        </div>
    )
};

export default FrontPage;