
import React from 'react';
import LazyLoad from 'react-lazy-load';
import styles from './AboutUs.module.scss';
import { aboutUsImg } from '../../assets';
import { aboutUsData } from '../../content';

interface AboutUsInfo {
    heading: string;
    description: string;
}

const AboutUs = () => {
    return (
        <div className={styles.aboutUsContainer}>
            <div className={styles.imgContainer}>
                <LazyLoad>
                    <img src={aboutUsImg} alt="About Us" />
                </LazyLoad>
                <div className={styles.imgContent}>
                    <h2 className={styles.heading}>About Us - Our Comprehensive Solutions</h2>
                    <p className={styles.description}>From efficient load finding to meticulous paperwork exchange, we have everything you need to streamline your logistics process and keep your business moving forward.</p>
                </div>
            </div>

            <div className={styles.contentContainer}>
                {
                    aboutUsData.map((data: AboutUsInfo, index: number) => (
                        <React.Fragment key={index}>
                            <h2 className={styles.contentHeading}>{data.heading}</h2>
                            <p className={styles.contentDescription}>{data.description}</p>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}

export default AboutUs;
