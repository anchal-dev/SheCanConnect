import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const stats = [
  { value: '10,000+', label: 'Women Empowered' },
  { value: '50+', label: 'Communities Reached' },
  { value: '200+', label: 'Volunteers Worldwide' },
  { value: '15+', label: 'Years of Impact' },
]

const programs = [
  {
    icon: '🎓',
    title: 'Education First',
    desc: 'Providing scholarships, mentorship, and skill-building programs to women from underprivileged backgrounds.',
    color: 'from-brand-purple to-brand-pink',
  },
  {
    icon: '💪',
    title: 'Leadership Training',
    desc: 'Equipping women with the confidence, tools, and network to step into leadership roles in every sector.',
    color: 'from-brand-pink to-brand-orange',
  },
  {
    icon: '🌸',
    title: 'Health & Wellness',
    desc: 'Holistic wellness programs focused on mental health, physical wellbeing, and self-care practices.',
    color: 'from-brand-orange to-brand-purple',
  },
  {
    icon: '💼',
    title: 'Economic Power',
    desc: 'Micro-loans, entrepreneurship training, and job placement support for financial independence.',
    color: 'from-brand-purple to-brand-orange',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Program Graduate',
    quote: 'SheCan Connect changed my life completely. I went from having no job to running my own business. The support never stops.',
    avatar: '👩‍💼',
    location: 'Mumbai, India',
  },
  {
    name: 'Aisha Patel',
    role: 'Volunteer Leader',
    quote: 'Being part of this community has been the most fulfilling experience of my life. Every woman here lifts each other higher.',
    avatar: '👩‍🏫',
    location: 'Delhi, India',
  },
  {
    name: 'Fatima Khan',
    role: 'Scholarship Recipient',
    quote: 'Thanks to SheCan Connect, I completed my engineering degree and landed my dream job. Dreams do come true with the right support!',
    avatar: '👩‍💻',
    location: 'Hyderabad, India',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-8 border border-white/30"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-ping-slow" />
                Empowering Women Since 2010
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading font-black text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6"
              >
                She Can.
                <br />
                <span className="text-brand-light-pink">She Will.</span>
                <br />
                <span className="text-white/80">She Does.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-white/80 text-lg leading-relaxed mb-10 max-w-lg"
              >
                SheCan Connect is a global movement dedicated to unlocking the potential of every woman through education, leadership, and community.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/volunteer" className="btn-outline text-base px-8 py-4 font-bold">
                  Become a Volunteer
                </Link>
                <Link
                  to="/about"
                  className="bg-white text-brand-purple font-bold px-8 py-4 rounded-full hover:bg-brand-light-pink transition-all duration-300 hover:scale-105 text-base"
                >
                  Our Story →
                </Link>
              </motion.div>
            </div>

            {/* Right — floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex flex-col gap-6 items-end"
            >
              <div className="glass rounded-3xl p-6 w-72 animate-float">
                <div className="text-4xl mb-3">🌟</div>
                <h3 className="text-white font-bold text-lg mb-1">Join Our Community</h3>
                <p className="text-white/70 text-sm">Connect with 10,000+ empowered women worldwide.</p>
              </div>
              <div className="glass rounded-3xl p-6 w-64 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-4xl mb-3">🎓</div>
                <h3 className="text-white font-bold text-lg mb-1">Free Programs</h3>
                <p className="text-white/70 text-sm">Access education & training at no cost.</p>
              </div>
              <div className="glass rounded-3xl p-6 w-72 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-4xl mb-3">💜</div>
                <h3 className="text-white font-bold text-lg mb-1">Lifelong Support</h3>
                <p className="text-white/70 text-sm">A sisterhood that never leaves your side.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="font-heading font-black text-4xl md:text-5xl gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="py-24 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">What We Do</p>
            <h2 className="section-title mb-5">Our Programs</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Comprehensive programs designed to uplift, educate, and empower women at every stage of their journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  {prog.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-800">{prog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">Real Stories</p>
            <h2 className="section-title mb-5">Voices of Change</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 gradient-border"
              >
                <div className="text-5xl mb-4">{t.avatar}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-heading font-bold text-gray-800">{t.name}</div>
                  <div className="text-brand-pink text-xs font-semibold uppercase tracking-wider">{t.role}</div>
                  <div className="text-gray-400 text-xs mt-1">📍 {t.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-heading font-black text-4xl md:text-6xl text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of volunteers and donors who are changing lives, one woman at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/volunteer" className="bg-white text-brand-purple font-bold px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl text-lg">
                Volunteer Today
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-10 py-4">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
