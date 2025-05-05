"use client";
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Simple icon setup for Location
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

interface ChangeViewProps {
  center: [number, number];
}

function ChangeView({ center }: ChangeViewProps) {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center, map]);
  return null;
}

interface MapComponentProps {
  center: [number, number];
  locationName: string;
}

export default function MapComponent({
  center,
  locationName,
}: MapComponentProps) {
  return (
    <MapContainer center={center} zoom={13} className="h-full w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeView center={center} />
      <Marker position={center}>
        <Popup>{locationName}</Popup>
      </Marker>
    </MapContainer>
  );
}
