"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "leaflet/dist/leaflet.css"; // Make sure this is imported here or globally
import { ClockLoader } from "react-spinners";
import { FaSearch } from "react-icons/fa";

// Dynamically import the MapComponent
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export default function Map() {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState<[number, number]>([6.4631, 3.5775]);
  const [locationName, setLocationName] = useState(
    "No 10, Kingsbay Estate Lekki county Homes, Lekki, Lagos state, Nigeria"
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const newPos: [number, number] = [
          parseFloat(data[0].lat),
          parseFloat(data[0].lon),
        ];
        setPosition(newPos);
        setLocationName(data[0].display_name);
      }
      console.log(data);
      console.log(data[0].display_name);
    } catch (error) {
      console.error("Search failed:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen space-y-6 md:m-12 mx-6 mb-12">
      {/* Search Bar */}
      <div className="p-4 bg-white shadow-md rounded-lg">
        <form
          onSubmit={handleSearch}
          className="md:flex md:flex-row flex flex-col gap-2 text-background">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search location..."
            className="flex-1 p-2 border rounded text-black"
          />
          <button
            type="submit"
            className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 gap-4"
            disabled={isLoading}>
            {isLoading ? <ClockLoader size={23} color="white" /> : "Search"}
            <FaSearch />
          </button>
        </form>
        {locationName && (
          <p className="inline flex-col text-lg mt-4 text-black font-normal text-md">
            <span className="font-bold text-xl">Location: </span> {locationName}
          </p>
        )}
      </div>

      {/* Map */}
      <div className="flex-1">
        <MapComponent center={position} locationName={locationName} />
      </div>
    </div>
  );
}
