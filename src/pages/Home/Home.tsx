import FAQSection from "../../components/FAQSection/FAQSection";
import TruckJourney from "../../components/TruckJourney/TruckJourney";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import Collaborations from "../../components/Collaborations/Collaborations";
import EmpoweringInsights from "../../components/EmpoweringInsights/EmpoweringInsights";
import JoinUs from "../../components/JoinUs/JoinUs";
import OurServices from "../../components/OurServices/OurServices";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <Collaborations />
            <OurServices />
            <JoinUs />
            <EmpoweringInsights />
            <ReviewsSection />
            <WhyChooseUs />
            <FAQSection />
            <TruckJourney />
            <Footer />
        </div>
    )
}

export default Home
