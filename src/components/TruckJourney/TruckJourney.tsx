import CustomButton from '../CustomButton/CustomButton'
import styles from './TruckJourney.module.scss'

const TruckJourney = () => {
    return (
        <div className={styles.truckJourneyContainer}>
            <h1 className={styles.heading}>Start Your <span>Truck Journey </span>Today</h1>
            <p className={styles.description}>Sign up for our newsletter to receive the latest industry insights, exclusive offers, and tips to kickstart your trucking journey. Don't miss out on valuable updates – subscribe now and stay ahead of the competition!</p>

            <div className={styles.inputContainer}> 
                <input type='text' placeholder='Enter your mail address' />
            </div>
            <div className={styles.buttonWrapp}>
                <CustomButton title="SEND" variant='secondary' size='small' />
            </div>
        </div>
    )
}

export default TruckJourney
