import { Link } from "react-router-dom";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-emerald-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="text-white hover:underline mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mt-4">Terms of Service</h1>
          <p className="mt-2 text-emerald-100">Last updated: January 11, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Almonds mobile application (the "App"), you agree to be bound by
              these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use
              the App.
            </p>
            <p className="mt-4">
              These Terms apply to all users of the App, including without limitation users who are
              browsers, customers, and contributors of content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p>
              Almonds is a mobile application that provides product information and nutritional analysis
              by scanning product barcodes. The App offers features including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Barcode scanning to identify products</li>
              <li>Nutritional information and ingredient analysis</li>
              <li>Product ratings and reviews</li>
              <li>Personalized product recommendations</li>
              <li>Scan history and saved products</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">3.1 Account Creation</h3>
            <p>
              To access certain features of the App, you may be required to create an account. You agree
              to provide accurate, current, and complete information during registration and to update
              such information to keep it accurate, current, and complete.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for
              all activities that occur under your account. You agree to immediately notify us of any
              unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3.3 Account Termination</h3>
            <p>
              You may delete your account at any time through the App settings. We reserve the right to
              suspend or terminate your account if you violate these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Subscriptions and Payments</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Subscription Plans</h3>
            <p>
              Almonds offers premium subscription plans that provide access to additional features. Subscription
              pricing and features are displayed in the App.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Billing</h3>
            <p>
              Subscriptions are billed through the Apple App Store. All subscription fees are charged in
              accordance with the payment terms disclosed to you at the time of purchase. Subscriptions
              automatically renew unless you cancel before the renewal date.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.3 Cancellation and Refunds</h3>
            <p>
              You can cancel your subscription at any time through your Apple App Store account settings.
              Cancellations will take effect at the end of the current billing period. Refunds are handled
              according to Apple's refund policy.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4.4 Free Trials</h3>
            <p>
              We may offer free trials of our premium features. If you do not cancel before the end of
              the trial period, you will be automatically charged for a subscription.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. User Conduct</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Use the App for any illegal purpose or in violation of any laws</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
              <li>Interfere with or disrupt the App or servers</li>
              <li>Upload, post, or transmit any harmful, offensive, or inappropriate content</li>
              <li>Impersonate any person or entity</li>
              <li>Collect or store personal data about other users without consent</li>
              <li>Use automated tools to access the App without permission</li>
              <li>Reverse engineer, decompile, or disassemble the App</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property Rights</h2>
            <p>
              The App and its original content, features, and functionality are owned by Almonds and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual
              property laws.
            </p>
            <p className="mt-4">
              You may not copy, modify, distribute, sell, or lease any part of the App without our prior
              written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. User Content</h2>
            <p>
              You may have the opportunity to submit ratings, reviews, or other content to the App ("User
              Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free
              license to use, reproduce, modify, and display such content in connection with the App.
            </p>
            <p className="mt-4">
              You represent and warrant that you own or have the necessary rights to submit your User
              Content and that it does not violate any third-party rights or applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS
              OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
              A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="mt-4">
              We do not warrant that:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The App will function uninterrupted, secure, or error-free</li>
              <li>Any errors or defects will be corrected</li>
              <li>The App or its servers are free of viruses or harmful components</li>
              <li>The results obtained from using the App will be accurate or reliable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Health and Nutritional Information</h2>
            <p className="font-semibold text-red-600">
              IMPORTANT: The nutritional information and product data provided by the App is for
              informational purposes only and should not be considered medical or dietary advice.
            </p>
            <p className="mt-4">
              You should:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Consult with healthcare professionals before making dietary changes</li>
              <li>Always read product labels and verify information independently</li>
              <li>Not rely solely on the App for allergy or health-related decisions</li>
              <li>Understand that product formulations may change without notice</li>
            </ul>
            <p className="mt-4">
              We are not responsible for any decisions you make based on information provided by the App.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL ALMONDS, ITS AFFILIATES, DIRECTORS,
              EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR OTHER
              INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Your use or inability to use the App</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from the App</li>
              <li>Any bugs, viruses, or harmful code that may be transmitted to or through the App</li>
              <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Almonds and its affiliates, officers,
              directors, employees, and agents from and against any claims, liabilities, damages, losses,
              and expenses, including reasonable attorneys' fees, arising out of or in any way connected
              with your access to or use of the App or your violation of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Termination</h2>
            <p>
              We may terminate or suspend your access to the App immediately, without prior notice or
              liability, for any reason, including without limitation if you breach these Terms.
            </p>
            <p className="mt-4">
              Upon termination, your right to use the App will immediately cease. All provisions of these
              Terms that by their nature should survive termination shall survive, including ownership
              provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material,
              we will provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mt-4">
              By continuing to access or use the App after revisions become effective, you agree to be
              bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the United
              States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">15. Dispute Resolution</h2>
            <p>
              Any dispute arising from or relating to these Terms or the App shall be resolved through
              binding arbitration in accordance with the rules of the American Arbitration Association,
              except that either party may seek injunctive or other equitable relief in court.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">16. Severability</h2>
            <p>
              If any provision of these Terms is held to be unenforceable or invalid, such provision will
              be changed and interpreted to accomplish the objectives of such provision to the greatest
              extent possible under applicable law, and the remaining provisions will continue in full
              force and effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">17. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you
              and Almonds regarding the use of the App and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">18. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
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
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <Link to="/privacypolicy" className="text-emerald-600 hover:underline">
            Privacy Policy
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

export default TermsOfService;
