import LazyLoad from 'react-lazy-load';
import styles from './ServiceCard.module.scss';
import { ServiceCardProps } from './ServiceCardProps';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
    return (
        <div className={styles.serviceCardContainer}>
            <div className={styles.imageContainer}>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={icon} alt="Service Icon" />
                </LazyLoad>
            </div>

            <div className={styles.contentContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.description}>{description}</p>
                <a href={link} className={styles.link}>Read More...</a>
            </div>
        </div>
    );
};

export default ServiceCard;
