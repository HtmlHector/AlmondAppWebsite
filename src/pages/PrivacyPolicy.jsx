import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-emerald-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="text-white hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Privacy Policy</h1>
          <p className="mt-2 text-emerald-100">Last updated: January 11, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to Almonds ("we," "our," or "us"). We are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you use our mobile application (the "App").
            </p>
            <p className="mt-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy
              policy, please do not access the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Register for an account</li>
              <li>Use our App features</li>
              <li>Contact us for support</li>
            </ul>
            <p className="mt-4">This information may include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Email address</li>
              <li>Name (if provided via Apple Sign In)</li>
              <li>Account credentials</li>
              <li>User preferences and settings</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Automatically Collected Information</h3>
            <p>When you use the App, we may automatically collect certain information, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Device information (model, operating system version)</li>
              <li>App usage data and analytics</li>
              <li>Crash reports and diagnostic data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 Camera and Scanning Data</h3>
            <p>
              The App requires camera access to scan product barcodes. We do not store or transmit photos
              or video from your camera. The camera is used solely to read barcode information, which is
              processed locally on your device and then discarded. Only the barcode number is sent to our
              servers to retrieve product information.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.4 Product Scan History</h3>
            <p>
              We may store information about products you scan, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Product names and barcodes</li>
              <li>Scan timestamps</li>
              <li>Your ratings or feedback on products</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Provide, operate, and maintain our App</li>
              <li>Improve, personalize, and expand our App features</li>
              <li>Understand and analyze how you use our App</li>
              <li>Process your subscription and payment transactions</li>
              <li>Provide you with product information and nutritional analysis</li>
              <li>Send you updates, notifications, and support messages</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Respond to your comments, questions, and customer service requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Service Providers</h2>
            <p>We work with third-party service providers who provide services on our behalf:</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Supabase (Authentication & Database)</h3>
            <p>
              We use Supabase for user authentication and data storage. Supabase complies with GDPR and
              provides the same level of data protection as stated in this policy. For more information,
              visit{" "}
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                Supabase Privacy Policy
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Superwall (Subscription Management)</h3>
            <p>
              We use Superwall to manage in-app subscriptions and paywalls. Superwall processes
              subscription-related data in accordance with their privacy policy. For more information,
              visit{" "}
              <a
                href="https://superwall.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                Superwall Privacy Policy
              </a>
              .
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Apple In-App Purchases</h3>
            <p>
              Subscription purchases are processed through Apple's App Store. We do not have access to
              your credit card or payment information. Apple's privacy policy governs how your payment
              information is handled.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>With service providers who assist in operating our App (as described in Section 4)</li>
              <li>To comply with legal obligations, court orders, or government requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Data Retention and Deletion</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            <p className="mt-4">
              You have the right to request deletion of your account and associated data at any time
              through the App's settings. Upon account deletion:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your personal information will be permanently deleted within 30 days</li>
              <li>Your scan history and preferences will be removed</li>
              <li>You will lose access to any premium features associated with your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              These measures include:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments</li>
              <li>Restricted access to personal information</li>
              <li>Secure authentication methods</li>
            </ul>
            <p className="mt-4">
              However, please note that no method of transmission over the internet or electronic storage
              is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Opt-Out:</strong> Opt out of certain data collection practices</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at{" "}
              <a href="mailto:support@downloadalmonds.tech" className="text-emerald-600 hover:underline">
                support@downloadalmonds.tech
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p>
              Our App is not intended for children under the age of 13. We do not knowingly collect
              personal information from children under 13. If you believe we have collected information
              from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your own. These
              countries may have different data protection laws. We ensure that appropriate safeguards are
              in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              updating the "Last updated" date at the top of this policy. We encourage you to review this
              Privacy Policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p><strong>Email:</strong>{" "}
                <a href="mailto:support@downloadalmonds.tech" className="text-emerald-600 hover:underline">
                  support@downloadalmonds.tech
                </a>
              </p>
              <p className="mt-2"><strong>Website:</strong>{" "}
                <a href="https://downloadalmonds.tech" className="text-emerald-600 hover:underline">
                  downloadalmonds.tech
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer
              Privacy Act (CCPA), including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The right to know what personal information we collect and how it's used</li>
              <li>The right to delete personal information</li>
              <li>The right to opt-out of the sale of personal information (we do not sell your information)</li>
              <li>The right to non-discrimination for exercising your privacy rights</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <Link to="/terms-of-service" className="text-emerald-600 hover:underline">
            Terms of Service
          </Link>
          {" | "}
          <Link to="/" className="text-emerald-600 hover:underline">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
