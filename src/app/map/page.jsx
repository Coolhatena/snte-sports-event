import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const position = {
    lat: -3.745,
    lng: -38.523
};

function GoogleMapComponent() {
    return (
        <LoadScript googleMapsApiKey="AIzaSyCXfUgSA_WSRFBJ8srSSwA9tI809doe8bQ">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
                <Marker position={position}></Marker>
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;