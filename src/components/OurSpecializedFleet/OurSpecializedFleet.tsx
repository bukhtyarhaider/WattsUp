import { ourSpecializedFleetData } from '../../content'
import styles from './OurSpecializedFleet.module.scss'

const OurSpecializedFleet = () => {
    return (
        <div className={styles.ourSpecializedFleetContainer}>
            <h2 className={styles.heading}>Our Specialized Fleet</h2>
            <p className={styles.description}>Our diverse fleet is equipped to handle a wide range of transportation needs, with specialized expertise in various equipment types.</p>

            <div className={styles.cardsContainer}>
                {ourSpecializedFleetData.map((data) => (
                    <div className={styles.card}>
                        <h2 className={styles.cardId}>{data.id}</h2>
                        <h2 className={styles.cardTitle}>{data.title}</h2>
                        <p className={styles.cardDescription}>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurSpecializedFleet
