import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJsSquare, faReact, faSass, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'
import { faPython } from '@fortawesome/free-brands-svg-icons';
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work'
import UCSDIcon from '../../../src/assets/images/UCSD.png'
import UCSCIcon from '../../../src/assets/images/ucsc.png'
import BasicCard from '../Card';
import Nutanix from '../../../src/assets/images/Nutanix.png'
import PDFViewer from '../PDFViewer';
import { Button } from '@mui/material';
import { saveAs } from 'file-saver';
import samplePdf from '../../../src/assets/images/Mathew.pdf'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const idTimeOut = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)}, [])

    const downloadPdf = () => {
        saveAs(samplePdf, 'Mathew_Raju_Resume.pdf');
    };

    return (
        <>
        <div className = 'container about-page'>
            <div className = 'text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx = {15}
                     />
                </h1>
                <div className = "description">
                    <p>
                    I'm a Computer Engineer with interests in Full-stack Development, ML/AI and Robotics! A wide range of topics because there's a lot to enjoy!
                    </p>
                    <p>
                    Currently I'm pursuing my masters in Computer Science at the University Of California San Diego, Go Tritons!
                    </p>
                    <p>
                    I consider myself to be a focused, curious and outgoing person! In my freetime, I watch formula one and love a good workout!
                    </p>
                </div>
            <div className = "Resume">
                <Button variant="contained"  sx ={{ marginTop: '15px',
                padding: '8px 30px',
                fontSize: '13px',
                backgroundColor: '#022c43',
                border: '2px solid #ffd700', // Adding border color
                color: '#ffd700',
                '&:hover': {
                    background: '#ffd700',
                    color: '#333'
                }
                }}
                onClick={downloadPdf}>
                Resume
                <FontAwesomeIcon icon={faDownload} className="download-icon" style = {{zIndex: '1', fontSize: '10%', marginBottom: '2px', marginLeft: '12px', fontSize: '120%', color: '#ffd700',  }} />
                </Button>
          </div>
            </div>
            {/* <div className = 'stage-cube-cont'>
                <div className  ='cubespinner'>
                    <div className = 'face1'>
                        <FontAwesomeIcon icon ={faLinux} color = '#00000' />
                    </div>
                    <div className = 'face2'>
                        <FontAwesomeIcon icon ={faHtml5} color = '#F06529' />
                    </div>
                    <div className = 'face3'>
                        <FontAwesomeIcon icon ={faSass} color = '#CC6699' />
                    </div>
                    <div className = 'face4'>
                        <FontAwesomeIcon icon ={faReact} color = '#5ED4F4' />
                    </div>
                    <div className = 'face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color = '#EFd81D' />
                    </div>
                    <div className = 'face6'>
                        <FontAwesomeIcon icon ={faGitAlt} color = '#EC4D28' />
                    </div>
                </div>
            </div> */}
            <div className='Timeline'>
                    <h2><AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                        idx = {19}
                     /></h2>
                    <p> My academic journey </p>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentClassName="timeline-element-content"
                            contentArrowClassName="timeline-element-content-arrow"
                            date="2011 - present"
                            iconClassName="timeline-element-icon"
                            icon={<img src={UCSDIcon} alt="UCSD Icon" style={{ width: '100%', height: '100%' }} />}
                        >
                            <h3 className="vertical-timeline-element-title">UC San Diego </h3>
                            <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
                            <p>
                            Pursuing my masters in Computer Engineering with the CSE Department.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentClassName="timeline-element-content"
                            contentArrowClassName="timeline-element-content-arrow"
                            date="2011 - present"
                            iconClassName="timeline-element-icon"
                            icon={<img src={UCSCIcon} alt="UCSD Icon" style={{ width: '111%', height: '110%', marginLeft: '-3px', marginTop: '-4px' }} />}
                        >
                            <h3 className="vertical-timeline-element-title">UC Santa Cruz</h3>
                            <h4 className="vertical-timeline-element-subtitle">Santa Cruz, CA</h4>
                            <p>
                            Completed my bachelors of science with highest honors in Copmuter Engineering.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
                {/* <div className = "WorkExperience">
                <h2><AnimatedLetters
                        letterClass={letterClass}
                        strArray = {['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                        idx = {18}
                /></h2>
                </div> */}
                {/* <PDFViewer file="/path/to/your/resume.pdf" /> */}
                {/* <BasicCard/> */}
        </div>
        <Loader type = "line-scale"/>
        </>
    )
}

export default About



