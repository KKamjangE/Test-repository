import React, { useState } from "react";
// We will use these things from the lib
// https://react-google-maps-api-docs.netlify.com/
import {
    useLoadScript,
    GoogleMap,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

export default function Map() {
    const key = "AIzaSyCKEtHF9EkurpeOuXrK7D7ix3LDVPI_pgM";
    const [oms, setOms] = useState(null);
    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [infoOpen, setInfoOpen] = useState(false);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
    });

    React.useEffect(() => {
        console.log(selectedPlace, selectedMarker);
    }, [selectedPlace, selectedMarker]);

    // React.useCallback(function onLoad(mapInstance) {
    //   // do something with map Instance
    // }, []);
    const center = { lat: 42.34874790000005, lng: -71.0962215 };
    const markers = [
        { lat: 42.34874790000005, lng: -71.0962215, title: "One" },
        { lat: 42.34874790000005, lng: -71.0962215, title: "Two" },
        { lat: 42.34874790000005, lng: -71.0962215, title: "Three" },
        { lat: 42.34874790000005, lng: -71.0962215, title: "Four" },
        { lat: 42.34874790000005, lng: -71.0965215, title: "One" },
        { lat: 42.34874790000005, lng: -71.0965215, title: "Two" },
        { lat: 42.34874790000005, lng: -71.0965215, title: "Three" },
        { lat: 42.34874790000005, lng: -71.0965215, title: "Four" },
    ];

    const onLoad = (map) => {};

    const markerClickHandler = (event, place, marker) => {
        // Remember which place was clicked
        // if (infoOpen) {
        setInfoOpen(false);
        // }
        setSelectedMarker(marker);
        setSelectedPlace(place);

        setInfoOpen(true);
    };

    const renderMap = () => {
        return (
            <GoogleMap
                onLoad={onLoad}
                center={center}
                zoom={19}
                mapContainerStyle={{
                    height: "400px",
                    width: "800px",
                }}
            >
                {markers.map((location, i) => (
                    <Marker
                        key={i}
                        title={location.title}
                        position={location}
                        onLoad={(marker) => console.log(marker)}
                    />
                ))}
                {infoOpen && selectedMarker && (
                    <InfoWindow
                        // position={selectedPlace}
                        anchor={selectedMarker}
                        onCloseClick={() => setInfoOpen(false)}
                    >
                        <div>{selectedPlace.title}</div>
                    </InfoWindow>
                )}
            </GoogleMap>
        );
    };
    if (loadError) {
        console.log(loadError);
        return <div>Map cannot be loaded right now, sorry.</div>;
    }
    return isLoaded ? renderMap() : null;
}
