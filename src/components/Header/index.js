import React from 'react';
import Nav from '../Nav';

function Header(props){
    const {currentTab, setTab} = props;

    return (
        <header>
            <div>
                <h2>William Nguyen React Portfolio</h2>
            </div>
            <div>
                <Nav currentTab = {currentTab} setTab={setTab}></Nav>
            </div>
        </header>
    )
};

export default Header;