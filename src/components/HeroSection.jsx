const APP_STORE_URL = "https://apps.apple.com/us/app/almonds-product-scanner/id6754858758";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#FFFFFE] pt-16">
      <div className="max-w-screen-2xl mx-auto px-16 lg:px-40 pt-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left pt-8 lg:pt-40">
            <h1 className="text-4xl lg:text-5xl leading-[1] tracking-tight text-gray-900 font-bold">
              Meet Almonds
            </h1>
            <p className="text-5xl lg:text-6xl leading-[1] tracking-tight text-gray-900 font-medium">
              Know what's <span className="inline-block -skew-x-12">really</span>
              <br />
              in your food
            </p>
            <p className="text-lg text-gray-500 max-w-md mx-auto lg:mx-0 leading-tight font-medium">
              Scan any product barcode and instantly see ingredients, allergens, and health insights tailored to you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/images/app-store-badge.svg"
                  alt="Download on the App Store"
                  className="h-12 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Phone Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-100 rounded-full blur-3xl opacity-40 scale-90"></div>
              <img
                src="/images/image.png"
                alt="Almonds App"
                className="relative w-64 lg:w-72 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
