import { Menu, Rocket, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <motion.a
              href="#"
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-400 text-white shadow-lg shadow-fuchsia-500/30">
                <Rocket size={22} />
              </div>
              <div>
                <p className="text-lg font-semibold text-white tracking-tight">LiftOff Digital</p>
                <p className="text-xs text-white/60 -mt-1">Marketing Studio</p>
              </div>
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {[
                ["Services", "#services"],
                ["Work", "#work"],
                ["Testimonials", "#testimonials"],
                ["About", "#about"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-lg shadow-white/10 hover:shadow-white/20 transition-shadow"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <PhoneCall size={16} />
              Book a call
            </motion.a>

            <button className="md:hidden text-white/80">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
