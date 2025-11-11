import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faCrown, faRocket } from '@fortawesome/free-solid-svg-icons';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const plans = [
    {
      name: 'Free',
      icon: null,
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Perfect for trying out Olive',
      features: [
        { name: 'Basic barcode scanning', included: true },
        { name: '10 scans per day', included: true },
        { name: 'Major allergen detection', included: true },
        { name: 'Basic product alternatives', included: true },
        { name: 'Limited scan history (7 days)', included: true },
        { name: 'Restaurant finder', included: false },
        { name: 'Family profiles', included: false },
        { name: 'Nutritional analysis', included: false },
        { name: 'Priority support', included: false },
        { name: 'Offline mode', included: false }
      ],
      cta: 'Start Free',
      highlighted: false
    },
    {
      name: 'Premium',
      icon: faCrown,
      monthlyPrice: 9.99,
      annualPrice: 89.99,
      description: 'For health-conscious individuals',
      features: [
        { name: 'Unlimited barcode scanning', included: true },
        { name: 'Unlimited scans', included: true },
        { name: 'All allergen & intolerance detection', included: true },
        { name: 'Smart product alternatives', included: true },
        { name: 'Full scan history', included: true },
        { name: 'Restaurant finder with filters', included: true },
        { name: 'Up to 3 family profiles', included: true },
        { name: 'Detailed nutritional analysis', included: true },
        { name: 'Email support', included: true },
        { name: 'Offline mode', included: false }
      ],
      cta: 'Go Premium',
      highlighted: true,
      badge: 'Most Popular'
    },
    {
      name: 'Family',
      icon: faRocket,
      monthlyPrice: 14.99,
      annualPrice: 149.99,
      description: 'Complete solution for families',
      features: [
        { name: 'Everything in Premium', included: true },
        { name: 'Unlimited scans', included: true },
        { name: 'Advanced health insights', included: true },
        { name: 'AI-powered recommendations', included: true },
        { name: 'Full scan history with analytics', included: true },
        { name: 'Premium restaurant features', included: true },
        { name: 'Unlimited family profiles', included: true },
        { name: 'Meal planning tools', included: true },
        { name: 'Priority 24/7 support', included: true },
        { name: 'Full offline mode', included: true }
      ],
      cta: 'Go Family',
      highlighted: false
    }
  ];

  const calculatePrice = (plan) => {
    if (plan.name === 'Free') return 'Free';
    const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    const period = isAnnual ? '/year' : '/month';
    return `$${price}${period}`;
  };

  const calculateSavings = (plan) => {
    if (plan.name === 'Free') return null;
    const monthlyCost = plan.monthlyPrice * 12;
    const savings = monthlyCost - plan.annualPrice;
    return savings > 0 ? Math.round((savings / monthlyCost) * 100) : 0;
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start free and upgrade anytime. All plans include our core safety features.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                !isAnnual 
                  ? 'bg-white shadow-md text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                isAnnual 
                  ? 'bg-white shadow-md text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                Save up to 25%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative ${plan.highlighted ? 'md:-mt-4' : ''}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-primary to-primary-light text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className={`card h-full p-8 ${
                plan.highlighted 
                  ? 'ring-2 ring-primary shadow-2xl' 
                  : ''
              }`}>
                {/* Header */}
                <div className="text-center mb-6">
                  {plan.icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full text-white mb-4">
                      <FontAwesomeIcon icon={plan.icon} />
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {calculatePrice(plan)}
                  </div>
                  {isAnnual && calculateSavings(plan) > 0 && (
                    <p className="text-sm text-green-600">
                      Save {calculateSavings(plan)}% with annual
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <FontAwesomeIcon 
                        icon={feature.included ? faCheck : faTimes}
                        className={`mt-1 ${
                          feature.included 
                            ? 'text-green-500' 
                            : 'text-gray-300'
                        }`}
                      />
                      <span className={`text-sm ${
                        feature.included 
                          ? 'text-gray-700' 
                          : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.highlighted 
                    ? 'button-primary' 
                    : 'button-secondary'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            🎉 Limited Time Launch Offer
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Get 50% off your first 3 months of Premium or Family plans
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
              Claim Offer
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Questions about pricing?{' '}
            <a href="#faq" className="text-primary font-semibold hover:underline">
              Check our FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
