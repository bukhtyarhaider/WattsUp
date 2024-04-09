import LazyLoad from 'react-lazy-load'
import styles from './Collaborations.module.scss'
import { monday, morphius, openzepeline, oracle, protonet, samsumg, segment } from '../../assets'

const Collaborations = () => {
    return (
        <div className={styles.collaborationsContainer}>
            <p>In collaborate with Industry Leaders for Seamless Logistics Solutions</p>
            <div className={styles.logosContainer}>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={openzepeline} />
                </LazyLoad>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={oracle} />
                </LazyLoad>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={morphius} />
                </LazyLoad>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={samsumg} />
                </LazyLoad>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={monday} />
                </LazyLoad>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={segment} />
                </LazyLoad>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={protonet} />
                </LazyLoad>
            </div>
        </div>
    )
}

export default Collaborations
