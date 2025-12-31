import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function EvaluateQualitySection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container">
        {/* First Row - Evaluate Foods */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src="/images/ritz.png"
              alt="Food product analysis"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Evaluate the quality of your{" "}
              <span className="italic text-green-600">foods</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Do you really know what you're buying? We do! Almonds scans and analyzes
              labels in the blink of an eye so you can learn at a glance which products
              are good for you and which ones you should avoid.
            </p>
          </motion.div>
        </div>

        {/* Second Row - Check Cosmetics (reversed layout) */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1"
          >
            <img
              src="/images/painterland.png"
              alt="Cosmetic product analysis"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Also, check the quality of your{" "}
              <span className="italic text-green-600">cosmetics</span>!
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Endocrine disruptors, carcinogens, allergens or irritants: cosmetic products,
              too, contain ingredients that hold unpleasant surprises. With Almonds, you can
              discover the health impact of all your personal care products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
