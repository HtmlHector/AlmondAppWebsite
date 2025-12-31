export default function FeaturesSection() {
  const features = [
    {
      emoji: "🔍",
      title: "Instant Analysis",
      description: "Scan any barcode and instantly see every ingredient, additive, and nutritional detail. No more squinting at tiny labels."
    },
    {
      emoji: "🚫",
      title: "No ads. Ever.",
      description: "Brands cannot pay to advertise or promote their products in the app. Your experience stays clean and unbiased."
    },
    {
      emoji: "🙌",
      title: "100% Independent",
      description: "No brand sponsorships. No paid placements. Our recommendations are based purely on ingredients and science, not advertising."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#FFFEFE] relative">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#FFFFFE] to-transparent"></div>
      <div className="max-w-screen-2xl mx-auto px-16 lg:px-40">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl tracking-tight text-gray-900 mb-4 font-bold">
            Why trust Almonds?
          </h2>
          <p className="text-xl text-gray-500 font-semibold">
            The smartest way to understand what you eat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white shadow-sm"
            >
              <div className="text-6xl mb-6 text-center">
                {feature.emoji}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-tight font-semibold">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
