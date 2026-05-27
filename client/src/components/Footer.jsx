import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const footerLinks = {
  'Quick Links': [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Contact', path: '/contact' },
  ],
  'Programs': [
    { name: 'Education', path: '/about' },
    { name: 'Leadership', path: '/about' },
    { name: 'Health & Wellness', path: '/about' },
    { name: 'Economic Empowerment', path: '/about' },
  ],
}

const socials = [
  { name: 'Instagram', icon: '📸', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' },
  { name: 'Facebook', icon: '📘', url: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-brand-purple via-brand-pink to-brand-orange" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">S</span>
              </div>
              <span className="font-heading font-extrabold text-2xl">
                <span className="gradient-text">SheCan</span> Connect
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              Empowering women through community, education, and opportunity.
              Together, we're building a world where every woman can thrive and lead.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-brand-purple hover:to-brand-pink flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <span className="text-base">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-bold text-white mb-5 text-lg">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-brand-pink transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SheCan Connect. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <span className="text-brand-pink">♥</span> for women everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
