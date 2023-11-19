'use client'

import Script from 'next/script'

// Web Componentsを使って地図を表示してみた
// see: https://github.com/googlemaps/extended-component-library
// see: https://developers.google.com/maps/documentation/javascript/web-components/overview?hl=ja
export default function Map2() {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string

  return (
    <>
      <Script
        // TODO: APIキーがブラウザ側に見えないようにする必要あり
        src={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=maps,marker&v=beta`}
      />
      <h1>Map 2</h1>
      {/* 型エラーの直し方が分からないのでignoreしておく */}
      {/* @ts-ignore */}
      <gmp-map
        style={{ height: '800px', width: '800px' }}
        center='37.4220656,-122.0840897'
        zoom='10'
        map-id='d748bec0dd237e1a'
      />
    </>
  )
}
