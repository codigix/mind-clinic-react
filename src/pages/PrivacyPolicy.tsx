import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto py-12 px-4">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: August 1, 2025</p>

            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
                <p className="mb-4">
                  At Insight - The Mind Clinic, we are deeply committed to protecting your privacy and maintaining the confidentiality of your personal and health information. This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our website at drhamzahussain.com or use our mental health services.
                </p>
                <p>
                  By accessing our website or using our services, you acknowledge that you have read and understood this Privacy Policy. We operate in compliance with applicable Indian laws, including the Information Technology Act, 2000, and maintain the highest standards of medical confidentiality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Information We Collect</h2>
                <p className="mb-4">We collect information to provide you with the best possible mental health care and services:</p>
                
                <h3 className="font-semibold mb-2">Personal Information:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Basic identification details (name, age, contact information)</li>
                  <li>Medical history and mental health information</li>
                  <li>Emergency contact details</li>
                  <li>Insurance information (if applicable)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="font-semibold mb-2">Technical Information:</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>IP address and device identifiers</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>

                <h3 className="font-semibold mb-2">Communication Data:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Appointment bookings and confirmations</li>
                  <li>Email and message correspondence</li>
                  <li>Feedback and survey responses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. How We Use Your Information</h2>
                <p className="mb-4">Your information is used exclusively for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Healthcare Delivery:</strong> To provide mental health assessment, treatment, and ongoing care</li>
                  <li><strong>Appointment Management:</strong> To schedule, confirm, and manage your appointments</li>
                  <li><strong>Communication:</strong> To respond to your inquiries and provide important health-related information</li>
                  <li><strong>Treatment Improvement:</strong> To enhance our services and develop personalized treatment plans</li>
                  <li><strong>Legal Compliance:</strong> To meet regulatory and legal requirements in healthcare provision</li>
                  <li><strong>Emergency Care:</strong> To contact you or your emergency contacts in case of medical emergencies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Protection and Security</h2>
                <p className="mb-4">
                  We implement comprehensive security measures to protect your information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Encryption:</strong> All data is encrypted during transmission and storage</li>
                  <li><strong>Access Controls:</strong> Strict access controls limit information to authorized healthcare professionals only</li>
                  <li><strong>Secure Systems:</strong> We use HIPAA-compliant systems and secure servers</li>
                  <li><strong>Regular Audits:</strong> Regular security assessments and updates to maintain protection standards</li>
                  <li><strong>Staff Training:</strong> All staff receive comprehensive privacy and confidentiality training</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Data Sharing and Disclosure</h2>
                <p className="mb-4">
                  We maintain strict confidentiality and only share information in the following circumstances:
                </p>
                
                <h3 className="font-semibold mb-2">With Your Consent:</h3>
                <p className="mb-3">We may share information with other healthcare providers when you provide explicit consent.</p>

                <h3 className="font-semibold mb-2">Legal Requirements:</h3>
                <p className="mb-3">We may disclose information when required by law, court order, or regulatory authorities.</p>

                <h3 className="font-semibold mb-2">Emergency Situations:</h3>
                <p className="mb-3">Information may be shared to prevent serious harm to you or others in emergency situations.</p>

                <h3 className="font-semibold mb-2">Service Providers:</h3>
                <p>We may engage trusted third-party service providers who assist in our operations, bound by strict confidentiality agreements.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Your Rights and Choices</h2>
                <p className="mb-4">You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your information (subject to legal retention requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another provider</li>
                  <li><strong>Opt-out:</strong> Opt-out of non-essential communications</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Cookies and Tracking Technologies</h2>
                <p className="mb-4">
                  We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. Essential cookies required for website functionality cannot be disabled.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
                <p>
                  We retain your information only as long as necessary for healthcare provision, legal compliance, and business operations. Medical records are retained according to applicable healthcare regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Data Retention</h2>
                <p>
                  We retain your information only as long as necessary for healthcare provision, legal compliance, and business operations. Medical records are retained according to applicable healthcare regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes through our website or direct communication. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
                <p className="mb-2">For questions about this Privacy Policy or to exercise your rights:</p>
                <ul className="list-none space-y-1">
                  <li><strong>Email:</strong> admin@drhamzahussain.com</li>
                  <li><strong>Phone:</strong> +91 9030926162</li>
                  <li><strong>Address:</strong> Insight - The Mind Clinic, Pune, Maharashtra, India</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  This Privacy Policy was last reviewed and updated on August 1, 2025.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;