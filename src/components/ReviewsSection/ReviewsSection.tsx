import { useRef } from 'react';
import { reviews } from '../../content';
import ReviewCard from '../ReviewCard/ReviewCard';
import styles from './ReviewsSection.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrowLeft, arrowRight, testimonials } from '../../assets';

const ReviewsSection: React.FC = () => {
    const sliderRef = useRef<Slider>(null);

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
    };

    const goToNext = () => {
        sliderRef.current?.slickNext();
    };

    const settings: SliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ],
        prevArrow: null,
        nextArrow: null
    };

    return (
        <div className={styles.reviewsSectionContainer}>
            <h1 className={styles.heading}>What <span>Clients</span> Say About Us</h1>

            <Slider {...settings} ref={sliderRef}>
                {reviews.map((review) => (
                    <div key={review.name} className={styles.cardContainer}>
                        <ReviewCard image={review.image} name={review.name} title={review.title} description={review.description} />
                    </div>
                ))}
            </Slider>

            <div className={styles.customButtons}>
                <button onClick={goToPrev} className={styles.customPrevButton}><img src={arrowRight} /></button>
                <button onClick={goToNext} className={styles.customNextButton}><img src={arrowRight} /></button>
            </div>

            <div className={styles.redTriagle}>
                <img src={testimonials} />
            </div>
        </div>
    );
}

export default ReviewsSection;

interface Review {
    id: string;
    image: string;
    name: string;
    title: string;
    description: string;
}

interface SliderSettings {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    responsive: ResponsiveSetting[];
    prevArrow: null | JSX.Element;
    nextArrow: null | JSX.Element;
}

interface ResponsiveSetting {
    breakpoint: number;
    settings: {
        slidesToShow: number;
        slidesToScroll: number;
        infinite: boolean;
        dots: boolean;
    };
}