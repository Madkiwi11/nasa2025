import { TrendingUp, Droplets, Sun, Sprout } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function ClimateAnalytics() {
  const simulationData = {
    peak_bloom: {
      date: "April 1, 2025",
      bloom_pct: 70.0,
    },
    peak_stress: {
      date: "April 20, 2020",
      stress_pct: 87.0,
    },
  }

  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Section Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            <TrendingUp className="w-4 h-4" />
            Climate Intelligence
          </div>
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">
            Environmental Analytics
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Real-time climate monitoring and predictive analysis for optimal plant health across Iraq.
          </p>
        </header>

        {/* Simulation Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border border-green-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-green-200">
                  <Sprout className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Peak Bloom</CardTitle>
                  <CardDescription className="text-gray-600">Maximum flowering period</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-700">{simulationData.peak_bloom.bloom_pct}%</p>
              <p className="text-sm text-gray-500">Recorded on {simulationData.peak_bloom.date}</p>
            </CardContent>
          </Card>

          <Card className="border border-red-300 bg-white">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-red-200">
                  <Sun className="w-6 h-6 text-red-700" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-900">Peak Stress</CardTitle>
                  <CardDescription className="text-gray-600">Maximum environmental stress</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-700">{simulationData.peak_stress.stress_pct}%</p>
              <p className="text-sm text-gray-500">Recorded on {simulationData.peak_stress.date}</p>
            </CardContent>
          </Card>
        </div>

        {/* Climate Variables Chart */}
        <Card className="border border-blue-300 bg-white mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Droplets className="w-6 h-6 text-blue-600" />
              <CardTitle className="text-xl font-semibold text-gray-900">Climate Variables Over Time</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Temperature, humidity, rainfall, and vegetation index monitoring
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5985446942190192959-EVL9kClqAnAsSeAGk4ErjZM69hDN9M.jpg"
              alt="Climate Variables Over Time showing temperature, relative humidity, rain, and NDVI data"
              className="w-full rounded-md"
            />
          </CardContent>
        </Card>

        {/* Bloom and Stress Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border border-pink-300 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Daily Bloom Percentage</CardTitle>
              <CardDescription className="text-gray-600">Flowering patterns throughout the year</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5985446942190192961-wu6yuwdScV12em7eZwq1ijyRb2Ut4G.jpg"
                alt="Daily Bloom Percentage Over Time showing flowering peaks"
                className="w-full rounded-md"
              />
            </CardContent>
          </Card>

          <Card className="border border-red-300 bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">Daily Stress Percentage</CardTitle>
              <CardDescription className="text-gray-600">Environmental stress indicators</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5985446942190192960-9YI8EszyycVzvXUXcHwvnkciNcobNU.jpg"
                alt="Daily Stress Percentage Over Time showing stress patterns"
                className="w-full rounded-md"
              />
            </CardContent>
          </Card>
        </div>

        {/* NDVI Time Series */}
        <Card className="border border-green-300 bg-white">
          <CardHeader>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <CardTitle className="text-xl font-semibold text-gray-900">NDVI Time Series Analysis</CardTitle>
            </div>
            <CardDescription className="text-gray-600">
              Normalized Difference Vegetation Index tracking from 2020-2025
            </CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5983195142376507995-3W9wDrjEjadFw4uJhVJ1AUmE3I1d4U.jpg"
              alt="NDVI Time Series showing vegetation health patterns over multiple years"
              className="w-full rounded-md"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
