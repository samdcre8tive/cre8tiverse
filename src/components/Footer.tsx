import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Mail, Linkedin } from 'lucide-react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/cre8tiverse/' },
    { icon: Instagram, href: 'https://www.instagram.com/cre8tiverse/' },
    { icon: Youtube, href: 'https://www.youtube.com/@cre8tiverse' },
    { icon: Twitter, href: 'https://twitter.com/cre8tiverse' },
    { icon: Mail, href: 'mailto:cre8tiverse@gmail.com' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/cre8tiverse' },
    { 
      icon: () => <Icon icon="ri:tiktok-fill" className="w-6 h-6" />,
      href: 'https://www.tiktok.com/@cre8tiverse'
    },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold mb-4">
            Cre8tiverse – Creating Multimedia & EdTech Solutions
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors duration-200"
              >
                {typeof link.icon === 'function' ? (
                  <link.icon />
                ) : (
                  <link.icon size={24} />
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Cre8tiverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;