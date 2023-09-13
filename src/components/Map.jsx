import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import { useMemo } from "react"

export default function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    })
    const center = useMemo(() => ({ lat: 40.730610, lng: -73.935242 }), [])
    return (
        <div>
        {!isLoaded
            ? ( <h1>Loading...</h1> ) 
            : (
            <GoogleMap 
                zoom={10}
                center = {center} 
                mapContainerClassName="map-container"
                >
                <MarkerF position={{ lat: 40.706005, lng: -74.008827 }} />
            </GoogleMap>
            )}
        </div>
    )
}