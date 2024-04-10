import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import changeStyle from '../utilities/changeStyle';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const [retroMode, setRetroMode] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleRetroMode = () => {
        setRetroMode(!retroMode)
    }

    return (
        <div className={`navigation ${retroMode ? 'classic' : 'retro'}`}>
            <nav>
                <div className="logo">JoanBenaiges</div>
                <div className="nav-container">
                    <div className="menu-icon" onClick={toggleMenu}>☰</div>
                    <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                        <li><Link to='/'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact-me'>Contact Me</Link></li>
                    </ul>
                </div>
                {/* <button className='retro-mode' onClick={toggleRetroMode}>Retro Mode</button> */}

            </nav>
            <hr className='hr-navigation' />
        </div>
    );
}

export default Navigation;