import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. Dr. Panchagnula will get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91-9177575707"],
      action: "tel:+919177575707"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["panchagnimuralidhar@gmail.com"],
      action: "mailto:panchagnimuralidhar@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: ["Hyderabad", "Telangana, India"],
      action: null
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Availability",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-mint-soft/30 via-white to-healthcare-blue/5">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-healthcare-blue/10 backdrop-blur-sm border border-healthcare-blue/20 rounded-full px-6 py-3 text-sm font-medium mb-6">
              <MessageCircle className="h-5 w-5 text-healthcare-blue" />
              <span className="text-healthcare-blue">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Get In <span className="bg-gradient-to-r from-healthcare-blue to-gold bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your healthcare management needs? Reach out for expert consultation, 
              training programs, or strategic healthcare guidance.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <ScrollReveal direction="left" delay={200}>
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
                <p className="text-navy/70 mb-8 leading-relaxed">
                  Connect with Dr. Muralidhar Panchagnula for healthcare management consultation, 
                  training, and advisory services.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ScrollReveal key={index} delay={300 + index * 100}>
                    <Card className="hover-lift border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                            index === 0 ? 'bg-healthcare-blue/10 text-healthcare-blue' :
                            index === 1 ? 'bg-gold/10 text-gold' :
                            index === 2 ? 'bg-coral/10 text-coral' :
                            'bg-mint/10 text-mint'
                          }`}>
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-navy mb-2">{info.title}</h4>
                            {info.action ? (
                              <a 
                                href={info.action}
                                className="text-healthcare-blue hover:text-healthcare-blue/80 transition-colors hover-scale inline-block"
                              >
                                {info.details.map((detail, i) => (
                                  <div key={i} className="text-sm font-medium">{detail}</div>
                                ))}
                              </a>
                            ) : (
                              info.details.map((detail, i) => (
                                <div key={i} className="text-sm text-navy/70">{detail}</div>
                              ))
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Professional Networks */}
              <ScrollReveal delay={700}>
                <Card className="hover-lift border-0 bg-gradient-to-br from-navy to-healthcare-blue text-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Professional Networks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 group">
                        <div className="w-2 h-2 bg-gold rounded-full group-hover:animate-pulse"></div>
                        <span className="text-sm text-white/90 group-hover:text-white transition-colors">T-Hub Ecosystem</span>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="w-2 h-2 bg-gold rounded-full group-hover:animate-pulse"></div>
                        <span className="text-sm text-white/90 group-hover:text-white transition-colors">AINU Ethics Committee</span>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="w-2 h-2 bg-gold rounded-full group-hover:animate-pulse"></div>
                        <span className="text-sm text-white/90 group-hover:text-white transition-colors">GUIDEPOINT Global Advisors</span>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="w-2 h-2 bg-gold rounded-full group-hover:animate-pulse"></div>
                        <span className="text-sm text-white/90 group-hover:text-white transition-colors">NITI Aayog - AIM Healthcare</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right" delay={400}>
            <div className="lg:col-span-2">
              <Card className="hover-lift border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader className="pb-6 text-center lg:text-left">
                  <CardTitle className="text-3xl font-bold text-navy">Send a Message</CardTitle>
                  <p className="text-navy/70 leading-relaxed">
                    Fill out the form below and Dr. Panchagnula will respond to your inquiry promptly.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-navy">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-healthcare-blue/20 focus:border-healthcare-blue border-gray-200 text-lg py-3"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-navy">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="transition-all duration-200 focus:ring-2 focus:ring-healthcare-blue/20 focus:border-healthcare-blue border-gray-200 text-lg py-3"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-navy">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-healthcare-blue/20 focus:border-healthcare-blue border-gray-200 text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-navy">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Please provide details about your inquiry..."
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-200 focus:ring-2 focus:ring-healthcare-blue/20 focus:border-healthcare-blue border-gray-200 text-lg resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="gold"
                      size="lg" 
                      className="w-full text-lg py-4 animate-glow-gold group font-semibold"
                    >
                      Send Message
                      <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;