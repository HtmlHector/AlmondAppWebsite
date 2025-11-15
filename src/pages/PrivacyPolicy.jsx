import { Link } from "react-router-dom";

const contactEmail = "support@downloadalmonds.tech";

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
}

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
          <Section title="1. Introduction">
            <p>
              Welcome to Almonds (“we,” “our,” “us”). We are committed to protecting your
              privacy and ensuring the security of your personal information when you use
              our mobile and web experiences (“App”). This Privacy Policy explains the data
              we collect, how we use it, and the choices available to you.
            </p>
            <p>
              Please read this policy carefully. By using the App, you agree to the terms
              described below. If you disagree with any part of it, please discontinue using
              the App.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">2.1 Personal Information</h3>
                <p>Provided directly by you when you:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create or update an account</li>
                  <li>Use premium or waitlist features</li>
                  <li>Contact support or interact with us on social media</li>
                </ul>
                <p className="mt-2">
                  The information may include your email address, name, profile photo,
                  authentication data (via Apple/Google), and any preferences you add to your
                  profile.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.2 Automatically Collected Data</h3>
                <p>Collected when you access the App:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Device information (model, OS version, unique identifiers)</li>
                  <li>Log data, crash reports, and diagnostic information</li>
                  <li>Usage analytics, including scan counts and feature usage</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.3 Camera &amp; Barcode Data</h3>
                <p>
                  Camera access is required solely to read barcodes. Images or video are not
                  stored or transmitted. Only the barcode digits are sent securely to our
                  servers to look up the product.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">2.4 Scan History &amp; Preferences</h3>
                <p>
                  To personalize recommendations we may store products you scan, timestamps,
                  allergen settings, favorites, and any notes you add.
                </p>
              </div>
            </div>
          </Section>

          <Section title="3. How We Use Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and personalize product analysis and alerts</li>
              <li>Improve the App through research and analytics</li>
              <li>Process subscriptions, promotions, or waitlist entries</li>
              <li>Communicate important updates, security notices, or support responses</li>
              <li>Detect, prevent, or investigate fraudulent or harmful activity</li>
            </ul>
          </Section>

          <Section title="4. Third-Party Service Providers">
            <p>We rely on trusted vendors who help us operate the App:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Supabase:</strong> authentication, database storage, and waitlist
                management.
              </li>
              <li>
                <strong>Analytics &amp; crash tools:</strong> to understand performance and
                stability (data is aggregated/anonymized when possible).
              </li>
              <li>
                <strong>Apple App Store / Google Play:</strong> for in-app purchases and
                distribution.
              </li>
            </ul>
            <p className="mt-2">
              These providers only receive data necessary to deliver their service and must
              handle it in line with this policy.
            </p>
          </Section>

          <Section title="5. Data Sharing &amp; Disclosure">
            <p>We do not sell your personal information. We may share data only when:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Working with service providers described above</li>
              <li>Complying with legal obligations or responding to lawful requests</li>
              <li>Protecting the safety, rights, or property of Almonds and our users</li>
              <li>Completing a business transaction such as a merger or acquisition</li>
            </ul>
          </Section>

          <Section title="6. Data Retention &amp; Deletion">
            <p>
              We retain data only as long as necessary for the purposes outlined in this
              policy or as required by law. You may request deletion of your account at any
              time through in-app settings or by contacting support. Upon deletion we remove
              account details, scan history, saved preferences, and any associated data
              within 30 days, except where retention is legally required.
            </p>
          </Section>

          <Section title="7. Security">
            <p>
              We implement administrative, technical, and physical safeguards—encryption in
              transit and at rest, access controls, routine audits—to protect your
              information. No system is 100% secure, so please keep your credentials private
              and notify us if you suspect unauthorized access.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on where you live, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access, correct, or delete your personal information</li>
              <li>Request a portable copy of your data</li>
              <li>Restrict or object to certain processing activities</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p className="mt-2">
              To submit a request, contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-emerald-600 hover:underline"
              >
                {contactEmail}
              </a>
              .
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              The App is not intended for children under 13. We do not knowingly collect
              personal data from children. If you believe a child has provided us
              information, contact us and we will promptly delete it.
            </p>
          </Section>

          <Section title="10. International Data Transfers">
            <p>
              We operate in the United States but may process data in other countries. When
              transferring data, we use appropriate safeguards to ensure your information is
              protected according to this policy and applicable law.
            </p>
          </Section>

          <Section title="11. Updates to This Policy">
            <p>
              We may update this Privacy Policy to reflect changes in products, legal
              requirements, or best practices. We will adjust the “Last updated” date above
              and, when appropriate, notify you through the App or email.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>Questions or requests? Reach us at:</p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-emerald-600 hover:underline"
                >
                  {contactEmail}
                </a>
              </p>
              <p className="mt-2">
                <strong>Website:</strong>{" "}
                <a
                  href="https://downloadalmonds.tech"
                  className="text-emerald-600 hover:underline"
                >
                  downloadalmonds.tech
                </a>
              </p>
            </div>
          </Section>

          <Section title="13. California Privacy Rights">
            <p>
              California residents may exercise additional rights under the California
              Consumer Privacy Act (CCPA), including the right to know what personal
              information we collect and how we use it, the right to request deletion, and
              the right to non-discrimination for exercising these rights. We do not sell
              personal information.
            </p>
          </Section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
          <Link to="/termsofservice" className="text-emerald-600 hover:underline">
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
