import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-600">
              <span className="h-2 w-2 rounded-full bg-gray-900"></span>
              Built for med students
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Master neuroanatomy with interactive 3D learning
            </h1>
            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              Bite-sized lessons, spaced repetition, and immersive 3D anatomy—designed to help you retain complex concepts faster. Learn smarter, not harder.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">Start free trial</button>
              <button className="px-5 py-3 rounded-lg border">Browse curriculum</button>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              No credit card required · Cancel anytime
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[420px] md:h-[520px] rounded-2xl bg-white border shadow-sm">
            <Spline scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/60"></div>
          </div>
        </div>
      </div>

      <div className="absolute -top-20 right-10 h-40 w-40 rounded-full bg-gray-900/5 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-40 w-40 rounded-full bg-gray-900/5 blur-3xl" />
    </section>
  );
}
