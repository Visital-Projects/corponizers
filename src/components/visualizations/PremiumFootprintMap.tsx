'use client';

import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

const hubs = [
  { name: 'Mumbai (HQ)', coordinates: [72.8777, 19.0760] as [number, number], isHQ: true },
  { name: 'Delhi NCR', coordinates: [77.2090, 28.6139] as [number, number], isHQ: false },
  { name: 'Bangalore', coordinates: [77.5946, 12.9716] as [number, number], isHQ: false },
  { name: 'Hyderabad', coordinates: [78.4867, 17.3850] as [number, number], isHQ: false },
  { name: 'Chennai', coordinates: [80.2707, 13.0827] as [number, number], isHQ: false }
];

export function PremiumFootprintMap() {
  const [geoData, setGeoData] = useState<unknown>(null);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading India TopoJSON", err));
  }, []);

  if (!geoData) {
    return <div className="h-[600px] flex items-center justify-center text-corponizers-blue uppercase tracking-widest text-xs font-bold">Initializing Map...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1200,
          center: [80, 22]
        }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Render Map Base */}
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#ffffff"
                stroke="#bae6fd"
                strokeWidth={0.75}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#f0f9ff', outline: 'none', transition: 'all 250ms' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {/* Render Hubs */}
        {hubs.map(({ name, coordinates, isHQ }) => (
          <Marker key={name} coordinates={coordinates}>
            <g transform="translate(0, 0)">
              <circle cx={0} cy={0} r={4} fill={isHQ ? '#dc2626' : '#0284c7'} />
              <circle cx={0} cy={0} r={12} fill={isHQ ? '#dc2626' : '#0284c7'} opacity={0.15} />
            </g>
            <text
              textAnchor="start"
              x={12}
              y={4}
              style={{ fontFamily: "system-ui", fill: isHQ ? '#dc2626' : '#1e40af', fontSize: "12px", fontWeight: "900", letterSpacing: "1px" }}
            >
              {name.toUpperCase()}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
