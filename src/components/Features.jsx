import { Brain, BookOpen, LineChart, Clock } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Interactive 3D Anatomy",
    desc: "Explore neural structures with an immersive 3D brain model to solidify spatial understanding.",
  },
  {
    icon: BookOpen,
    title: "High-Yield Micro-lessons",
    desc: "Concise, exam-focused lessons crafted to maximize retention and minimize overwhelm.",
  },
  {
    icon: LineChart,
    title: "Spaced Repetition",
    desc: "AI-backed review cycles adapt to your performance to keep knowledge fresh.",
  },
  {
    icon: Clock,
    title: "Study in 10 Minutes",
    desc: "Quick sessions fit your schedule so you can learn anywhere, anytime.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
            Everything you need to ace your exams
          </h2>
          <p className="mt-3 text-gray-600">Built by physicians and educators to make complex concepts clear, engaging, and unforgettable.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-gray-900 text-white">
                <f.icon size={18} />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
