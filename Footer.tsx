import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
}

export default function Footer({ isDark }: FooterProps) {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 ${isDark ? 'bg-slate-800 border-t border-slate-700' : 'bg-gray-50 border-t border-gray-200'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Brand */}
            <div className="mb-6 md:mb-0">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold hover:scale-105 transition-transform duration-200"
              >
                <span className="text-blue-500">Alex</span>
                <span className={isDark ? 'text-white' : 'text-slate-800'}>Smith</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                    isDark 
                      ? 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  } shadow-lg hover:shadow-xl`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex space-x-6 text-sm">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className={`transition-colors duration-200 ${
                    isDark
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 dark:border-slate-600">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm">
              <div className={`flex items-center space-x-1 mb-4 md:mb-0 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span>© 2025 Alex Smith. Made with</span>
                <Heart size={16} className="text-red-500 animate-pulse" />
                <span>and React</span>
              </div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span>Last updated: January 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}