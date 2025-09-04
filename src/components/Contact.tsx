import { apiConfig } from '@/config';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const SCRIPT_URL = apiConfig.googleSheetApiKey;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation logic
    if (formData.name.length < 3 || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      toast.error("Invalid Name", { description: "Name must be at least 3 characters long and contain only letters and spaces." });
      return;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      toast.error("Invalid Phone Number", { description: "Phone number must be exactly 10 digits." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Invalid Email", { description: "Please enter a valid email address." });
      return;
    }
    if (formData.message.length < 10 || formData.message.split(' ').length < 4) {
      toast.error("Invalid Message", { description: "Message must be at least 10 characters long or contain at least 4 words." });
      return;
    }
    if (hasSubmitted) {
      toast.error("You have already submitted the form.", { description: "Please refresh the page to send another message." });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      toast.success("Message Sent!", {
       description: "We'll get back to you within 24 hours.",
     });
     setFormData({ name: '', email: '', phone: '', message: '' });
      setHasSubmitted(true);

    } catch (error) {
      toast.error("Oh no! Something went wrong.", {
        description: "There was an error sending your request. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Have questions or need assistance? Reach out to us and we'll get back to you as soon as possible.
         </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe how we can help you"
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || hasSubmitted}>
                    {hasSubmitted ? 'Submitted' : isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Our Location</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Insight - The Mind Clinic<br />
                  2nd Floor, Opus B<br />
                  Undri, Pune IN
                </p>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3783.4292985023794!2d73.90861036727162!3d18.459229729344816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebd54fe0a95f%3A0x4110e2449399a9d!2sInsight%20-%20The%20Mind%20Clinic%20Psychiatrist%20in%20Undri%20%7C%20NIBM%20%7C%20Best%20Psychiatrist%20in%20Kondhwa%20%7C%20Psychologist!5e0!3m2!1sen!2sin!4v1721818800000!5m2!1sen!2sin" 
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+91 9390442784</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">help@insightmind.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Clinic Hours</p>
                    <p className="text-muted-foreground">Mon - Sat 9:00 - 19:00<br />Sunday - 10:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};