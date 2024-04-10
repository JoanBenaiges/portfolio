import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Matrix from '../components/Matrix'

function changeStyle() {
    const [retroMode, setRetroMode] = useState(false);

    const toggleRetroMode = () => {
        setRetroMode(!retroMode);
    };

    return (
        <div className={`app ${retroMode ? 'retro' : 'classic'}`}>
            <Navigation toggleRetroMode={toggleRetroMode} />
            <Footer toggleRetroMode={toggleRetroMode} />
            <About toggleRetroMode={toggleRetroMode} />
            <Contact toggleRetroMode={toggleRetroMode} />
            <Projects toggleRetroMode={toggleRetroMode} />
            <Matrix toggleRetroMode={toggleRetroMode} />
        </div>
    );
}

export default changeStyle;