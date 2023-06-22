import "./Contact.css"
import profileInfo from "../ProfileInformation";

function Contact() {
    const profile = profileInfo();

    return (
        <div id="contact" className="container-contact">
            <div className="row">
                <div className="num-contact">03</div>
                <div className="title-contact">
                    Contact
                </div>
                <hr />
            </div>

            <div className="details-contact">
                {profile.phone}
                <br></br>
                {profile.email}
            </div>
        </div>
    )
}

export default Contact;