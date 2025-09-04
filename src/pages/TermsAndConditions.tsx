import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-4xl mx-auto py-12 px-4">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold text-primary mb-6">Terms and Conditions</h1>
            <p className="text-sm text-muted-foreground mb-8">Last updated: August 1, 2025</p>

            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Introduction and Acceptance</h2>
                <p className="mb-4">
                  Welcome to Insight - The Mind Clinic. These Terms and Conditions govern your access to and use of our website at drhamzahussain.com and all associated services provided by Insight - The Mind Clinic.
                </p>
                <p>
                  By accessing, browsing, or using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not access or use our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Definitions</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Website</strong> refers to drhamzahussain.com and all its subdomains, pages, and content.</li>
                  <li><strong>Services</strong> refers to all mental health consultation, treatment, and related services provided by Insight - The Mind Clinic.</li>
                  <li><strong>User</strong> refers to any individual who accesses or uses our website or services.</li>
                  <li><strong>Content</strong> refers to all text, graphics, images, videos, and other materials available on our website.</li>
                  <li><strong>Healthcare Services</strong> refers to psychiatric consultation, therapy, counseling, and related medical services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Healthcare Services Disclaimer</h2>
                <p className="mb-4">
                  <strong>Important Medical Disclaimer:</strong> The information provided on this website is for general informational purposes only and does not constitute medical advice. Our healthcare services are provided by licensed mental health professionals, but this website content should not be used as a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Always seek the advice of qualified mental health providers with any questions regarding your mental health condition</li>
                  <li>Never disregard professional medical advice or delay seeking treatment based on information found on this website</li>
                  <li>In case of mental health emergencies, contact emergency services immediately at 108 or your local emergency number</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Use of Website and Services</h2>
                <h3 className="font-semibold mb-2">4.1 Eligibility</h3>
                <p className="mb-4">
                  You must be at least 18 years old to use our services. By using our website and services, you confirm that you meet this eligibility requirement.
                </p>

                <h3 className="font-semibold mb-2">4.2 Permitted Uses</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Accessing mental health information and resources</li>
                  <li>Booking appointments with our healthcare professionals</li>
                  <li>Receiving mental health consultation and treatment services</li>
                  <li>Participating in educational content and programs</li>
                </ul>

                <h3 className="font-semibold mb-2">4.3 Prohibited Uses</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Using the website for any unlawful purpose</li>
                  <li>Attempting to gain unauthorized access to our systems or user accounts</li>
                  <li>Uploading or transmitting viruses, malware, or harmful code</li>
                  <li>Using automated systems or bots to access our services</li>
                  <li>Impersonating any person or entity</li>
                  <li>Collecting or harvesting personal information of other users</li>
                  <li>Using our services for commercial purposes without written authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Intellectual Property Rights</h2>
                <p className="mb-4">
                  All content on this website, including but not limited to text, graphics, logos, images, videos, software, and the overall design, is the exclusive property of Insight - The Mind Clinic or its content creators and is protected by Indian and international copyright, trademark, and intellectual property laws.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may view and download content for personal, non-commercial use only</li>
                  <li>You must not reproduce, distribute, modify, or create derivative works without explicit written permission</li>
                  <li>All trademarks, service marks, and logos displayed on the website are registered and unregistered marks of Insight - The Mind Clinic</li>
                  <li>Unauthorized use of any content may violate copyright, trademark, and other applicable laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Appointment Booking and Cancellation</h2>
                <h3 className="font-semibold mb-2">6.1 Booking Terms</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Appointments must be booked through our official website or authorized booking channels</li>
                  <li>Full payment or valid insurance information may be required at the time of booking</li>
                  <li>We reserve the right to reschedule or cancel appointments due to unforeseen circumstances</li>
                </ul>

                <h3 className="font-semibold mb-2">6.2 Cancellation Policy</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cancellations must be made at least 24 hours before the scheduled appointment</li>
                  <li>Late cancellations or no-shows may incur charges as per our cancellation policy</li>
                  <li>Emergency cancellations will be considered on a case-by-case basis</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Fees and Payment Terms</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All fees for services are clearly displayed on our website and communicated during booking</li>
                  <li>Payment must be made in full at the time of service unless prior arrangements have been made</li>
                  <li>We accept various payment methods including cash, credit/debit cards, and digital payments</li>
                  <li>Insurance coverage is subject to individual policy terms and verification</li>
                  <li>Any additional services or extended sessions will be charged accordingly</li>
                  <li>All fees are non-refundable except as required by law or our specific refund policy</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
                <p className="mb-4">
                  To the fullest extent permitted by applicable law, Insight - The Mind Clinic, its directors, employees, agents, and affiliates shall not be liable for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Any direct, indirect, incidental, special, or consequential damages</li>
                  <li>Loss of profits, data, or other intangible losses resulting from website use or services</li>
                  <li>Any errors or omissions in content or services</li>
                  <li>Any unauthorized access to or use of our secure servers and/or personal information</li>
                  <li>Any interruption or cessation of transmission to or from our website</li>
                  <li>Any bugs, viruses, or similar issues transmitted through our website</li>
                </ul>
                <p className="mt-4">
                  This limitation applies whether the alleged liability is based on contract, tort, negligence, strict liability, or otherwise, even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Insight - The Mind Clinic and its affiliates, directors, officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from your use of our website or services, or your violation of these Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">10. Third-Party Links and Services</h2>
                <p>
                  Our website may contain links to third-party websites or services that are not owned or controlled by Insight - The Mind Clinic. We do not endorse or assume any responsibility for third-party content, products, or services. Your use of third-party websites is at your own risk and subject to their respective terms and conditions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">11. Termination</h2>
                <p>
                  We reserve the right to terminate or suspend your access to our website and services immediately, without prior notice or liability, for any reason, including breach of these Terms and Conditions. Upon termination, your right to use our services will cease immediately.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">12. Governing Law and Jurisdiction</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra, India.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">13. Changes to Terms and Conditions</h2>
                <p>
                  We reserve the right to modify or replace these Terms and Conditions at any time. We will notify you of significant changes by posting the updated terms on this page with a revised "last updated" date. Your continued use of our website and services after any changes constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">14. Severability</h2>
                <p>
                  If any provision of these Terms and Conditions is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">15. Contact Information</h2>
                <p className="mb-2">For questions about these Terms and Conditions:</p>
                <ul className="list-none space-y-1">
                  <li><strong>Email:</strong> admin@drhamzahussain.com</li>
                  <li><strong>Phone:</strong> +91 9030926162</li>
                  <li><strong>Address:</strong> Insight - The Mind Clinic, Pune, Maharashtra, India</li>
                </ul>
              </section>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-muted-foreground">
                  These Terms and Conditions were last reviewed and updated on August 1, 2025.
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

export default TermsAndConditions;