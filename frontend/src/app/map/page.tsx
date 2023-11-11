'use client'

import GoogleMapReact from 'google-map-react'
import { useState } from 'react'

export default function Map() {
  const [map, setMap] = useState<any>()
  const [maps, setMaps] = useState<any>()
  const [geocoder, setGeocoder] = useState<google.maps.Geocoder>()
  const [address, setAddress] = useState<any>()
  const [marker, setMarker] = useState<any>()

  const defaultLatLng = {
    lat: 35.6812358,
    lng: 139.7568251,
  }
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string

  const handleApiLoaded = ({ map, maps }: { map: google.maps.Map; maps: any }) => {
    setMap(map)
    setMaps(maps)
    setGeocoder(new maps.Geocoder())
  }

  const search = () => {
    if (!geocoder) {
      return
    }

    geocoder.geocode({ address }, (results: any, status: any) => {
      if (status === google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location)
        if (marker) {
          marker.setMap(null)
        }
        setMarker(
          new maps.Marker({
            map,
            position: results[0].geometry.location,
          }),
        )
      } else {
        alert('Geocode was not successful for the following reason: ' + status)
      }
    })
  }

  const setLatLng = ({ lat, lng }: { lat: number; lng: number; event: any }) => {
    if (marker) {
      marker.setMap(null)
    }
    const latLng = {
      lat,
      lng,
    }
    setMarker(
      new maps.Marker({
        map,
        position: latLng,
      }),
    )
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    search()
  }

  return (
    <>
      {/* 検索フォーム */}
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setAddress(e.target.value)}
          className='shadow border text-gray-700 rounded p-2 m-1 mr-0'
        />
        <button
          type='button'
          onClick={search}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2 m-1 ml-0'
        >
          Search
        </button>
      </form>
      {/* マップ */}
      <div style={{ height: '800px', width: '800px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
          onGoogleApiLoaded={handleApiLoaded}
          onClick={setLatLng}
        />
      </div>
    </>
  )
}
