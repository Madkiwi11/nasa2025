"use client"

import { useState } from "react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Filter, Flower2 } from "lucide-react"
import FilterPanel from "./FilterPanel"
import InteractiveMap from "./InteractiveMap"

export default function MapSection() {
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    region: "all",
    status: "all",
    plantType: "all",
  })

  return (
    <section id="map" className="py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-pink-50 to-yellow-50 opacity-50" />

      <div className="floating-decoration top-10 right-10 animate-float-slow">
        <Flower2 className="h-24 w-24 text-pink-300/30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="mb-12 text-center animate-slide-down">
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
            <span className="gradient-text">Interactive</span> Plant Map
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Explore real-time plant health data across Iraq's diverse regions
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-1.5 status-badge status-healthy">
                <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium">Healthy</span>
              </div>
              <div className="flex items-center gap-1.5 status-badge status-blooming">
                <div className="h-3 w-3 rounded-full bg-yellow-500 animate-pulse" />
                <span className="font-medium">Blooming</span>
              </div>
              <div className="flex items-center gap-1.5 status-badge status-stressed">
                <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                <span className="font-medium">Stressed</span>
              </div>
              <div className="flex items-center gap-1.5 status-badge status-dormant">
                <div className="h-3 w-3 rounded-full bg-stone-500 animate-pulse" />
                <span className="font-medium">Dormant</span>
              </div>
            </div>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-lg shadow-purple-500/30"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          {showFilters && (
            <Card className="mb-9 p-6 glass-card border-2 border-purple-200/50 animate-slide-down">
              <FilterPanel filters={filters} setFilters={setFilters} />
            </Card>
          )}

          <Card className="overflow-hidden p-0 border-2 border-transparent bg-gradient-to-r from-green-200/50 via-pink-200/50 to-yellow-200/50 animate-scale-in">
            <div className="bg-white m-[2px] rounded-[calc(var(--radius)-2px)]">
              <InteractiveMap filters={filters} />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
