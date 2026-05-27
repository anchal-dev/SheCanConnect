import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const team = [
  { name: 'Dr. Sunita Rao', role: 'Founder & CEO', emoji: '👩‍💼', bio: 'A visionary leader with 20+ years in women\'s rights advocacy.' },
  { name: 'Meera Kapoor', role: 'Program Director', emoji: '👩‍🏫', bio: 'Designing impactful programs that reach women in rural communities.' },
  { name: 'Neha Singh', role: 'Head of Outreach', emoji: '👩‍💻', bio: 'Building partnerships with governments and global NGOs.' },
  { name: 'Ritu Agarwal', role: 'Community Manager', emoji: '👩‍🎨', bio: 'Fostering a vibrant online and offline community of changemakers.' },
]

const milestones = [
  { year: '2010', event: 'SheCan Connect was founded in Mumbai with a vision to empower 1 million women.' },
  { year: '2013', event: 'Launched our first scholarship program, supporting 200 girls annually.' },
  { year: '2016', event: 'Expanded to 10 states across India, reaching rural communities.' },
  { year: '2019', event: 'Went global — programs launched in 5 countries across Asia and Africa.' },
  { year: '2022', event: 'Reached the milestone of 10,000 empowered women and growing.' },
  { year: '2025', event: 'Launched digital platform to connect women with mentors worldwide.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

export default function About() {
  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-4"
          >About Us</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Our Story &<br />
            <span className="text-brand-light-pink">Our Mission</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-xl leading-relaxed"
          >
            Born from a simple belief — that every woman deserves a chance to shine, lead, and thrive without limits.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1080 0 360 0 0 30Z" fill="white" /></svg>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: '🎯', title: 'Our Mission', color: 'from-brand-purple to-brand-pink', text: 'To empower women from all walks of life through education, skills training, and community building — creating a ripple of change that transforms families, communities, and nations.' },
              { icon: '🌟', title: 'Our Vision', color: 'from-brand-pink to-brand-orange', text: 'A world where every woman has equal access to opportunity, where her potential is recognized, her voice is heard, and her leadership shapes a more equitable future for all.' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-10"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h2 className="font-heading font-bold text-2xl text-gray-800 mb-4">{item.title}</h2>
                <p className="text-gray-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">Our Journey</p>
            <h2 className="section-title">Milestones That Matter</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-purple via-brand-pink to-brand-orange" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex gap-8 items-start pl-16 relative"
                >
                  <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white font-heading font-bold text-xs shadow-glow-purple">
                    {m.year}
                  </div>
                  <div className="card p-6 flex-1">
                    <p className="text-gray-600 leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">Our People</p>
            <h2 className="section-title">Meet the Team</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card p-8 text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange flex items-center justify-center text-4xl shadow-glow-pink group-hover:scale-110 transition-transform duration-300">
                  {member.emoji}
                </div>
                <h3 className="font-heading font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-brand-pink text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading font-black text-4xl md:text-5xl text-white mb-6">Be Part of the Story</h2>
            <p className="text-white/80 text-lg mb-8">Join our growing family of changemakers and help write the next chapter.</p>
            <Link to="/volunteer" className="bg-white text-brand-purple font-bold px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-2xl text-lg inline-block">
              Volunteer with Us →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
