import React, { useState } from 'react';
import './App.css';
import { GeoJSON } from 'react-leaflet';
import L from "leaflet";
//import axios from 'axios';

// Map components
function DummyTest() {

    // declaring use states
    const [urselectLayer, ursetSelectLayer] = useState(null);

    // Normal test code
    var wfs1 =  L.Geoserver.wfs("http://localhost:8080/geoserver/Infrastructure_Layers/wms", {
        layers: "Infrastructure_Layers:01_Mega_Projects",
      });
   
    // Array of GeoJSON objects
    const geoJsonDataUR = [
        wfs1
    ];
    

    // On change Values
    const handleLayerChange3 = (event) => {
        ursetSelectLayer(event.target.value);
    };

    // Colors on change for lines and polygons
    const urgetFeatureStyle = (feature) => {
        // Define dynamic style based on feature properties or selected layer
        if (urselectLayer === "0") {
             return { color: '#FF00C5', weight: 2 }; // Mega Project1
        
        } 


        // Default style
        return { color: 'black', weight: 1 };
    };

    
    return (
        <div>
            <select className="mySelectButton" value={urselectLayer} onChange={handleLayerChange3}>
                <option value="">Existing RM Infrastructure</option>
                <option value="0">01 Mega Projects</option>
                <option value="1">02 MegaProjects Line</option>
                <option value="2">Agricultural</option>
                <option value="3">Business Professional</option>
                <option value="4">Cemetries</option>
                <option value="5">Commercial</option>
                <option value="6">Communications Public Facilities</option>

            </select>
            {/* layers if needed */}
            {/* Render selected GeoJSON layer */}
            {urselectLayer !== null && (
                <GeoJSON key={urselectLayer}
                    data={geoJsonDataUR[urselectLayer]}
                    style={urgetFeatureStyle}
                />
            )}


        </div>
    );
}

export default DummyTest;