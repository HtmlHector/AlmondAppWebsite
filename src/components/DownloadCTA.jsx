import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faQrcode, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export default function DownloadCTA() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-green-600 via-green-500 to-green-400 overflow-hidden relative">
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            ref={ref}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Download Olive Today
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join over 50,000 people who've already made their food shopping safer. 
              Available on iOS and Android devices.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button className="bg-black/90 hover:bg-black text-white px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="bg-white/90 hover:bg-white text-gray-900 px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105">
                <FontAwesomeIcon icon={faGooglePlay} size="2x" className="text-green-600" />
                <div className="text-left">
                  <div className="text-xs opacity-90">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">✓</span>
                <span>Free to download and use</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <span className="text-2xl">✓</span>
                <span>Works offline after initial setup</span>
              </div>
            </div>

            {/* SMS Option */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <p className="text-white/90 text-sm mb-2">
                <FontAwesomeIcon icon={faMobileAlt} className="mr-2" />
                Get a download link sent to your phone
              </p>
              <form className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Content - QR Code and Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            {/* QR Code Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="text-center mb-4">
                <FontAwesomeIcon icon={faQrcode} size="8x" className="text-gray-800" />
              </div>
              <p className="text-center text-gray-700 font-semibold">
                Scan to Download
              </p>
              <p className="text-center text-gray-500 text-sm mt-2">
                Point your camera here
              </p>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
    </section>
  );
}
