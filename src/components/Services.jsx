import { motion } from 'framer-motion';
import { Sparkles, BarChart3, Megaphone, MousePointerClick, LineChart, Stars } from 'lucide-react';

const services = [
  {
    icon: <Megaphone className="text-fuchsia-400" size={20} />,
    title: 'Social Creative & UGC',
    desc: 'Thumb-stopping content that feels native and converts like crazy across TikTok, IG, YT & Shorts.'
  },
  {
    icon: <MousePointerClick className="text-amber-400" size={20} />,
    title: 'Paid Media (Meta, Google, TikTok)',
    desc: 'Full-funnel media buying with relentless testing and creative insights to scale profitably.'
  },
  {
    icon: <BarChart3 className="text-cyan-400" size={20} />,
    title: 'CRO & Landing Pages',
    desc: 'High-velocity experiments and conversion design that turns traffic into revenue.'
  },
  {
    icon: <LineChart className="text-emerald-400" size={20} />,
    title: 'Analytics & Attribution',
    desc: 'Clean tracking setups, MMM-ready data, and dashboards that tell a story the CFO loves.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} /> What we do
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Creative that sells. Media that scales.
          </h2>
          <p className="mt-4 text-white/70">
            We blend creativity with mathematics to deliver campaigns that are visually magnetic and commercially undeniable.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg hover:shadow-fuchsia-500/20/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                {s.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-amber-500/10 to-cyan-500/10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-fuchsia-500/0 via-fuchsia-500/10 to-transparent blur-2xl" />
    </section>
  );
}
