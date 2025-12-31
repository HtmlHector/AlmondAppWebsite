const APP_STORE_URL = "https://apps.apple.com/us/app/almonds-product-scanner/id6754858758";

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFE] py-16">
      <div className="max-w-screen-2xl mx-auto px-16 lg:px-40">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and App Store */}
          <div className="lg:col-span-2">
            <img src="/images/Group 276.png" alt="Almonds" className="h-10 mb-6" />
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img
                src="/images/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-12"
              />
            </a>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">How It Works</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Press</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gray-900 font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="/privacypolicy" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="/termsofservice" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 flex justify-between items-center">
          <p className="text-gray-500 text-sm font-medium">&copy; {new Date().getFullYear()} Almonds. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/almonds.app/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/instagram.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.tiktok.com/@almonds.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/tiktok.png" alt="TikTok" className="w-6 h-6" />
            </a>
            <a href="https://x.com/almondsapp" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/twitter.png" alt="X" className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@almondsapp" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/images/youtube.png" alt="YouTube" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
