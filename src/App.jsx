import Hero from "./components/Hero"
import MapSection from "./components/MapSection"
import Statistics from "./components/Statistics"
import ClimateAnalytics from "./components/ClimateAnalytics"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <MapSection />
      <Statistics />
      <ClimateAnalytics />
      <Footer />
    </main>
  )
}

export default App
