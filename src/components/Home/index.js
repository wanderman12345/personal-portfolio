import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import EXIF from 'exif-js';
import MathewImage from '../../assets/images/Mathew.png';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'M', 'a', 't', 'h', 'e', 'w', ' ', 'R', 'a', 'j', 'u']
    const jobArray = ['f', 'u', 'l', 'l ', '', 's', 't', 'a', 'c', 'k', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    return () => clearTimeout(idTimeOut);
        },
    [])

    return (
        <>
        <div className = "container home-page">
        <div className = "text-zone">
            <h1>
            <span className = {letterClass} > H</span>
            <span className = {`${letterClass} _12`} > i,</span>
            <br />
            <span className = {`${letterClass} _13`} > I'</span>
            <span className = {`${letterClass} _14`} > m </span>
            {/* <img src = {LogoTitle} alt = 'developer'></img> */}
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx = {15} />
            <br />
            <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx = {23} />
            </h1>
            <h2> Frontend Developer / JavaScript Expert / YouTuber </h2>
            <Link to = "/contact " className = 'flat-button'> CONTACT ME  </Link>
        </div>
        <div className='profile-section'>
            <img src = {MathewImage} alt = "Mathew"></img>
        </div>
        </div>
        <Loader type = "line-scale" />
        </>
    );
}

export default Home