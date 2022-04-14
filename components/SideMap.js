import Map from 'react-map-gl';
import { useEffect, useState } from 'react';

const SideMap = () => {
    const [viewPort, setViewPort] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 9
    })
    useEffect(() => {
        const headline = document.querySelector("div.mapboxgl-control-container > div.mapboxgl-ctrl-bottom-right > div > div");


    }, [])
    return (
        <div>
            <Map
                style={{width: 600, height: 400}}
                mapStyle="mapbox://styles/qualyval-antar/cl1yxg1jl009u14mqdrgwt9p5"
                mapboxAccessToken={process.env.MAP_BOX_KEY}
                onViewPortChange={(nextViewPort) => {
                    setViewPort(nextViewPort)
                }}
                {...viewPort}
            />
        </div>
    );
};

export default SideMap;

/* 



mapbox://styles/qualyval-antar/cl1ytzi9n007u15o9hdz17mzd
*/