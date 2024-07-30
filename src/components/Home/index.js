import React, { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import MathewImage from '../../assets/images/Mathew.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typewriter from 'react-typewriter-effect';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['', 'M', 'a', 't', 'h', 'e', 'w', ' ', 'R', 'a', 'j', 'u'];
    const jobPhrases = ['Python', 'Full Stack', 'ReactJS'];

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(idTimeOut);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I'</span>
                        <span className={`${letterClass} _14`}>m </span>
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                        <br />
                        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Typewriter
                                textStyle={{ color: '#ffffff', fontSize: '1.1em' }}
                                startDelay={2000}
                                cursorColor="#ffd700"
                                multiText={jobPhrases}
                                multiTextDelay={3000} // Increase delay to pause before deletion
                                typeSpeed={300}
                                deleteSpeed={100} // Adjust delete speed as needed
                                multiTextLoop
                            />
                            <span style={{ color: '#ffffff', fontSize: '1.1em', marginLeft: '0.2em' }}>developer</span>
                        </span>
                    </h1>
                    <h2> Computer Engineer </h2>
                    <Link to="/contact" className='flat-button'> CONTACT ME </Link>
                    <div className="buttons">
                        <a href="https://github.com/wanderman12345">
                            <FontAwesomeIcon icon={faGithub} color='#ffd700' />
                        </a>
                        <a href="https://linkedin.com/in/wanderman12345">
                            <FontAwesomeIcon icon={faLinkedin} color='#ffd700' />
                        </a>
                    </div>
                </div>
                <div className='profile-section'>
                    <img src={MathewImage} alt="Mathew" />
                </div>
            </div>
            <Loader type="line-scale" />
        </>
    );
}

export default Home;
