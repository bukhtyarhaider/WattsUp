import LazyLoad from 'react-lazy-load'
import styles from './ComprehensiveSolutions.module.scss'
import { comprehensiveSolutions } from '../../content'
import { linesTop } from '../../assets'

const ComprehensiveSolutions = () => {
    return (
        <div className={styles.comprehensiveSolutionsContainer}>
            <h2 className={styles.heading}>Our <span>Comprehensive</span> Solutions</h2>

            <div className={styles.cardsContainer}>
                {comprehensiveSolutions.map((content) => (
                    <div className={styles.card}>
                        <LazyLoad className={styles.imageWrapp}>
                            <img src={content.icon} />
                        </LazyLoad>
                        <h3>{content.title}</h3>
                        <p>{content.description}</p>
                    </div>
                ))}
            </div>

            <LazyLoad>
                <img className={styles.linesTop} src={linesTop} />
            </LazyLoad>
        </div>
    )
}

export default ComprehensiveSolutions
