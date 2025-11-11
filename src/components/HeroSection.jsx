import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faStar, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const phoneVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="hero min-h-[100vh] flex items-center pt-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50/30">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center md:text-left">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Find <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Safe Foods</span> You Can Actually Eat
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Instantly scan products to check for allergens, intolerances, and harmful ingredients. 
              Get personalized recommendations based on your dietary needs.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} className="text-primary" />
                <span className="text-gray-700 font-medium">50,000+ Users</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} size="sm" />
                  ))}
                </div>
                <span className="text-gray-700 font-medium">4.9/5 Rating</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Primary CTA - Onboarding */}
              <Link 
                to="/get-started"
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 justify-center md:justify-start md:inline-flex shadow-lg"
              >
                <FontAwesomeIcon icon={faRocket} className="text-xl" />
                <span>Start Your Free Health Assessment</span>
              </Link>
              
              {/* App Download Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl transform hover:scale-105">
                  <FontAwesomeIcon icon={faAppStoreIos} className="text-2xl" />
                  <div className="text-left">
                    <div className="text-xs opacity-90">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-xl transform hover:scale-105">
                  <FontAwesomeIcon icon={faGooglePlay} className="text-2xl text-green-600" />
                  <div className="text-left">
                    <div className="text-xs text-gray-600">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            variants={phoneVariants}
            className="relative flex justify-center items-center"
          >
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="absolute top-10 right-10 bg-white rounded-2xl shadow-2xl p-4 z-10 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Safe to Eat!</div>
                  <div className="text-sm text-gray-600">No allergens detected</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
              className="absolute bottom-10 left-10 bg-white rounded-2xl shadow-2xl p-4 z-10 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">!</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Contains Nuts</div>
                  <div className="text-sm text-gray-600">View alternatives</div>
                </div>
              </div>
            </motion.div>

            {/* Phone Frame */}
            <div className="relative">
              <div className="bg-gray-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="bg-gray-100 h-6 flex items-center justify-center">
                    <div className="w-20 h-4 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="p-6">
                    <img 
                      src="/image.png" 
                      alt="Olive App Scanner Interface"
                      className="w-full h-[500px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
              {/* Decorative gradient blob */}
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-accent/30 to-primary-light/30 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
