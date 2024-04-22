import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

interface GoogleMapComponentProps {
    styleOptions: React.CSSProperties;
    center?: {
        lat: number;
        lng: number;
    };
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({
    styleOptions,
    center = {
        lat: 31.4830867, // Example latitude
        lng: 74.2980841, // Example longitude
    },
}) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyA07lD6jhIN2OwvpX1cXsj5NAiN3T5pDjk",
    });

    const placeHolderStyles: React.CSSProperties = {
        ...styleOptions,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ccc",
    };

    if (loadError) {
        return <div style={placeHolderStyles}>Error loading Google Maps</div>;
    }

    if (!isLoaded) {
        return <div style={placeHolderStyles}>Loading Google Maps...</div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={styleOptions}
            center={center}
            zoom={12}
            options={{
                disableDefaultUI: true, // Disable default controls
                zoomControl: true,
            }}
        >
            <Marker position={center} />
        </GoogleMap>
    );
};

export default GoogleMapComponent;
