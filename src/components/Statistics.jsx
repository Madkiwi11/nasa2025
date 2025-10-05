import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { plantData } from "../lib/plant-data"
import { BarChart3, TrendingUp, MapPin, Sprout, Flower2, Leaf } from "lucide-react"

export default function Statistics() {
  const statusCounts = plantData.reduce((acc, plant) => {
    acc[plant.status] = (acc[plant.status] || 0) + 1
    return acc
  }, {})

  const regionCounts = plantData.reduce((acc, plant) => {
    acc[plant.region] = (acc[plant.region] || 0) + 1
    return acc
  }, {})

  const avgTemp = (plantData.reduce((sum, plant) => sum + plant.temperature, 0) / plantData.length).toFixed(1)
  const avgHumidity = (plantData.reduce((sum, plant) => sum + plant.humidity, 0) / plantData.length).toFixed(1)

  return (
    <section id="statistics" className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-green-50" />

      <div className="floating-decoration top-20 left-10 animate-float">
        <Leaf className="h-20 w-20 text-green-300/30" />
      </div>
      <div className="floating-decoration bottom-20 right-20 animate-float-slow" style={{ animationDelay: "1s" }}>
        <Flower2 className="h-16 w-16 text-pink-300/30" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="mb-12 text-center animate-slide-down">
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl">
            Plant Health <span className="gradient-text">Statistics</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Comprehensive insights into Iraq's agricultural landscape
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card
              className="glass-card card animate-scale-in border-2 border-green-200/50 plant-card"
              style={{ animationDelay: "0.1s" }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Plants</CardTitle>
                <div className="p-2 rounded-full bg-gradient-to-br from-green-400 to-emerald-500">
                  <Sprout className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {plantData.length}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Across {Object.keys(regionCounts).length} regions</p>
              </CardContent>
            </Card>

            <Card
              className="glass-card card animate-scale-in border-2 border-orange-200/50 plant-card"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Temperature</CardTitle>
                <div className="p-2 rounded-full bg-gradient-to-br from-orange-400 to-red-500">
                  <TrendingUp className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  {avgTemp}°C
                </div>
                <p className="text-xs text-muted-foreground mt-1">Regional average</p>
              </CardContent>
            </Card>

            <Card
              className="glass-card card animate-scale-in border-2 border-blue-200/50 plant-card"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg Humidity</CardTitle>
                <div className="p-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  {avgHumidity}%
                </div>
                <p className="text-xs text-muted-foreground mt-1">Moisture levels</p>
              </CardContent>
            </Card>

            <Card
              className="glass-card card animate-scale-in border-2 border-purple-200/50 plant-card"
              style={{ animationDelay: "0.4s" }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Regions</CardTitle>
                <div className="p-2 rounded-full bg-gradient-to-br from-purple-400 to-pink-500">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {Object.keys(regionCounts).length}
                </div>
                <p className="text-xs text-muted-foreground mt-1">Monitored areas</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card
              className="glass-card card animate-slide-up border-2 border-green-200/50"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <Flower2 className="h-6 w-6 text-pink-600" />
                  Plant Status Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(statusCounts).map(([status, count]) => {
                    const percentage = ((count / plantData.length) * 100).toFixed(0)
                    const colors = {
                      Healthy: "bg-gradient-to-r from-green-400 to-emerald-500",
                      Blooming: "bg-gradient-to-r from-yellow-400 to-orange-500",
                      Stressed: "bg-gradient-to-r from-red-400 to-rose-500",
                      Dormant: "bg-gradient-to-r from-stone-400 to-gray-500",
                    }
                    return (
                      <div key={status}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium">{status}</span>
                          <span className="text-muted-foreground">
                            {count} plants ({percentage}%)
                          </span>
                        </div>
                        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className={`h-full ${colors[status]} transition-all duration-1000 ease-out shadow-lg`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card
              className="glass-card card animate-slide-up border-2 border-purple-200/50"
              style={{ animationDelay: "0.3s" }}
            >
              <CardHeader>
                <CardTitle className="font-serif text-2xl flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  Regional Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(regionCounts).map(([region, count]) => {
                    const percentage = ((count / plantData.length) * 100).toFixed(0)
                    return (
                      <div key={region}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium">{region}</span>
                          <span className="text-muted-foreground">
                            {count} plants ({percentage}%)
                          </span>
                        </div>
                        <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-1000 ease-out shadow-lg"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
