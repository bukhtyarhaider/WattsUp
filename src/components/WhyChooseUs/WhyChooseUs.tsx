import LazyLoad from 'react-lazy-load'
import styles from './WhyChooseUs.module.scss'
import { whyChooseUs } from '../../assets'
import { whyChooseUsData } from '../../content'

const WhyChooseUs = () => {
    return (
        <div className={styles.whyChooseUsContainer}>
            <div className={styles.imageContainer}>
                <LazyLoad>
                    <img src={whyChooseUs} alt='whyChooseUs' />
                </LazyLoad>
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.heading}>Why Choose <span>Us?</span></h2>
                <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis eleifend quam, non efficitur nisi mattis quis.</p>

                {whyChooseUsData.map((data) => (
                    <div className={styles.section}>
                        <LazyLoad>
                            <img src={data.icon} />
                        </LazyLoad>
                        <div className={styles.sectionContent}>
                            <h4 className={styles.sectionHeading}>{data.title}</h4>
                            <p>{data.description}</p>
                            <a href={data.link} className={styles.link}>Read More...</a>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default WhyChooseUs
