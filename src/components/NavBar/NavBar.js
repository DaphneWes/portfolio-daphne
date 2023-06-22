import { useState } from "react";
import "./NavBar.css"

import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

function Nav(props) {

    const [navbarTheme, setNavbarTheme] = useState("dark-navbar");

    const changeTheme = () => {
        if (props.theme === "light") {
            props.setTheme("dark");
            setNavbarTheme("dark-navbar");
        }
        else {
            props.setTheme("light");
            setNavbarTheme("light-navbar");
        }
    }

    const [isLargerThanMinWidth] = useMediaQuery("(min-width: 30em)");
    const [navExpanded, setNavExpended] = useState(false);

    const scrollToAbout = () => {
        const aboutSection = document.querySelector("#about");
        aboutSection.scrollIntoView({ behavior: "smooth" });
        setNavExpended(false);
    }

    const scrollToProjects = () => {
        const aboutSection = document.querySelector("#portfolio");
        aboutSection.scrollIntoView({ behavior: "smooth" });
        setNavExpended(false);
    }

    const scrollToTop = () => {
        const aboutSection = document.querySelector("#top");
        aboutSection.scrollIntoView({ behavior: "smooth" });
        setNavExpended(false);
    }

    const scrollToContact = () => {
        const aboutSection = document.querySelector("#contact");
        aboutSection.scrollIntoView({ behavior: "smooth" });
        setNavExpended(false);
    }

    return (
        <header className={`container-navbar ${navbarTheme}`}>
            {isLargerThanMinWidth ? (
                <div className="navbar-large">
                    <div className="column-1">
                        <button className="initials" onClick={scrollToTop}>D W</button>
                    </div>
                    <div className="column-2">
                        <button onClick={scrollToAbout}>About</button>
                        <button onClick={scrollToProjects}>Projects</button>
                        <button onClick={scrollToContact}>Contact</button>
                        <button onClick={changeTheme}>{navbarTheme === "light-navbar" ? <MoonIcon boxSize={"1.5em"} /> : <SunIcon boxSize={"1.5em"} />}</button>
                    </div>
                </div>
            )
                :
                (
                    <div className="navbar-small">
                        {navExpanded ? (
                            <div className="navbar-small-open">
                                <button className="theme-changer" onClick={changeTheme}>{navbarTheme === "light-navbar" ? <MoonIcon boxSize={"1.5em"} /> : <SunIcon boxSize={"1.5em"} />}</button>
                                <button className="close" onClick={() => { setNavExpended(!navExpanded); }}><CloseIcon /></button>
                                <ul>
                                    <li><button className="navbar-small-button" onClick={scrollToTop}>Top</button></li>
                                    <li><button className="navbar-small-button" onClick={scrollToAbout}>About</button></li>
                                    <li><button className="navbar-small-button" onClick={scrollToProjects}>Projects</button></li>
                                    <li><button className="navbar-small-button" onClick={scrollToContact}>Contact</button></li>
                                </ul>

                            </div>
                        )
                            :
                            <>
                                <button className="theme-changer" onClick={changeTheme}>{navbarTheme === "light-navbar" ? <MoonIcon boxSize={"1.5em"} /> : <SunIcon boxSize={"1.5em"} />}</button>
                                <button className="hamburger" onClick={() => { setNavExpended(!navExpanded); }}><HamburgerIcon boxSize={"1.5em"} /></button>
                            </>
                        }
                    </div>
                )
            }

        </header>
    )
}

export default Nav;