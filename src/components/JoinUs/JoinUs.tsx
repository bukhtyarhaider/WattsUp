import LazyLoad from 'react-lazy-load'
import styles from './JoinUs.module.scss'
import { joinUs } from '../../content'
import { linesTop } from '../../assets'

const JoinUs = () => {
    return (
        <div className={styles.joinUsContainer}>
            <h2 className={styles.heading}>It’s Just <span>3 Steps</span> Away</h2>

            <div className={styles.cardsContainer}>
                {joinUs.map((content) => (
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

export default JoinUs
