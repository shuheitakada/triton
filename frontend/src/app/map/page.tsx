'use client'

import GoogleMapReact from 'google-map-react'

export default function Map() {
  const defaultLatLng = {
    lat: 35.6812358,
    lng: 139.7568251,
  }
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string

  return (
    <>
      <h1>Map Page</h1>
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={defaultLatLng}
          defaultZoom={16}
        />
      </div>
    </>
  )
}
