import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

export default function Hero({ isDark }: HeroProps) {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? '#64748b' : '#94a3b8'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className={`w-32 h-32 mx-auto rounded-full ${isDark ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-400 to-purple-500'} p-1 shadow-2xl animate-pulse`}>
              <div className={`w-full h-full rounded-full ${isDark ? 'bg-slate-800' : 'bg-white'} flex items-center justify-center`}>
                <span className="text-4xl font-bold text-blue-500">AS</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Alex Smith
            </span>
          </h1>

          <p className={`text-xl md:text-2xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Full-Stack Developer & UI/UX Designer
          </p>

          <p className={`text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            I craft beautiful, functional web applications that solve real-world problems. 
            Passionate about clean code, user experience, and innovative solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className={`px-8 py-4 border-2 border-blue-500 rounded-full font-semibold transition-all duration-200 hover:shadow-lg ${
                isDark 
                  ? 'text-blue-400 hover:bg-blue-500 hover:text-white' 
                  : 'text-blue-500 hover:bg-blue-500 hover:text-white'
              }`}
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                } shadow-lg hover:shadow-xl`}
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToAbout}
            className={`animate-bounce p-2 rounded-full transition-colors duration-200 ${
              isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}