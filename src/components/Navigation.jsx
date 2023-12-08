import React from 'react'

function Navigation() {
    return (
        <>
            <div className="navigation">
                <nav>
                    <div className="nav-container">
                        <div className="logo">JoanBenaiges</div>
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <hr className='hr-navigation' />
        </>
    );
}

export default Navigation