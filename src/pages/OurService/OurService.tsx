import FAQSection from "../../components/FAQSection/FAQSection";
import TruckJourney from "../../components/TruckJourney/TruckJourney";
import Footer from "../../components/Footer/Footer";
import ComprehensiveSolutions from "../../components/ComprehensiveSolutions/ComprehensiveSolutions";
import OurServiceHeader from "../../components/OurServiceHeader/OurServiceHeader";
import OurSpecializedFleet from "../../components/OurSpecializedFleet/OurSpecializedFleet";
import WhatWeOffer from "../../components/WhatWeOffer/WhatWeOffer";



const OurService = () => {
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

export default OurService;
