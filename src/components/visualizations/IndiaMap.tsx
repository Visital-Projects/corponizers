'use client';

import React, { useEffect, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

const markers = [
  { name: 'Mumbai', coordinates: [72.8777, 19.0760] as [number, number] },
  { name: 'Delhi NCR', coordinates: [77.2090, 28.6139] as [number, number] },
  { name: 'Bangalore', coordinates: [77.5946, 12.9716] as [number, number] },
  { name: 'Hyderabad', coordinates: [78.4867, 17.3850] as [number, number] },
  { name: 'Chennai', coordinates: [80.2707, 13.0827] as [number, number] },
  { name: 'Kolkata', coordinates: [88.3639, 22.5726] as [number, number] },
  { name: 'Pune', coordinates: [73.8567, 18.5204] as [number, number] }
];

export function IndiaMap() {
  const [geoData, setGeoData] = useState<unknown>(null);

  useEffect(() => {
    fetch('/india-states.json')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error("Error loading India TopoJSON", err));
  }, []);

  if (!geoData) {
    return <div className="h-[600px] flex items-center justify-center text-slate-400">Loading Map...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto h-[600px] relative">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [80, 22] // Center over India
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth={0.5}
                style={{
                  default: { outline: 'none' },
                  hover: { fill: '#e2e8f0', outline: 'none', transition: 'all 250ms' },
                  pressed: { outline: 'none' },
                }}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
              className="cursor-pointer hover:stroke-[#0369a1] transition-colors"
            >
              <circle cx="12" cy="10" r="3" fill="#0284c7" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={10}
              style={{ fontFamily: "system-ui", fill: "#0f172a", fontSize: "10px", fontWeight: "bold" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}
