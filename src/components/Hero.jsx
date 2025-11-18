import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-36">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
          >
            Full-funnel strategy • Social-first • Performance driven
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05 }}
            className="mt-5 text-4xl md:text-6xl font-black tracking-tight text-white"
          >
            We turn clicks into loyal customers
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-5 text-lg md:text-xl text-white/80"
          >
            Creative storytelling meets data science. We craft high-converting campaigns that feel human and scale like code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold shadow-xl shadow-white/10 hover:shadow-white/20 transition">
              Get a free growth plan
            </a>
            <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white px-6 py-3 font-semibold backdrop-blur hover:bg-white/20 transition">
              See our work
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute top-28 right-6 hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 px-4 py-3 text-white text-sm shadow-lg">
            +238% ROAS in Q3
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/10 px-4 py-3 text-white text-sm shadow-lg">
            Trusted by 70+ brands
          </div>
        </motion.div>
      </div>
    </section>
  );
}
