import { ourServices } from '../../content'
import CustomButton from '../CustomButton/CustomButton'
import ServiceCard from '../ServiceCard/ServiceCard'
import styles from './OurServices.module.scss'

const OurServices = () => {
    return (
        <div className={styles.ourServicesContainer}>
            <h2 className={styles.heading}>Our <span>Service</span></h2>
            <p className={styles.description}>Efficient trucking solutions from load finding to future foresight – we've got your logistics covered.</p>

            <div className={styles.cardsContainer}>
                {ourServices.map((service) =>
                    <ServiceCard icon={service.icon} title={service.title} description={service.description} link={service.link} />
                )}
            </div>

            <CustomButton title='Call Us To Know More' variant='secondary' size='medium' />
        </div>
    )
}

export default OurServices
