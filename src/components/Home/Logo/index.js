import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import LogoS from '../../../assets/images/logo-N.png';
import './index.scss';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.timeline()
            .to(bgRef.current, { duration: 0, opacity: 1 })
            .from(outlineLogoRef.current, { drawSVG: 0, duration: 2 })
            .fromTo(solidLogoRef.current, { opacity: 0 }, { opacity: 1, delay: 0, duration: 2 });
    }, []);

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt="S" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="http://www.w3.org/2000/svg"
                ref={outlineLogoRef}
                style={{ opacity: 0 }}
            >
                {/* SVG Path remains the same */}
            </svg>
        </div>
    );
};

export default Logo;