import React from 'react';

function Nav(props) {
    const { currentTab, setTab } = props;

    return (
        <nav>
            <ul>
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setTab("about")}>About Me</span>
                </li>
                <li className={currentTab === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setTab("portfolio")}>Portfolio</span>
                </li>
                <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setTab("contact")}>Contact</span>
                </li>
                <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setTab("resume")}>Resume</span>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;