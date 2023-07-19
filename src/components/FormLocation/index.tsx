import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './FormLocation.scss'

const FormFoodLocation = () => {
  return (
    <>
      <div className='Mymap mb-3'>
        <MapContainer center={[15.9795125, 108.207187]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[15.9795, 108.2071]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <Form></Form>
    </>
  )
}

export default FormFoodLocation
