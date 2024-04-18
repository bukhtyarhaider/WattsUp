import LazyLoad from 'react-lazy-load'
import styles from './WhatWeOffer.module.scss'
import { redTruck, redTruckFront } from '../../assets'
import CustomButton from '../CustomButton/CustomButton'

const WhatWeOffer = () => {
    return (
        <div className={styles.whatWeOfferContainer}>
            <div className={styles.wrapper}>
                <div className={styles.contentContainer}>
                    <h2 className={styles.heading}>Fleet Management Solutions</h2>
                    <p className={styles.description}>Optimize your fleet's performance with our comprehensive management solutions. From route planning to maintenance scheduling, we provide the tools and expertise to enhance efficiency and minimize downtime, ensuring your fleet operates at its peak.</p>
                    <CustomButton title='Contact Us' variant='primary' size='medium' />
                </div>
                <div className={styles.imageContainer}>
                    <LazyLoad className={styles.imgWrapp}>
                        <img src={redTruck} />
                    </LazyLoad>
                </div>
            </div>

            <div className={`${styles.wrapper} ${styles.consultingWrapper}`}>
                <div className={styles.imageContainer}>
                    <LazyLoad className={styles.imgWrapp}>
                        <img src={redTruckFront} />
                    </LazyLoad>
                </div>
                <div className={styles.consultingContentContainer}>
                    <h2 className={styles.heading}>Consulting and Advisory Services</h2>
                    <p className={styles.description}>Gain strategic insights and guidance from our experienced consultants to drive your business forward. Whether you need assistance with regulatory compliance, market analysis, or operational optimization, we offer personalized consulting services tailored to your specific needs and goals.</p>
                    <CustomButton title='Contact Us' variant='primary' size='medium' />
                </div>

            </div>
        </div>
    )
}

export default WhatWeOffer
