import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of 3',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: "Olive has been a lifesaver for our family. My son has severe peanut allergies, and this app gives me peace of mind every time we shop. The barcode scanning is instant and accurate!",
      highlight: 'Peace of mind'
    },
    {
      name: 'Michael Chen',
      role: 'Fitness Enthusiast',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 5,
      text: "I'm tracking my macros and avoiding seed oils. This app not only shows me what to avoid but suggests healthier alternatives. The restaurant finder feature is amazing for eating out!",
      highlight: 'Healthier alternatives'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Celiac Patient',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: "Living with celiac disease means constant vigilance. Olive makes it so much easier to find truly gluten-free products. The cross-contamination warnings have saved me multiple times.",
      highlight: 'Constant vigilance made easy'
    },
    {
      name: 'David Thompson',
      role: 'Vegan Chef',
      avatar: 'https://i.pravatar.cc/150?img=8',
      rating: 5,
      text: "As a vegan chef, I need to know every ingredient. This app's detailed analysis helps me discover new products and ensure everything meets my standards. It's become indispensable!",
      highlight: 'Detailed analysis'
    },
    {
      name: 'Lisa Park',
      role: 'Nutritionist',
      avatar: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: "I recommend Olive to all my clients. The nutritional breakdowns and health impact scores help them make informed decisions. It's like having a nutritionist in your pocket!",
      highlight: 'Nutritionist in your pocket'
    },
    {
      name: 'James Wilson',
      role: 'Diabetic',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: "Managing diabetes requires careful food choices. Olive helps me track sugar content and find low-glycemic alternatives. The app has genuinely improved my health management.",
      highlight: 'Improved health management'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who've transformed their food shopping experience
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <div className="text-primary opacity-20 mb-6">
                  <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>

                {/* Highlight */}
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-full text-sm font-semibold">
                    {testimonials[currentIndex].highlight}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-mx-6">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-shadow"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-600">Active Users</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-gray-600">App Store Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-gray-600">Products Scanned</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
