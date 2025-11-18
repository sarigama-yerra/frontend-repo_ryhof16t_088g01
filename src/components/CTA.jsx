import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 via-amber-500/20 to-cyan-500/20 p-10 backdrop-blur shadow-2xl"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-amber-500/20 to-cyan-500/20 blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Ready to grow?</h2>
            <p className="mt-3 max-w-2xl text-white/80">Tell us about your goals and we’ll send a free, actionable growth plan within 24 hours.</p>

            <form className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur outline-none" placeholder="Your name" />
              <input className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/60 backdrop-blur outline-none" placeholder="Email address" />
              <button type="button" className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-xl shadow-white/20 hover:shadow-white/30">Get my plan</button>
            </form>

            <p className="mt-3 text-xs text-white/70">No spam. Just insights and a clear path forward.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
