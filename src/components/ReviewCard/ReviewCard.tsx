import LazyLoad from 'react-lazy-load';
import styles from './ReviewCard.module.scss';
import { ReviewCardProps } from './ReviewCardProps';

const ReviewCard: React.FC<ReviewCardProps> = ({ image, name, title, description }) => {
    return (
        <div className={styles.reviewCardContainer}>

            <p className={styles.description}>{description}</p>

            <div className={styles.profileContainer}>
                <LazyLoad className={styles.imageWrapp}>
                    <img src={image} alt="profile" />
                </LazyLoad>
                <div className={styles.contentWrapp}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.title}>{title}</p>
                </div>
            </div>

        </div>
    );
};

export default ReviewCard;
