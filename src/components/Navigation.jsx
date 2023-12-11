import React from 'react'
import { useState } from 'react';

function Navigation() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false)
    };

    function handleMouseEnter() {
        const element = document.querySelector('.contact-us-navi-button');
        if (element) {
            element.classList.add('contact-us-navi-button-hover')
        }
    }

    function handleMouseLeave() {
        const element = document.querySelector('.contact-us-navi-button');
        if (element) {
            element.classList.remove('contact-us-navi-button-hover');
        }
    }


    return (
        <>
            <div className="navigation">
                <nav>
                    <div className="nav-container">
                        <div className="logo">JoanBenaiges</div>
                        <ul className="nav-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>

                        </ul>

                    </div>
                </nav>
            </div>
            <hr className='hr-navigation' />
        </>
    );
}

export default Navigation