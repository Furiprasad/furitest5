
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin 
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    // Reset form here if needed
  };

  return (
    <section className="section-padding" id="contact-form">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="mb-6">Contact Information</h2>
            <p className="text-gray-700 mb-8">
              We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 text-primary-800 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Office Location</h3>
                  <p className="text-gray-700">
                    TPT Colony, Balayya Sastri Layout, Seethammadara, Visakhapatnam, Andhra Pradesh 530013
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 text-primary-800 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Phone Number</h3>
                  <p className="text-gray-700">7416992299</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 text-primary-800 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email Address</h3>
                  <p className="text-gray-700">furimediaservices@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 text-primary-800 rounded-lg">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Working Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 text-gray-700 hover:bg-primary-800 hover:text-white rounded-full transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 text-gray-700 hover:bg-primary-800 hover:text-white rounded-full transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 text-gray-700 hover:bg-primary-800 hover:text-white rounded-full transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="p-3 bg-gray-100 text-gray-700 hover:bg-primary-800 hover:text-white rounded-full transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="7416992299" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea id="message" rows={5} placeholder="Tell us about your project or inquiry..." required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary-800 hover:bg-primary-900">
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
