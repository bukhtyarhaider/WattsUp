import LazyLoad from 'react-lazy-load'
import styles from './HeroSection.module.scss'
import { boys, heroImage, insideCar, man, redCapBoy, truckFront } from '../../assets'
import CustomButton from '../CustomButton/CustomButton'

const HeroSection = () => {
    return (
        <div className={styles.heroSectionContainer}>
            <div className={styles.headingContainer}>
                <h1 className={styles.heading}>Experience <span>Unmatched</span> Dispatch Solutions</h1>
                <p className={styles.description}>Unlock top-tier opportunities with our load-finding expertise. Say goodbye to the hassle of load searching and empty miles. Your personalized dispatcher awaits, ready to optimize your journey.</p>
                <CustomButton title='Hire A Dispatcher Today' variant='secondary' size='large' />

                <div className={styles.usersContainer}>
                    <div className={styles.users}>
                        <img className={styles.img1} src={boys} />
                        <img className={styles.img2} src={insideCar} />
                        <img className={styles.img3} src={man} />
                        <img className={styles.img4} src={redCapBoy} />
                        <img className={styles.img5} src={truckFront} />

                        <div className={styles.stats}>
                            <h2>50K+</h2>
                            <p>Joined in already</p>
                        </div>
                    </div>


                </div>
            </div>

            <div className={styles.imageContainer}>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={heroImage} />
                </LazyLoad>
            </div>
        </div>
    )
}

export default HeroSection
