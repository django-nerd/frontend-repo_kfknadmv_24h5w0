export default function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-gradient-to-br from-gray-900 to-black text-white p-10 sm:p-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Ready to make neuro your strength?</h3>
              <p className="mt-3 text-white/80 max-w-xl">Join thousands of students learning smarter with interactive modules and targeted review. Try it free—no credit card required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button className="px-5 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-white/90 transition-colors">Start free trial</button>
              <button className="px-5 py-3 rounded-lg border border-white/20">See pricing</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
