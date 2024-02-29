import { useEffect, useState } from 'react'
import {faPython, faCss3, faJava, faJsSquare, faReact,} from '@fortawesome/free-brands-svg-icons'
import CSharpLogo from '../../assets/images/C-sharp.png';
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimateLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);


    
  }, []);

  const downloadResume = () => {
    const resumeUrl = '/Resume.pdf';
  
    window.open(resumeUrl, '_blank');

    console.log('Works')
  };

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Welcome to my digital portfolio! I'm Nicholas, a recent graduate in Business and Financial Technology, passionate about merging technology with financial innovation. My academic background covers areas like data analysis, web development, back end development, cloud computing, and blockchain.
          </p>
          <p align="LEFT">
          Beyond finance, I have a strong interest in music and sound engineering. This dual passion reflects my versatility and ability to thrive in both analytical and creative realms. Whether exploring the intricacies of sound design or tackling complex financial challenges, I bring a unique perspective to my work.
          </p>
          <p>
          This portfolio showcases my educational journey and my projects that I've done so far. Feel free to contact me as you look through my portfolio; I'm eager to hear your thoughts, insights, or potential collaboration ideas. Looking forward to engaging discussions and potential collaborations!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#03Fc0F" />
            </div>
            <div className="face2">
              {}
              <img src={CSharpLogo} alt="C# Logo" style={{ width: '60%', height: '60%' }} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#FC0303" />
            </div>
          </div>
        </div>

        <div className="download-resume">
          <button onClick={downloadResume}>Download My  Resume</button>
        </div>

      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
