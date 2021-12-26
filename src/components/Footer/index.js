import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/nguyen-william93"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require('../../assets/github-logo.png')}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/william-nguyen-095435225/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={require('../../assets/linkedin-logo.png')}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;