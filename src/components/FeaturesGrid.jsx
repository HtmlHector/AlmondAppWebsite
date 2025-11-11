import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBarcode, faUserShield, faChartLine, faMapMarkedAlt,
  faListCheck, faUsers, faFlask, faBell,
  faHeart, faMobileAlt, faHistory, faGlobe
} from '@fortawesome/free-solid-svg-icons';

export default function FeaturesGrid() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: faBarcode,
      title: 'Instant Barcode Scanning',
      description: 'Scan any product in seconds and get immediate safety analysis based on your dietary profile',
      source: 'Olive',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faUserShield,
      title: 'Personalized Profiles',
      description: 'Create custom profiles for each family member with specific allergies and preferences',
      source: 'Olive',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: faChartLine,
      title: 'Health Impact Scoring',
      description: 'Get color-coded ratings showing how each ingredient affects your health',
      source: 'Yuka',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: faFlask,
      title: 'Lab-Tested Analysis',
      description: 'Access comprehensive ingredient breakdowns backed by scientific research',
      source: 'Oasis Health',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: faMapMarkedAlt,
      title: 'Restaurant Finder',
      description: 'Discover restaurants and cafes that cater to your dietary restrictions',
      source: 'Seed Oil Scout',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: faListCheck,
      title: 'Shopping List Builder',
      description: 'Build and share safe shopping lists with automatic product suggestions',
      source: 'Original',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: faUsers,
      title: 'Family Sharing',
      description: 'Share your safe products and lists with family members instantly',
      source: 'Original',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: faBell,
      title: 'Smart Alerts',
      description: 'Get notified about recalls, new safe products, and ingredient changes',
      source: 'Yuka',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: faHeart,
      title: 'Favorites Library',
      description: 'Save and organize your safe products for quick reference while shopping',
      source: 'Original',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: faMobileAlt,
      title: 'Offline Mode',
      description: 'Access your saved products and recent scans even without internet',
      source: 'Original',
      gradient: 'from-gray-500 to-slate-500'
    },
    {
      icon: faHistory,
      title: 'Scan History',
      description: 'Track all your scanned products and see patterns in your food choices',
      source: 'Olive',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: faGlobe,
      title: 'Global Database',
      description: 'Access product information from over 50 countries worldwide',
      source: 'Yuka',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">Powerful Features for Safe Eating</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to make informed food choices, combining the best features from leading apps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl h-full p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`w-full h-full rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}>
                    <FontAwesomeIcon 
                      icon={feature.icon}
                      className="text-white text-xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{feature.description}</p>

                {/* Source Badge */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    feature.source === 'Original' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {feature.source === 'Original' ? '✨ Exclusive' : `From ${feature.source}`}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Try All These Features?</h3>
            <p className="text-lg mb-6 opacity-90">Join thousands who've already made their food shopping safer</p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:shadow-xl hover:scale-105 transform transition-all duration-300">
              Get Started Free
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
