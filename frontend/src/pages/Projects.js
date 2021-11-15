import React from 'react';
import ButtonsBottom from '../components/ButtonsBottom';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

export const Project1 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo/>
                Project 1
                <ButtonsBottom left={'/'} right={'/project-2'} />
            </div>
        </main>
    )
}

export const Project2 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 2
                <ButtonsBottom left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    )
}

export const Project3 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 3
                <ButtonsBottom left={'/project-2'} right={'/project-4'} />
            </div>
        </main>
    )
}

export const Project4 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 4
                <ButtonsBottom left={'/project-3'} right={'/contact'} />
            </div>
        </main>
    )
}

export default Project1;