import { Menu, Stethoscope, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gray-900 text-white grid place-items-center">
              <Stethoscope size={18} />
            </div>
            <span className="font-semibold text-gray-900">NeuroLearn</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#curriculum" className="hover:text-gray-900 transition-colors">Curriculum</a>
            <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900">Sign in</button>
            <button className="px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white hover:bg-black transition-colors">Get started</button>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#features" className="py-2">Features</a>
              <a href="#curriculum" className="py-2">Curriculum</a>
              <a href="#pricing" className="py-2">Pricing</a>
              <a href="#faq" className="py-2">FAQ</a>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex-1 px-4 py-2 text-sm border rounded-lg">Sign in</button>
              <button className="flex-1 px-4 py-2 text-sm font-medium rounded-lg bg-gray-900 text-white">Get started</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
