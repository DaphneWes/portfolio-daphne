import "./Footer.css"

function Footer (props) {
    return (
        <div className={`container-footer ${props.theme}`}>
            <div className="message-footer">
                Don't hesitate to contact me!
            </div>
            <div className="portfolio-name">
                Portfolio Daphne 2023
            </div>
            
        </div>
    )
}

export default Footer;