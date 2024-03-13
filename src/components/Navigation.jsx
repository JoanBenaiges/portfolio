import React from 'react'
import { Link } from 'react-router-dom';

function Navigation() {



    return (

        <div class="navigation">
            <nav>
                <div class="logo">JoanBenaiges</div>
                <div class="nav-container">
                    <ul class="nav-links">
                        <li><Link to='/'>About Me</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact-me'>Contact Me</Link></li>
                    </ul>
                </div>
            </nav>
            <hr class='hr-navigation' />
        </div>

    );
}

export default Navigation