import FAQSection from "../../components/FAQSection/FAQSection";
import TruckJourney from "../../components/TruckJourney/TruckJourney";
import Footer from "../../components/Footer/Footer";
import OurServiceHeader from "../../components/OurServiceHeader/OurServiceHeader";
import ComprehensiveSolutions from "../../components/ComprehensiveSolutions/ComprehensiveSolutions";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";
import OurSpecializedFleet from "../../components/OurSpecializedFleet/OurSpecializedFleet";


const Home = () => {
    return (
        <div>
            <OurServiceHeader />
            <ComprehensiveSolutions />
            <WhatWeOffer />
            <OurSpecializedFleet />
            <FAQSection />
            <TruckJourney />
            <Footer />
        </div>
    )
}

export default Home
