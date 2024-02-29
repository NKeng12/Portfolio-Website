import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../../components/AnimateLetters';
import LogoTitle from '../../assets/images/logo-N.png';
import './index.scss';
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'c', 'h', 'o', 'l', 'a', 's']

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timerId);
    }, []);

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>Hi,</span>
                    <br />
                    <span className={letterClass}>I'm</span>
                    <div className="image-container">
                        <img src={LogoTitle} alt="developer" />
                    </div>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                </h1>
                <h2>
                    Student of Business and Financial Technology
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home