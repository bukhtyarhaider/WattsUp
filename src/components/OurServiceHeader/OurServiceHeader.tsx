import LazyLoad from 'react-lazy-load'
import styles from './OurServiceHeader.module.scss'
import { serviceHeaderImage } from '../../assets'

const OurServiceHeader = () => {
    return (
        <div className={styles.OurServiceHeaderContaioner}>
            <h1 className={styles.heading}>Tailored Solutions for Your  <span>Trucking Needs</span></h1>
            <p className={styles.description}>Explore our comprehensive range of services designed to streamline every aspect of your trucking operations. From load finding to paperwork exchange, we offer tailored solutions to optimize efficiency and drive your business forward.</p>

            <LazyLoad className={styles.imageWrapp}>
                <img src={serviceHeaderImage} />
            </LazyLoad>
        </div>
    )
}

export default OurServiceHeader
