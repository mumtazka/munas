import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';

const ContactSection = ({ data }) => {
  const { personal } = data;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-light text-gray-900">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-gray-600 font-light">
          Have a project in mind or just want to chat? I&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-light text-gray-900">
              Get In Touch
            </h3>
            <p className="text-gray-600 leading-relaxed font-light">
              I&apos;m always interested in new opportunities and exciting projects. 
              Whether you have a specific project in mind or just want to explore possibilities, 
              let&apos;s start a conversation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 font-light">Email</p>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors font-light"
                >
                  {personal.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 font-light">Phone</p>
                <a
                  href={`tel:${personal.phone}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors font-light"
                >
                  {personal.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500 font-light">Location</p>
                <p className="text-gray-900 font-light">{personal.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-medium text-gray-900 mb-2">
              Response Time
            </h4>
            <p className="text-gray-600 text-sm font-light">
              I typically respond to messages within 24 hours. For urgent matters, 
              feel free to call directly.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-8">
          <h3 className="text-2xl font-light text-gray-900">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm text-gray-700 font-medium">
                  Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border-gray-200 focus:border-gray-400 font-light"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm text-gray-700 font-medium">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-gray-200 focus:border-gray-400 font-light"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-gray-700 font-medium">
                Subject *
              </label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="border-gray-200 focus:border-gray-400 font-light"
                placeholder="What's this about?"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm text-gray-700 font-medium">
                Message *
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="border-gray-200 focus:border-gray-400 resize-none font-light"
                placeholder="Tell me about your project or what you'd like to discuss..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 transition-colors font-light flex items-center justify-center space-x-2 disabled:opacity-70"
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </div>
              )}
            </button>
          </form>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-100">
        <p className="text-gray-500 text-center font-light">
          Thank you for taking the time to view my portfolio. I look forward to connecting with you!
        </p>
      </div>
    </div>
  );
};

export default ContactSection;