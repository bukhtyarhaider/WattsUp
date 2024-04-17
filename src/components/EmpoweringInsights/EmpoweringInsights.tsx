import LazyLoad from 'react-lazy-load'
import styles from './EmpoweringInsights.module.scss'
import { insightsImage } from '../../assets'
import { insightsData } from '../../content'

const EmpoweringInsights = () => {
  return (
    <div className={styles.empoweringInsightsContainer}>
      <h2 className={styles.heading}>Empowering <span>Insights</span></h2>
      <p className={styles.description}>Dive into the heart of our achievements with a comprehensive exploration of key statistics. From performance milestones to impactful metrics, our stats section unveils the quantitative story behind our success. Gain valuable insights and witness the numbers that drive our commitment to excellence.</p>

      <LazyLoad className={styles.imageWrapp}>
        <img src={insightsImage} />
      </LazyLoad>

      <div className={styles.insightsContainer}>
        {insightsData.map((insightData) => (
          <div className={styles.insightCard}>
            <h3>{insightData.title}<span>+</span></h3>
            <p>{insightData.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmpoweringInsights
