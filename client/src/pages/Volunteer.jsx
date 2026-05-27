import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const roles = [
  { icon: '📚', title: 'Education Mentor', commitment: '4 hrs/week', tag: 'Remote', desc: 'Guide women through online courses, tutoring, and study support sessions.' },
  { icon: '💼', title: 'Career Coach', commitment: '3 hrs/week', tag: 'Hybrid', desc: 'Help women prepare for job interviews, build resumes, and navigate career paths.' },
  { icon: '🏥', title: 'Health Advocate', commitment: '2 hrs/week', tag: 'On-site', desc: 'Conduct wellness workshops, health awareness camps, and counseling sessions.' },
  { icon: '💻', title: 'Tech Trainer', commitment: '5 hrs/week', tag: 'Remote', desc: 'Teach digital literacy, coding basics, and social media skills to women entrepreneurs.' },
  { icon: '🎨', title: 'Creative Arts Lead', commitment: '3 hrs/week', tag: 'On-site', desc: 'Run art therapy, craft workshops, and creative expression programs for healing.' },
  { icon: '📣', title: 'Community Outreach', commitment: '6 hrs/week', tag: 'Hybrid', desc: 'Spread awareness, organize events, and build bridges between the NGO and communities.' },
]

const perks = [
  { icon: '🏆', text: 'Volunteer Excellence Certificate' },
  { icon: '🌐', text: 'Global Networking Access' },
  { icon: '📖', text: 'Free Training & Workshops' },
  { icon: '💜', text: 'Lifelong Community' },
  { icon: '🚀', text: 'Leadership Opportunities' },
  { icon: '✈️', text: 'Travel & Field Programs' },
]

const tagColors = {
  Remote: 'bg-brand-light-purple text-brand-purple',
  Hybrid: 'bg-brand-light-pink text-brand-pink',
  'On-site': 'bg-brand-light-orange text-brand-orange',
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Volunteer() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-4"
          >Get Involved</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading font-black text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Volunteer &<br />
            <span className="text-brand-light-pink">Create Change</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 text-xl leading-relaxed mb-10"
          >
            Your skills, your time, your passion — combined with ours — can transform lives. Find your perfect role below.
          </motion.p>
          <motion.a
            href="#roles"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="inline-block bg-white text-brand-purple font-bold px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl text-lg"
          >
            Explore Roles ↓
          </motion.a>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1080 0 360 0 0 30Z" fill="white" /></svg>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">Why Join Us</p>
            <h2 className="section-title mb-4">What You Get</h2>
            <p className="text-gray-500 max-w-lg mx-auto">Volunteering with SheCan Connect is more than giving — it's growing together.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.text}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-6 text-center group hover:bg-gradient-to-br hover:from-brand-purple hover:to-brand-pink transition-all duration-300"
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{perk.icon}</div>
                <p className="text-xs font-semibold text-gray-600 group-hover:text-white transition-colors duration-300">{perk.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-24 bg-section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">Open Positions</p>
            <h2 className="section-title">Find Your Role</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    {role.icon}
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${tagColors[role.tag]}`}>{role.tag}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-gray-800 mb-1">{role.title}</h3>
                <p className="text-brand-pink text-xs font-semibold mb-3">⏱ {role.commitment}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{role.desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-brand-purple font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Apply Now <span>→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="card p-14 gradient-border">
              <div className="text-6xl mb-6">🤝</div>
              <h2 className="font-heading font-black text-4xl text-gray-800 mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                We welcome all skills and passions. Reach out and we'll find the perfect way for you to contribute.
              </p>
              <Link to="/contact" className="btn-primary text-base px-10 py-4 inline-block">
                Contact Us ✉️
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
