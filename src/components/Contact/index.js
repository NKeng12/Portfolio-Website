import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimateLetters';
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup  } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const refForm = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l36vg71', 'template_2ek49vi', refForm.current, '4fbMTJF63I1m76fJh'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Contact me for any inquiries, collaborations, internships, or just to say hello! I'm eager to connect, discuss ideas, and gain more experience. 
          </p>
          <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type='text' name='name' placeholder='Name' required />
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email' required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required />
                    </li>
                    <li>
                        <textarea placeholder='Message' name='message' required />
                    </li>
                    <li>
                        <input type='submit' className='flat-button' value='SEND' />
                    </li>
                </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Nicholas Ewan Keng,
            <br />
            Singapore,
            <br />
            10 Choa Chu Keng Grove #06-25, 688207
            <br />
            <span>NicholasEwanKeng@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[1.376590, 103.750710]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[1.376590, 103.750710]}>
                    <Popup>
                        Nicholas lives here
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  );
};

export default Contact;