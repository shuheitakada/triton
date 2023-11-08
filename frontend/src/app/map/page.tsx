'use client'

import GoogleMapReact from 'google-map-react'
import { useState } from 'react'

export default function Map() {
  const [map, setMap] = useState<google.maps.Map>()
  const [maps, setMaps] = useState<any>()
  const [marker, setMarker] = useState<any>()

  const defaultLatLng = {
    lat: 35.6812358,
    lng: 139.7568251,
  }
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string

  const handleApiLoaded = ({
    map,
    maps,
  }: {
    map: google.maps.Map
    maps: google.maps.MarkerLibrary
  }) => {
    setMap(map)
    setMaps(maps)
    setMarker(
      new maps.Marker({
        map,
        position: defaultLatLng,
      }),
    )
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

  return (
    <>
      <h1>Map Page</h1>
      <div style={{ height: '500px', width: '500px' }}>
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
