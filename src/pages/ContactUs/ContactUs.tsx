import React from 'react';
import LazyLoad from 'react-lazy-load';
import styles from './ContactUs.module.scss';
import { contactUsImg } from '../../assets';
import Footer from '../../components/Footer/Footer';
import TruckJourney from '../../components/TruckJourney/TruckJourney';
import FAQSection from '../../components/FAQSection/FAQSection';
import GoogleMapComponent from '../../components/GoogleMapComponent/GoogleMapComponent';


const ContactUs: React.FC = () => {

    return (
        <div className={styles.contactUsContainer}>
            <div className={styles.imgContainer}>
                <LazyLoad>
                    <img src={contactUsImg} alt="Contact Us" />
                </LazyLoad>
                <div className={styles.imgContent}>
                    <h2 className={styles.heading}>Contact Us - We're Here to Help</h2>
                    <p className={styles.description}>Whether you're looking to partner with us for your logistics needs, have feedback, or simply want to learn more about our services, our dedicated team is ready to assist you. Fill out the form below, and we'll get back to you as soon as possible. Your satisfaction is our priority.</p>
                </div>
            </div>

            <div className={styles.contentContainer}>
                <div className={styles.formContainer}>
                    <h2 className={styles.formHeading}>Get in <span>Touch</span></h2>
                    <p className={styles.formDescription}>Have questions, inquiries, or need assistance? We're always eager to hear from you.</p>

                    <form className={styles.formContainer}>
                        <input type='text' name='name' placeholder='Name' />
                        <input type='email' name='email' placeholder='Email' />
                        <input type='tel' name='phone' placeholder='Phone Number' />
                        <select name='howDidYouFindUs'>
                            <option value="">How did you find us?</option>
                        </select>
                        <input type='submit' name='SEND' value='SEND' className={styles.submitButton} />
                    </form>

                </div>
                <div className={styles.mapContainer}>
                    <GoogleMapComponent
                        styleOptions={{
                            width: "100%",
                            height: "100%",
                            padding: "10px",
                            borderRadius: "10px",
                        }}
                        center={{
                            lat: 31.4830867,
                            lng: 74.2980841,
                        }}
                    />
                </div>
            </div>
            <FAQSection />
            <TruckJourney />
            <Footer />
        </div>
    );
}

export default ContactUs;
