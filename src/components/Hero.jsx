"use client"

import { Leaf, Flower2, Sprout } from "lucide-react"
import { Button } from "./ui/button"
import { plantData } from "../lib/plant-data"

export default function Hero() {
  const totalPlants = plantData.length
  const regions = [...new Set(plantData.map((p) => p.region))].length

  return (
    <section className="relative overflow-hidden py-0 lg:py-0">
      {/* خلفية لونية */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5EC] via-[#FFF9E5] to-[#E5F9E5]" />

      {/* تدرج متحرك شفاف */}
      <div className="absolute inset-0 opacity-30 animate-gradient bg-gradient-to-r from-[#90EE90]/20 via-[#FFB6C1]/20 to-[#DDA0DD]/20" />

      {/* صورة الخلفية بدون تغيير ألوانها */}
      <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
        <img
          src="/beautiful-colorful-flowers-and-plants-botanical-il.jpg"
          alt="Botanical decoration"
          className="h-full w-full object-cover animate-float-slow"
        />
      </div>

      {/* زخارف طافية */}
      <div className="floating-decoration top-20 left-10 animate-float">
        <Leaf className="h-16 w-16 text-green-400/40" />
      </div>
      <div className="floating-decoration top-40 right-20 animate-float-slow" style={{ animationDelay: "1s" }}>
        <Flower2 className="h-20 w-20 text-pink-400/40" />
      </div>
      <div className="floating-decoration bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
        <Sprout className="h-12 w-12 text-yellow-400/40" />
      </div>
      <div className="floating-decoration top-1/3 right-1/4 animate-float-slow" style={{ animationDelay: "0.5s" }}>
        <Flower2 className="h-14 w-14 text-purple-400/40" />
      </div>

      {/* المحتوى */}
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center animate-slide-down">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-6 py-3 text-sm font-medium border-2 border-green-200/50">
            <Leaf className="h-4 w-4 text-green-600 animate-bounce" />
            <span className="gradient-text font-semibold">Monitoring Iraq's Agricultural Future</span>
          </div>

          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight lg:text-7xl text-balance mb-4">
            <span className="gradient-text">Sirius BloomWatch</span> <span className="text-foreground">Iraq</span>
          </h1>

          <p className="mt-6 text-xl text-muted-foreground lg:text-2xl text-balance max-w-3xl mx-auto">
            Track plant health, flowering status, and planting times across different regions of Iraq 
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-slide-up">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg shadow-green-500/30 border-0"
              onClick={() => document.getElementById("map")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Leaf className="mr-2 h-5 w-5" />
              Explore the Map
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white shadow-lg shadow-pink-500/30 border-0"
              onClick={() => document.getElementById("statistics")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Flower2 className="mr-2 h-5 w-5" />
              View Statistics
            </Button>
          </div>

          {/* إحصائيات */}
          <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
            <div
              className="text-center glass-card p-6 rounded-2xl animate-scale-in plant-card border-2 border-green-200/50"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-2">
                <Sprout className="h-8 w-8 mx-auto text-green-600 animate-bounce" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent lg:text-4xl">
                {8}
              </div>
              <div className="mt-1 text-sm text-muted-foreground font-medium">Plant Species</div>
            </div>

            <div
              className="text-center glass-card p-6 rounded-2xl animate-scale-in plant-card border-2 border-pink-200/50"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-2">
                <Flower2 className="h-8 w-8 mx-auto text-pink-600 animate-bounce" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent lg:text-4xl">
                {19}
              </div>
              <div className="mt-1 text-sm text-muted-foreground font-medium">Regions</div>
            </div>

          <div
  className="text-center glass-card p-6 rounded-2xl animate-scale-in plant-card border-2 border-yellow-200/50"
  style={{ animationDelay: "0.3s" }}
>
  <div className="mb-2">
    <Leaf className="h-8 w-8 mx-auto text-yellow-600 animate-bounce" />
  </div>
  <div className="text-3xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent lg:text-4xl">
    100%
  </div>
  <div className="mt-1 text-sm text-muted-foreground font-medium">Tracked Locations</div>
</div>


 <div
  className="text-center glass-card p-6 rounded-2xl animate-scale-in plant-card border-2 border-purple-200/50"
  style={{ animationDelay: "0.4s" }}
>
  <div className="mb-2">
    <Flower2 className="h-8 w-8 mx-auto text-purple-600 animate-bounce" />
  </div>
  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent lg:text-4xl">
    24/7
  </div>
  <div className="mt-1 text-sm text-muted-foreground font-medium">Bloom Alerts</div>
</div>

          </div>
        </div>
      </div>
    </section>
  )
}
