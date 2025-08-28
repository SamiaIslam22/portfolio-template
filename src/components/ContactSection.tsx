'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

interface ContactSectionProps {
  isAnimating: boolean;
}

const ContactSection = ({ isAnimating }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This would typically connect to your email service (EmailJS, Formspree, etc.)
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would implement actual email sending
      // Example with EmailJS:
      // await emailjs.send('service_id', 'template_id', formData, 'user_id');
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'samiaislam4477@gmail.com',
      href: 'mailto:samiaislam4477@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(347) 885-0199',
      href: 'tel:+13478850199',
      color: 'text-green-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'islam-samia',
      href: 'https://www.linkedin.com/in/islam-samia/',
      color: 'text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SamiaIslam22',
      href: 'https://github.com/SamiaIslam22',
      color: 'text-purple-400'
    }
  ];

  return (
    <motion.section
      className="min-h-screen pt-20 pb-6 px-4"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="font-mono text-sm md:text-base font-bold text-blue-400 mb-2">
            <span className="text-sky-400">function</span>{' '}
            <span className="text-cyan-400">getInTouch</span>
            <span className="text-white">() {'{'}</span>
          </h2>
          <p className="font-mono text-gray-400 text-xs">
            <span className="text-indigo-400">return</span>{' '}
            <span className="text-cyan-300">{"Let's build something amazing together!"}</span>
            <span className="text-gray-400">;</span>
          </p>
          <p className="font-mono text-white text-sm mt-1">{'}'}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div>
              <h3 className="text-lg font-mono font-bold text-blue-400 mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Contact Information
              </h3>
              
              <div className="space-y-3">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 p-3 bg-gray-900/50 backdrop-blur-sm border border-blue-400/30 rounded-lg hover:bg-gray-800/50 hover:border-blue-400/50 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={`p-2 rounded-lg bg-gray-800/50 ${contact.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-mono text-xs text-gray-400">{contact.label}</p>
                        <p className={`font-mono text-sm ${contact.color} group-hover:text-white transition-colors`}>
                          {contact.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Status/Availability */}
            <motion.div
              className="bg-gray-900/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h4 className="font-mono font-bold text-green-400 text-sm">Available for Opportunities</h4>
              </div>
              <p className="font-mono text-xs text-gray-300">
                Open to full-time positions, internships, and exciting projects. 
                Currently seeking <span className="text-blue-400">Software Engineering</span> and{' '}
                <span className="text-cyan-400">AI/ML roles</span> starting Summer 2025.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form - moved down with margin-top */}
          <motion.div
            className="mt-9"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6">
              <h3 className="text-lg font-mono font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-xs text-gray-400 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white font-mono text-xs focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-gray-400 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white font-mono text-xs focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white font-mono text-xs focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block font-mono text-xs text-gray-400 mb-1">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white font-mono text-xs focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition-all duration-300 resize-vertical"
                    placeholder="Tell me about your project, opportunity, or just say hi!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2 bg-blue-400/20 hover:bg-blue-400/30 border border-blue-400 text-blue-400 rounded-lg font-mono font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3" />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="p-3 bg-green-400/20 border border-green-400/50 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-mono text-green-400 text-xs">
                      {"Message sent successfully! I'll get back to you soon."}
                    </p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    className="p-3 bg-red-400/20 border border-red-400/50 rounded-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="font-mono text-red-400 text-xs">
                      Failed to send message. Please try emailing me directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          className="text-center mt-8 p-4 bg-gray-900/50 backdrop-blur-sm border border-blue-400/20 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <p className="font-mono text-gray-400 text-xs">
            <span className="text-gray-500">{"//"} </span>
            Prefer a different method? Feel free to reach out through any of the channels above.
            <br />
            <span className="text-blue-400">Response time: Usually within 24 hours</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;