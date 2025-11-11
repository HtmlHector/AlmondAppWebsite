import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, faTwitter, faInstagram, faTiktok, faYoutube, faLinkedin,
  faAppStoreIos, faGooglePlay
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, faPhone, faMapMarkerAlt, faArrowRight
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would normally send to your backend
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download', href: '#download' },
      { name: 'API Access', href: '#api' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press Kit', href: '#press' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Help Center', href: '#help' },
      { name: 'Food Guide', href: '#guide' },
      { name: 'Allergen Database', href: '#database' },
      { name: 'Community', href: '#community' },
      { name: 'Partners', href: '#partners' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Data Security', href: '#security' },
      { name: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { icon: faFacebook, href: '#', label: 'Facebook' },
    { icon: faTwitter, href: '#', label: 'Twitter' },
    { icon: faInstagram, href: '#', label: 'Instagram' },
    { icon: faTiktok, href: '#', label: 'TikTok' },
    { icon: faYoutube, href: '#', label: 'YouTube' },
    { icon: faLinkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated on Food Safety
              </h3>
              <p className="text-gray-400">
                Get weekly tips, new feature updates, and exclusive offers
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:border-primary focus:outline-none"
                  required
                />
                {isSubscribed && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-8 left-0 text-green-500 text-sm"
                  >
                    ✓ Successfully subscribed!
                  </motion.div>
                )}
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                Subscribe
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">🫒</span>
              </div>
              <span className="font-bold text-xl text-white">Olive</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Making food shopping safer for everyone with instant allergen detection and personalized recommendations.
            </p>
            
            {/* App Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-3">
                <FontAwesomeIcon icon={faAppStoreIos} size="lg" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Download on</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors flex items-center gap-3">
                <FontAwesomeIcon icon={faGooglePlay} size="lg" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary" />
            <div>
              <div className="text-xs text-gray-500">Email</div>
              <a href="mailto:hello@almonds.app" className="text-gray-300 hover:text-white">
                hello@almonds.app
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-primary" />
            <div>
              <div className="text-xs text-gray-500">Phone</div>
              <a href="tel:1-800-ALMONDS" className="text-gray-300 hover:text-white">
                1-800-ALMONDS
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-primary" />
            <div>
              <div className="text-xs text-gray-500">Location</div>
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Olive. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Sitemap
              </a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
