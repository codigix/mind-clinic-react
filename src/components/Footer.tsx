import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { clinicInfo, socialLinks } from '@/data/constants';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const Footer = () => {
  const [isCareersModalOpen, setIsCareersModalOpen] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [showInstructions, setShowInstructions] = useState(false);

  // Check if user is on a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSendEmail = () => {
    if (!resumeFile) return;
    
    // Instead of trying to attach the file (which doesn't work with mailto), 
    // we'll show instructions to the user
    setShowInstructions(true);
  };

  const handleDownloadAndClose = () => {
    if (!resumeFile) return;
    
    // Create a temporary download link for the user's resume
    const url = URL.createObjectURL(resumeFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = resumeFile.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Create mailto link with application details (without attachment)
    const subject = encodeURIComponent(`Job Application from ${applicantName}`);
    const body = encodeURIComponent(
      `Dear Hiring Team,\n\n` +
      `I am interested in joining your team. Please find my resume attached.\n\n` +
      `Application Details:\n` +
      `Name: ${applicantName}\n` +
      `Email: ${applicantEmail}\n\n` +
      `Cover Letter:\n${coverLetter}\n\n` +
      `Best regards,\n${applicantName}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:carrer@insightmind.in?subject=${subject}&body=${body}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Close modal and reset form
    setIsCareersModalOpen(false);
    setResumeFile(null);
    setApplicantName('');
    setApplicantEmail('');
    setCoverLetter('');
    setShowInstructions(false);
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/favicon.ico" 
                alt={clinicInfo.fullName}
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold">{clinicInfo.name.toLowerCase()}</span>
                <span className="text-xs uppercase tracking-wider">THE MIND CLINIC</span>
              </div>
            </div>
            <p className="text-background/80">
              Providing comprehensive mental health services with {clinicInfo.psychiatrist}. 
              Professional psychiatric care with empathy and understanding.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-background"
                >
                  {link.name === 'Facebook' && <Facebook className="h-5 w-5" />}
                  {link.name === 'Twitter' && <Twitter className="h-5 w-5" />}
                  {link.name === 'Instagram' && <Instagram className="h-5 w-5" />}
                  {link.name === 'LinkedIn' && <Linkedin className="h-5 w-5" />}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="/services" className="hover:text-background cursor-pointer transition-colors">Psychiatric Care</a></li>
              <li><a href="/services" className="hover:text-background cursor-pointer transition-colors">Therapy & Counselling</a></li>
              <li><a href="/services" className="hover:text-background cursor-pointer transition-colors">Diagnostic & Functional Assessments</a></li>
              <li><a href="/services" className="hover:text-background cursor-pointer transition-colors">Corporate Mental Health Solutions</a></li>
              <li><a href="/services" className="hover:text-background cursor-pointer transition-colors">Lifestyle Psychiatry & Integrative Medicine</a></li>
              <li><a href="/services" className="hover:text-background cursor-pointer transition-colors">Crisis & Emergency Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="/" className="hover:text-background cursor-pointer transition-colors">Home</a></li>
              <li><a href="/aboutus" className="hover:text-background cursor-pointer transition-colors">About Us</a></li>
              <li>
                <span 
                  onClick={() => setIsCareersModalOpen(true)} 
                  className="hover:text-background cursor-pointer transition-colors"
                >
                  Careers
                </span>
              </li>
              <li><a href="/#contact" className="hover:text-background cursor-pointer transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Head Office</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {clinicInfo.address.street}<br />
                  {clinicInfo.address.city}, {clinicInfo.address.state} {clinicInfo.address.zip}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${clinicInfo.phone}`} className="text-sm hover:text-background">
                  {clinicInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${clinicInfo.email}`} className="text-sm hover:text-background">
                  {clinicInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {clinicInfo.hours.weekday}<br />
                  {clinicInfo.hours.weekend}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
          <p className="mb-2">
            &copy; 2025 {clinicInfo.fullName}. All rights reserved. |
            <a href="/privacy-policy" className="hover:text-background">Privacy Policy</a> |
            <a href="/terms-and-conditions" className="hover:text-background">Terms of Service</a>
          </p>
          <p className="text-sm font-semibold tracking-wider text-background/90">
            Designed & Developed by{' '}
            <a
              href="https://build2automate.online"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-primary-foreground/90 hover:text-primary-foreground transition-colors underline"
            >
              build2automate.online
            </a>
            {' '}🛠️
          </p>
        </div>
      </div>

      {/* Careers Modal */}
      <Dialog open={isCareersModalOpen} onOpenChange={(open) => {
        setIsCareersModalOpen(open);
        if (!open) {
          // Reset form when closing
          setResumeFile(null);
          setApplicantName('');
          setApplicantEmail('');
          setCoverLetter('');
          setShowInstructions(false);
        }
      }}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join Our Team</DialogTitle>
          </DialogHeader>
          
          {showInstructions ? (
            <div className="grid gap-4 py-4">
              <p className="text-sm text-foreground">
                Please follow these steps to complete your application:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-foreground">
                <li>Your resume <strong>{resumeFile?.name}</strong> will be downloaded automatically</li>
                <li>Your email client will open with a pre-filled message</li>
                <li>Attach your resume to the email</li>
                <li>Send the email to complete your application</li>
              </ol>
              {isMobile ? (
                <p className="text-xs text-muted-foreground pt-2">
                  Note: On mobile devices, you may need to manually share the downloaded file to your email app.
                </p>
              ) : (
                <p className="text-xs text-muted-foreground pt-2">
                  Note: Your email client may block automatic file attachments. Please manually attach your resume.
                </p>
              )}
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowInstructions(false)}>
                  Back
                </Button>
                <Button type="submit" onClick={handleDownloadAndClose}>
                  Download Resume & Open Email
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  className="col-span-3"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  className="col-span-3"
                  placeholder="Your email address"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="resume" className="text-right">
                  Resume
                </Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleResumeChange}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="coverLetter" className="text-right">
                  Cover Letter
                </Label>
                <Textarea
                  id="coverLetter"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="col-span-3"
                  placeholder="Tell us why you'd like to join our team..."
                />
              </div>
              <div className="flex justify-end">
                <Button 
                  type="submit" 
                  onClick={handleSendEmail}
                  disabled={!resumeFile || !applicantName || !applicantEmail}
                >
                  Continue Application
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </footer>
  );
};