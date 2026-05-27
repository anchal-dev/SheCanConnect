import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'

const contactInfo = [
  { icon: '📍', label: 'Address', value: '12 Empowerment Lane, Bandra West, Mumbai – 400050' },
  { icon: '📧', label: 'Email', value: 'hello@shecanconnect.org' },
  { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
  { icon: '🕐', label: 'Office Hours', value: 'Mon–Sat: 9:00 AM – 6:00 PM' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL || ''}/api/contact`, form)
      toast.success(res.data.message || 'Message sent successfully! 🎉')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="py-24 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-white/70 uppercase tracking-widest text-sm font-semibold mb-4"
          >Get In Touch</motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="font-heading font-black text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            Let's <span className="text-brand-light-pink">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-white/80 text-xl"
          >
            Have a question, idea, or want to collaborate? We'd love to hear from you.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none"><path d="M0 60L1440 60L1440 30C1080 0 360 0 0 30Z" fill="white" /></svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Info Panel */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-brand-pink font-semibold uppercase tracking-widest text-sm mb-3">Contact Info</p>
              <h2 className="section-title mb-6">We're Here<br />For You</h2>
              <p className="text-gray-500 leading-relaxed mb-10 text-lg">
                Whether you're a potential volunteer, donor, or someone seeking support — our team is always ready to help. Reach out and let's build something beautiful together.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-xl shadow-lg flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-brand-pink font-bold uppercase tracking-wider mb-1">{info.label}</p>
                      <p className="text-gray-700 font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-10">
                <p className="text-gray-500 text-sm font-semibold mb-4 uppercase tracking-wider">Follow Us</p>
                <div className="flex gap-3">
                  {['📸', '🐦', '💼', '📘'].map((icon, i) => (
                    <a key={i} href="#" className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-brand-purple hover:to-brand-pink flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="card p-10 gradient-border">
                <h3 className="font-heading font-bold text-2xl text-gray-800 mb-2">Send Us a Message</h3>
                <p className="text-gray-400 text-sm mb-8">We'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        className="input-field"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      className="input-field resize-none"
                      required
                    />
                  </div>

                  <button
                    id="submit-contact"
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Message ✨</>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
