import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/logo';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetworks';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="contact">
            <Navigation/>
            <Logo/> 
            <ContactForm/>
            <div className="contact-infos">
                <div className="address">
                    <div className="content">
                        <h4>Adresse</h4>
                        <p>37, Quai de Grenelle</p>
                        <p> 75015 PARIS </p>
                    </div>
                </div>
            <div className="phone">
                <div className="content">
                    <h4>Téléphone</h4>
                    <CopyToClipboard text="0606882356" className="hover">
                        <p style={{cursor : 'pointer'}}
                        className="clipboard" onClick={() => {
                            alert('Téléphone copié !')
                        }}>06 06 88 23 56</p>
                    </CopyToClipboard>
                </div>
            </div>
            <div className="email">
                <div className="content">
                    <h4>Email</h4>
                    <CopyToClipboard text="ecepoker@gmail.com" className="hover">
                        <p style={{cursor : 'pointer'}}
                        className="clipboard" onClick={() => {
                            alert('Email copié !')
                        }}>ecepoker@gmail.com</p>
                    </CopyToClipboard>
                </div>
            </div>
            <SocialNetwork />
        </div>
        <ButtonsBottom left={'/project-5'}/>
        </div>
    );
};

export default Contact;