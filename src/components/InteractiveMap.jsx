"use client"

import { useEffect, useRef, useState } from "react"
import { plantData } from "../lib/plant-data"

export default function InteractiveMap({ filters }) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)
  const markersRef = useRef([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    let L
    const initMap = async () => {
      try {
        L = (await import("leaflet")).default
        await import("leaflet/dist/leaflet.css")

        // Fix Leaflet default marker icon issue
        delete L.Icon.Default.prototype._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
          iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
          shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
        })

        if (!mapInstanceRef.current && mapRef.current) {
          mapInstanceRef.current = L.map(mapRef.current).setView([33.0, 44.0], 6)

          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 19,
          }).addTo(mapInstanceRef.current)
        }

        // Clear existing markers
        markersRef.current.forEach((marker) => marker.remove())
        markersRef.current = []

        // Filter plants
        const filteredPlants = plantData.filter((plant) => {
          if (filters.region !== "all" && plant.region !== filters.region) return false
          if (filters.status !== "all" && plant.status !== filters.status) return false
          if (filters.plantType !== "all" && plant.name !== filters.plantType) return false
          return true
        })

        // Add markers
        filteredPlants.forEach((plant) => {
          const statusColors = {
            Healthy: "#22c55e",
            Blooming: "#eab308",
            Stressed: "#ef4444",
            Dormant: "#78716c",
          }

          const icon = L.divIcon({
            className: "custom-marker",
            html: `
              <div style="
                background-color: ${statusColors[plant.status]};
                width: 24px;
                height: 24px;
                border-radius: 50%;
                border: 3px solid white;
                box-shadow: 0 2px 8px rgba(0,0,0,0.3);
              "></div>
            `,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          })

          const marker = L.marker([plant.lat, plant.lng], { icon })
            .addTo(mapInstanceRef.current)
            .bindPopup(`
              <div style="padding: 16px; font-family: system-ui, -apple-system, sans-serif;">
                <h3 style="font-size: 18px; font-weight: 600; margin: 0 0 12px 0; color: #1c1917;">${plant.name}</h3>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #57534e; font-size: 14px;">Status:</span>
                    <span style="
                      background-color: ${statusColors[plant.status]}20;
                      color: ${statusColors[plant.status]};
                      padding: 2px 8px;
                      border-radius: 12px;
                      font-size: 13px;
                      font-weight: 500;
                    ">${plant.status}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #57534e; font-size: 14px;">Temperature:</span>
                    <span style="font-weight: 500; color: #1c1917; font-size: 14px;">${plant.temperature}°C</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #57534e; font-size: 14px;">Humidity:</span>
                    <span style="font-weight: 500; color: #1c1917; font-size: 14px;">${plant.humidity}%</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #57534e; font-size: 14px;">Month:</span>
                    <span style="font-weight: 500; color: #1c1917; font-size: 14px;">${plant.month}</span>
                  </div>
                  <div style="display: flex; justify-content: space-between;">
                    <span style="color: #57534e; font-size: 14px;">Region:</span>
                    <span style="font-weight: 500; color: #1c1917; font-size: 14px;">${plant.region}</span>
                  </div>
                  <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #e7e5e4;">
                    <div style="color: #57534e; font-size: 13px; margin-bottom: 4px;">Planting Time:</div>
                    <div style="font-weight: 500; color: #1c1917; font-size: 14px;">${plant.planting_time}</div>
                  </div>
                  
                </div>
              </div>
            `)

          markersRef.current.push(marker)
        })
      } catch (error) {
        console.error("[v0] Error loading Leaflet:", error)
      }
    }

    initMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [filters, isClient])

  if (!isClient) {
    return (
      <div className="flex h-[600px] items-center justify-center rounded-xl bg-muted">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    )
  }

  return <div ref={mapRef} className="h-[600px] w-full rounded-xl" />
}
