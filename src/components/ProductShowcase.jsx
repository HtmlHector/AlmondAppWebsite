export default function ProductShowcase() {
  return (
    <section className="py-24 bg-[#FFFFFE]">
      <div className="max-w-screen-2xl mx-auto px-16 lg:px-40">

        {/* First Product - Ritz */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Product Image with Tags */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Rating Badge */}
              <div className="absolute -top-4 right-0 bg-white rounded-full px-4 py-2 shadow-sm flex items-center gap-2 z-10">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-gray-900 font-semibold text-sm">Poor - 32/100</span>
              </div>

              {/* Product Image */}
              <img
                src="/images/ritz.png"
                alt="Ritz Crackers"
                className="w-64 lg:w-80 h-auto transform -rotate-6 drop-shadow-xl"
              />

              {/* Tags */}
              <div className="absolute -right-8 top-1/3 space-y-3">
                <div className="bg-gray-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-gray-400">⚗️</span>
                  <span className="text-gray-600 text-sm font-medium">8 additives</span>
                </div>
                <div className="bg-gray-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-gray-400">🧂</span>
                  <span className="text-gray-600 text-sm font-medium">High sodium</span>
                </div>
                <div className="bg-gray-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-gray-400">🍬</span>
                  <span className="text-gray-600 text-sm font-medium">Processed oils</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-gray-900 font-bold leading-tight">
              Evaluate the<br />
              quality of your<br />
              <span className="italic font-medium">foods</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md font-medium">
              Do you really know what you're buying? Almonds scans and analyzes labels instantly so you can see which products are good for you and which ones to avoid.
            </p>
          </div>
        </div>

        {/* Second Product - Painterland */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl tracking-tight text-gray-900 font-bold leading-tight">
              Find healthier<br />
              <span className="italic font-medium">alternatives</span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-md font-medium">
              When a product doesn't meet your standards, Almonds suggests better options. Discover cleaner products with fewer additives and better ingredients.
            </p>
          </div>

          {/* Product Image with Tags */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Rating Badge */}
              <div className="absolute -top-4 left-0 bg-white rounded-full px-4 py-2 shadow-sm flex items-center gap-2 z-10">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-gray-900 font-semibold text-sm">Good - 78/100</span>
              </div>

              {/* Product Image */}
              <img
                src="/images/painterland.png"
                alt="Painterland Sisters Yogurt"
                className="w-64 lg:w-80 h-auto transform rotate-6 drop-shadow-xl"
              />

              {/* Tags */}
              <div className="absolute -left-8 top-1/3 space-y-3">
                <div className="bg-green-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 text-sm font-medium">Organic</span>
                </div>
                <div className="bg-green-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 text-sm font-medium">No additives</span>
                </div>
                <div className="bg-green-50 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                  <span className="text-green-500">✓</span>
                  <span className="text-gray-600 text-sm font-medium">Grass-fed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
