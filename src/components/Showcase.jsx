import { motion } from 'framer-motion';

const items = [
  {
    kpi: '+238% ROAS',
    title: 'Scaling DTC beauty brand to $2.4M/mo',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=1600&auto=format&fit=crop',
  },
  {
    kpi: '3.1x AOV',
    title: 'Landing page revamp for fintech',
    img: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop',
  },
  {
    kpi: '+71% CTR',
    title: 'Social-first launch for new app',
    img: 'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A glimpse into campaigns that pushed creative boundaries and delivered commercial results.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/20">Start a project</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <img src={it.img} alt={it.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-amber-300 text-xs font-semibold">{it.kpi}</p>
                <h3 className="mt-1 text-white font-semibold">{it.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
