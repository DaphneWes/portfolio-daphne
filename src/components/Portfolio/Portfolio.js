import "./Portfolio.css"
import portfolioInfo from "./PortfolioInfo";

function Portfolio (props) {
    const projects = portfolioInfo();

    return(
        <div id="portfolio" className={`container-portfolio ${props.theme}`}>
            <div className="row">
                <div className="num-portfolio">02</div>
                <div className="title-portfolio">
                    Projects
                </div>
                <hr/>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <li key={project.id}>
                        <img src={project.img} alt="screenshot-webpage"></img>
                        <div className="project-card">
                            <h2>{project.name}</h2>
                            <p>{project.info}</p>
                            <form>
                                <a href={project.link} target="_blank" rel="noreferrer">Link</a>
                            </form>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;