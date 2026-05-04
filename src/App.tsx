import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Features from "./components/Features"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="min-h-screen bg-canvas">
      <Nav />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
