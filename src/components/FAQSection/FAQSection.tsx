import { useState } from 'react';
import { FAQs } from '../../content'
import Collapse from '../Collapse/Collapse'
import styles from './FAQSection.module.scss'
import LazyLoad from 'react-lazy-load';
import { faqImg } from '../../assets';

const FAQSection = () => {
    const [openAccordionIndices, setOpenAccordionIndices] = useState<number[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenAccordionIndices((prevIndices) => {
            if (prevIndices.includes(index)) {
                // If index is already in the array, remove it to close the accordion
                return prevIndices.filter((i) => i !== index);
            } else {
                // If index is not in the array, add it to open the accordion
                return [...prevIndices, index];
            }
        });
    };
    return (
        <div className={styles.fAQSectionContainer}>
            <h1 className={styles.heading}>Frequently Asked <span>Questions</span></h1>
            <p className={styles.description}>Got Questions? We've Got Answers!</p>

            {FAQs?.map((FAQ, index) => (
                <div className={styles.faqs} key={index}>
                    <Collapse
                        title={FAQ.title}
                        description={FAQ.description}
                        isOpen={openAccordionIndices.includes(index)}
                        onClick={() => toggleAccordion(index)}
                    />
                </div>
            ))}


            <LazyLoad>
                <img className={styles.faqImg} src={faqImg} />
            </LazyLoad>

        </div>
    )
}

export default FAQSection
