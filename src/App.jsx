import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NeuroLearn. All rights reserved.
      </footer>
    </div>
  )
}

export default App