import React, { useState } from 'react';
import './App.css';
import { GeoJSON } from 'react-leaflet';
import { Icon } from 'leaflet';
import L from "leaflet";
import './App.css'

//RM Infrastructure Imports
import ESwater from './RM data/Existing Storm Water.json'
import Highway from './RM data/Highways.json'
import mjrRoads from './RM data/Major Roads.json'
import bridge from './RM data/Bridges.json'
import tunnel from './RM data/Tunnels.json'
import mjrStrets from './RM data/Major Streets.json'
import slPanels from './RM data/Street Lighting Panels.json'
import slPoles from './RM data/Street Lighting Poles.json'
import washTest from './RM data/Wash Rooms.json'
import municipBuildings from './RM data/Municipal Buildings.json'
import existpark from './RM data/Existing Parks.json'


//Icons in total
import WTIcon from './Icons/Wash Room_2.png'
//import busTest from './Icons/Bus.png';
import mbuildIcon from './Icons/Municipal Building.png'
import exParkIcon from './Icons/Park.png'
import slIcon from './Icons/Transport Control Center.png'

// Map components
function TestRMdrop() {
    // declaring use states
    const [selectLayer, setSelectLayer] = useState(null);

    // Array of GeoJSON objects
    const geoJsonData = [ESwater, Highway, mjrRoads,bridge,tunnel,mjrStrets,slPanels,slPoles,washTest,municipBuildings,existpark];
    
    // On change Values
    const handleLayerChange1 = (event) => {
        setSelectLayer(event.target.value);
    };
    //Icons declaration
    const mBTest = new Icon({
        iconUrl: mbuildIcon,
        iconSize: [20, 20], // size of the icon
    });
    const WRTest =  new Icon({
        iconUrl: WTIcon,
        iconSize: [20, 20], // size of the icon
    });
    const xpTest =  new Icon({
        iconUrl: exParkIcon,
        iconSize: [20, 20], // size of the icon
    });
    const slpTest =  new Icon({
        iconUrl: slIcon,
        iconSize: [20, 20], // size of the icon
    });

    // Colors on change
    const getFeatureStyle = (feature) => {
        // Define dynamic style based on feature properties or selected layer
        if (selectLayer === "0") {
            return { color: '#0070FF', weight: 2 }; // Strom Water
        } else if (selectLayer === "1") {
            return { color: '#FFAA00', weight: 2 }; // Highways
        }
        else if (selectLayer === "3") {
            return { color: '#008C4F', weight: 2 }; // Bridges
        }
        else if (selectLayer === "4") {
            return { color: '#343434', weight: 2 }; //Tunnels
        }
        else if (selectLayer === "5") {
            return { color: '#FF7D18', weight: 2 }; // Major Streets
        }
        // Default style
        return { color: 'black', weight: 1 };
    };

    //Icons on Change
    const getPointIcon = (feature, latlng) => {
        // Define dynamic icon based on feature properties or selected layer
        if (selectLayer === "6") {
            return L.marker(latlng, { icon: slpTest }); // street lightening Panels
        }else if (selectLayer === "7") {
            return L.marker(latlng, { icon: slpTest }); // street lightening Pols
        }
        else if (selectLayer === "8") {
            return L.marker(latlng, { icon: WRTest }); // Washroon
        }
        else if (selectLayer === "9") {
            return L.marker(latlng, { icon: mBTest }); // Municipal Building
        }
        else if (selectLayer === "10") {
            return L.marker(latlng, { icon: xpTest }); // Existing Parks
        }
        // Default icon
        return  L.marker(latlng, { icon: slpTest });
    };

    // Bindpopup on select
    const getBindPopup = (feature, layer) => {

        // Define dynamic popups based on feature properties or selected layer
        if (selectLayer === "0") {
            return layer.bindPopup("CONTRACT NUMBER: " + feature.properties.CONTRACT_N + "<br>MATERIAL: " + feature.properties.MATERIAL + "<br>TO NODE: " + feature.properties.TO_NODE2 + "<br>REGION NUMBER: " + feature.properties.REGION_NO + "<br>FROM NODE: " + feature.properties.FROM_NODE + "<br>MUNICIPALITY NAME: " + feature.properties.MUNIC_NAME).openPopup(); // strom water
        } else if (selectLayer === "1") {
            return layer.bindPopup("Street Name: " + feature.properties.STREETNAME + "<br>District: " + feature.properties.DISTRICT + "<br>Municipality: " + feature.properties.MUNICIPALI + "<br>Municipality: " + feature.properties.STREETID).openPopup(); // Highways
        }
        else if (selectLayer === "2") {
            return layer.bindPopup("Street Name: " + feature.properties.STREETNAME + "<br>District: " + feature.properties.DISTRICT + "<br>Municipality: " + feature.properties.MUNICIPALI + "<br>Municipality: " + feature.properties.STREETID).openPopup();// Major Roads
        }
        else if (selectLayer === "3") {
            return layer.bindPopup("Street Name: " + feature.properties.STREETNAME + "<br>District: " + feature.properties.DISTRICT + "<br>Municipality: " + feature.properties.MUNICIPALI + "<br>Municipality: " + feature.properties.STREETID).openPopup(); // Bridges
        }
        else if (selectLayer === "4") {
            return layer.bindPopup("Street Name: " + feature.properties.STREETNAME + "<br>District: " + feature.properties.DISTRICT + "<br>Municipality: " + feature.properties.MUNICIPALI + "<br>Municipality: " + feature.properties.STREETID + "<br>Municipality: " + feature.properties.STREETCLAS).openPopup(); // Tunnels
        }
        else if (selectLayer === "6") {
            return layer.bindPopup("Panel Name: " + feature.properties.PANEL_NO + "<br>PROVINCE: " + feature.properties.PROVINCE_N + "<br>Total Poles: " + feature.properties.TOTALPOLES + "<br>Neihbhorhood: " + feature.properties.NEIBHORHO + "<br>City Name: " + feature.properties.CITY_NAME + "<br>City Name: " + feature.properties.INSERT_DAT).openPopup(); // Street Lightening Panels
        }
        else if (selectLayer === "8") {
            return layer.bindPopup("" + feature.properties.F______ + "<br>" + feature.properties.F______ + "<br> " + feature.properties.F_).openPopup(); // Washrooms
        }
        else if (selectLayer === "9") {
            return layer.bindPopup("Building Name: " + feature.properties.BULD_NAME + "<br>ID: " + feature.properties.FID_).openPopup(); // Municipal Buildings
        }
        else if (selectLayer === "10") {
            return layer.bindPopup("Name: " + feature.properties.الحي + "<br>Street Name: " + feature.properties.الاسم + "<br>Municipality: " + feature.properties.المسا).openPopup(); // Parks
        }
        // Default icon
        return layer.bindPopup("Panel Name: " + feature.properties.PANEL_NO + "<br>PROVINCE: " + feature.properties.PROVINCE_N + "<br>Total Poles: " + feature.properties.TOTALPOLES + "<br>Neihbhorhood: " + feature.properties.NEIBHORHO + "<br>City Name: " + feature.properties.CITY_NAME + "<br>City Name: " + feature.properties.INSERT_DAT).openPopup();


    };

    return (
        <div>
            <select className="mySelectButton" value={selectLayer} onChange={handleLayerChange1}>
                <option value="">Existing RM Infrastructure</option>
                <option value="0">Existing Strom Water</option>
                <option value="1">Highways</option>
                <option value="2">Major Roads</option>
                <option value="3">Bridges</option>
                <option value="4">Tunnels</option>
                <option value="5">Major Streets</option>
                <option value="6">Street Lightening Panels</option>
                <option value="7">Street Lightening Poles</option>
                <option value="8">Facility - Washroom</option>
                <option value="9">Facility - Municipal Buildings</option>
                <option value="10">Existing Parks</option>
                
            </select>
            {/* layers if needed */}
                {/* Render selected GeoJSON layer */}
                {selectLayer !== null && (
                    <GeoJSON key={selectLayer}
                        data={geoJsonData[selectLayer]}
                        style={getFeatureStyle}
                        pointToLayer={(feature, latlng) => getPointIcon(feature, latlng)}
                        onEachFeature={(feature, layer) => getBindPopup(feature, layer)}
                    />
                )}

           
        </div>
    );
}

export default TestRMdrop;