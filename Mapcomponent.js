import React from 'react';
import './App.css';
import { MapContainer, TileLayer, zoomControl } from 'react-leaflet';
import TestRMdrop from './Testselect'

//import List2 from './list2'
import DummyTest from './dummytest'
//import List4 from './list4'

// Map components
function MapComponent() {

  //Position of tile layer
  const position = [24.7136, 46.6753]


  //Tile Layers and Drop downs display
  return (
    <div>
      <MapContainer center={position} zoom={9} scrollWheelZoom={true} zoomControl={false} >
        <TileLayer
          attribution='&amp;copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       
        <TestRMdrop />
        <DummyTest />
      </MapContainer>
    </div>
  );
}
export default MapComponent;