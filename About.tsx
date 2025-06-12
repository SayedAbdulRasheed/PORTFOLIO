import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export default function About({ isDark }: AboutProps) {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'I believe great functionality deserves beautiful, intuitive design.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and user experience in every project.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${isDark ? 'bg-slate-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                My Journey
              </h3>
              <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
                <p>
                  With over 5 years of experience in web development, I've had the privilege of working 
                  with startups and established companies to bring their digital visions to life.
                </p>
                <p>
                  I specialize in React, Node.js, and modern web technologies, always staying current 
                  with the latest industry trends and best practices. My background in both development 
                  and design allows me to bridge the gap between technical implementation and user experience.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or sharing knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className={`${isDark ? 'bg-slate-700' : 'bg-white'} rounded-2xl p-8 shadow-xl`}>
                <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Quick Facts
                </h4>
                <div className="space-y-3">
                  {[
                    { label: 'Experience', value: '5+ Years' },
                    { label: 'Projects Completed', value: '50+' },
                    { label: 'Happy Clients', value: '30+' },
                    { label: 'Coffee Consumed', value: '∞' }
                  ].map((fact, index) => (
                    <div key={index} className="flex justify-between">
                      <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>{fact.label}:</span>
                      <span className="text-blue-500 font-semibold">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`${isDark ? 'bg-slate-700' : 'bg-white'} rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mb-4">
                  <highlight.icon size={24} className="text-white" />
                </div>
                <h4 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {highlight.title}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}