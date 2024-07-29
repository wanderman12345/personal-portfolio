import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';
import EXIF from 'exif-js';
import MathewImage from '../../assets/images/Mathew.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['', 'M', 'a', 't', 'h', 'e', 'w', ' ', 'R', 'a', 'j', 'u']
    const jobPhrases = ['full stack developer', 'software engineer',  'UI/UX designer'];
    const [currentJobIndex, setCurrentJobIndex] = useState(0);


    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(idTimeOut);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobPhrases.length);
        }, 5000); // Change every 5 seconds (5000 milliseconds)

        return () => clearInterval(interval);
    }, [jobPhrases]);


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
            {/* <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx = {28} /> */}
            <span className={letterClass}>{jobPhrases[currentJobIndex]}</span>
            </h1>
            <h2> Computer Engineer / Space Enthusiast </h2>
            <Link to = "/contact " className = 'flat-button'> CONTACT ME  </Link>
            <div className = "buttons">
            <a href="https://github.com/wanderman12345">
            <FontAwesomeIcon icon ={faGithub}  color = '#ffd700' />
            </a>
            <a href="https://github.com/wanderman12345">
            <FontAwesomeIcon icon ={faLinkedin}  color = '#ffd700' />
            </a>
            </div>
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