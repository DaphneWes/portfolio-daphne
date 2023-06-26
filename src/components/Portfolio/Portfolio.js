import "./Portfolio.css"
import portfolioInfo from "./PortfolioInfo";

function Portfolio(props) {
    const projects = portfolioInfo();

    const playMovie = (e) => {
        e.target.play();
    }

    const stopMovie = (e) => {
        e.target.pause();
    }

    return (
        <div id="portfolio" className={`container-portfolio ${props.theme}`}>
            <div className="row">
                <div className="num-portfolio">02</div>
                <div className="title-portfolio">
                    Projects
                </div>
                <hr />
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <li key={project.id}>
                        {!project.img ? <></>
                            :
                            <img src={project.img} alt="screenshot-webpage"></img>
                        }
                        {!project.video ? <></>
                            :
                            <div className="video-portfolio">
                                <div className="hover-play">Hover to play</div>
                                <video src={project.video} alt="screenshot-webpage" onMouseOver={playMovie} onMouseOut={stopMovie} loop muted></video>
                            </div>
                        }
                        <div className="project-card">
                            <h2>{project.name}</h2>
                            <p>{project.info}</p>
                            <form>
                                {!project.link ? <></>
                                    :
                                    <a href={project.link} target="_blank" rel="noreferrer">Link</a>
                                }
                            </form>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;