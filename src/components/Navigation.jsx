import { useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/almonds-product-scanner/id6754858758";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFFFE]/40 backdrop-blur-xl">
            <div className="max-w-screen-2xl mx-auto px-16 lg:px-40 py-3">
                <div className="flex items-center justify-between relative">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0">
                        <img src="/images/Group 276.png" alt="Almonds" className="h-8" />
                    </a>

                    {/* Center Navigation */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                        <a
                            href="#features"
                            className="text-base text-gray-700 hover:text-gray-900 transition-colors font-semibold"
                        >
                            Why trust us?
                        </a>
                    </div>

                    {/* Right - App Store Button */}
                    <div className="hidden md:block flex-shrink-0">
                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity"
                        >
                            <img
                                src="/images/app-store-badge.svg"
                                alt="Download on the App Store"
                                className="h-12"
                            />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2"
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden pt-4 pb-2 space-y-3">
                        <a href="#features" className="block text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>
                            Features
                        </a>
                        <a href="#how-it-works" className="block text-gray-600 py-2" onClick={() => setIsMenuOpen(false)}>
                            How It Works
                        </a>
                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                        >
                            <img
                                src="/images/app-store-badge.svg"
                                alt="Download on the App Store"
                                className="h-12"
                            />
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}
