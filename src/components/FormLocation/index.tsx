import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { Country, State, City } from 'country-state-city'
import 'leaflet/dist/leaflet.css'
import './FormLocation.scss'

const FormFoodLocation = () => {
  console.log(Country.getCountryByCode('VN'))
console.log(City.getCitiesOfState('VN', 'DN'))
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
      <Form>
        <Row>
          <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputAddress'>
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control type='text' placeholder='Vui lòng nhập tên địa chỉ' />
          </Form.Group>
          <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputCountry'>
            <Form.Label>Quốc gia</Form.Label>
            <Form.Control type='text' placeholder='Vui lòng nhập tên quốc gia' />
          </Form.Group>
          <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputCity'>
            <Form.Label>Thành phố</Form.Label>
            <Form.Control type='text' placeholder='Vui lòng nhập tên thành phố' />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputPostcode'>
            <Form.Label>Mã bưu điện</Form.Label>
            <Form.Control type='text' placeholder='Vui lòng nhập mã bưu điện' />
          </Form.Group>
          <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputLongitude'>
            <Form.Label>longitude</Form.Label>
            <Form.Control type='number' placeholder='Vui lòng nhập longitude' />
          </Form.Group>
          <Form.Group as={Col} className='mb-3' controlId='foodPlaceForm.ControlInputLatitude'>
            <Form.Label>latitude</Form.Label>
            <Form.Control type='number' placeholder='Vui lòng nhập latitude' />
          </Form.Group>
        </Row>
      </Form>
    </>
  )
}

export default FormFoodLocation
