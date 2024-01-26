import { LatLng, LatLngTuple } from "leaflet"
import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import Navigation from '../components/Navigation';

const position = [14.61966423963173, 121.05112044157404]

export const Test=()=>{
  return(
    <>
    <Navigation/>
    <div className="w-screen h-screen">
    <MapContainer center={position as LatLngTuple} zoom={12.5} scrollWheelZoom={true} className="w-96 h-96">
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position as LatLngTuple}>
      <Popup>
        Remove please <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>

  </>
  )
}