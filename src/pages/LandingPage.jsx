import React, { useState, useEffect, useRef } from 'react';
import { Activity, Users, MessageSquare, Pill, Clock, Zap, ChevronRight, Menu, X, Stethoscope, Heart, Brain, Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export default function MedicoHelpPremium() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isLoading) {
    return <PremiumLoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-pulse" style={{animationDuration: '12s', animationDelay: '4s'}}></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(79, 172, 254, 0.05) 25%, rgba(79, 172, 254, 0.05) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, 0.05) 75%, rgba(79, 172, 254, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(79, 172, 254, 0.05) 25%, rgba(79, 172, 254, 0.05) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, 0.05) 75%, rgba(79, 172, 254, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Navigation */}
      <PremiumNavbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} mousePosition={mousePosition} />

      {/* Hero Section with 3D */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeInLeft">
            <div className="inline-block">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 backdrop-blur-xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold tracking-wider text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> FUTURE OF HEALTHCARE
                </span>
              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Healthcare
              </span>
              <br />
              <span className="text-white">Reimagined</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              MedicoHelp harnesses artificial intelligence to transform private clinics into intelligent healthcare ecosystems. Reduce manual work, elevate patient care, and scale effortlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Start Free Trial <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 hover:border-white text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300">
                Watch 3-Min Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700">
              <div className="group">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <p className="text-gray-400 text-sm mt-2">Active Clinics</p>
              </div>
              <div className="group">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  50K+
                </div>
                <p className="text-gray-400 text-sm mt-2">Lives Improved</p>
              </div>
              <div className="group">
                <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  99.9%
                </div>
                <p className="text-gray-400 text-sm mt-2">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right - 3D Dashboard */}
          <div className="hidden lg:block relative h-96 animate-fadeInRight">
            <div className="relative w-full h-full">
              {/* 3D Card with Rotation */}
              <div 
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  perspective: '1000px',
                  transform: `rotateX(${mousePosition.y / 100}deg) rotateY(${mousePosition.x / 100}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 backdrop-blur-xl rounded-2xl shadow-2xl">
                  {/* Dashboard Header */}
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center px-6 gap-3 border-b border-white/10">
                    <Activity className="w-6 h-6 text-white animate-pulse" />
                    <span className="font-bold text-white">MedicoHelp Dashboard</span>
                    <div className="ml-auto flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4 h-80 overflow-hidden">
                    {/* Waiting Patients Card */}
                    <div className="p-4 rounded-lg bg-gradient-to-br from-blue-500/30 to-blue-600/10 border border-blue-500/50 animate-slideIn">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-300">Waiting Patients</span>
                        <Users className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="text-3xl font-black text-blue-300">12</div>
                      <div className="mt-2 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Active Consultation */}
                    <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-purple-500/50 animate-slideIn" style={{animationDelay: '0.1s'}}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-300">In Consultation</span>
                        <Activity className="w-5 h-5 text-purple-400" />
                      </div>
                      <div className="text-3xl font-black text-purple-300">1</div>
                      <div className="mt-2 text-xs text-gray-400">Patient: Rahul Kumar</div>
                    </div>

                    {/* Queue Order */}
                    <div className="p-4 rounded-lg bg-gradient-to-br from-pink-500/30 to-pink-600/10 border border-pink-500/50 animate-slideIn" style={{animationDelay: '0.2s'}}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-300">Next in Queue</span>
                        <TrendingUp className="w-5 h-5 text-pink-400" />
                      </div>
                      <div className="text-3xl font-black text-pink-300">3</div>
                      <div className="mt-2 text-xs text-gray-400">Priya Sharma - Est. 8 min</div>
                    </div>

                    {/* Chart Animation */}
                    <div className="flex gap-1 items-end h-12">
                      {[0.4, 0.6, 0.8, 1, 0.9, 0.7, 0.85].map((height, i) => (
                        <div 
                          key={i} 
                          className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-blue-500 animate-chartBars"
                          style={{
                            height: `${height * 100}%`,
                            animationDelay: `${i * 0.1}s`,
                            animation: 'chartBars 2s ease-in-out infinite'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-float">
                <div className="text-center">
                  <Brain className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="text-sm font-bold text-white">AI Ready</span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-center justify-center">
              <div className="w-1 h-2 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with 3D Cards */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enterprise-grade technology designed specifically for modern healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => (
              <PremiumFeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Patient Journey
              </span>
            </h2>
          </div>

          <div className="relative">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <polyline
                points="5%,50% 25%,50% 25%,20% 45%,20% 45%,50% 65%,50% 65%,80% 85%,80% 85%,50% 95%,50%"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="3"
                opacity="0.3"
              />
              <polyline
                points="5%,50% 25%,50% 25%,20% 45%,20% 45%,50% 65%,50% 65%,80% 85%,80% 85%,50% 95%,50%"
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                opacity="1"
                style={{animation: 'drawLine 4s ease-in-out infinite'}}
              />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {workflowSteps.map((step, index) => (
                <div key={index} className="text-center animate-fadeInUp" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-purple-600/50 group hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Technology Stack */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Cutting-Edge Technology
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Tech Stack */}
            <div className="space-y-6">
              {techStack.map((tech, index) => (
                <div key={index} className="group cursor-pointer animate-fadeInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="p-6 rounded-xl border border-gray-700 bg-gradient-to-r from-gray-900/50 to-gray-800/50 hover:border-blue-500/50 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300 backdrop-blur">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <tech.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{tech.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{tech.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Animated 3D Cube */}
            <div className="flex justify-center items-center">
              <div className="relative w-80 h-80 animate-rotatingCube">
                <div className="absolute inset-0" style={{perspective: '1000px'}}>
                  {/* Front */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg opacity-80 flex items-center justify-center font-bold text-2xl"
                    style={{transform: 'rotateY(0deg) translateZ(160px)'}}>
                    AI Engine
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg opacity-80 flex items-center justify-center font-bold text-2xl"
                    style={{transform: 'rotateY(180deg) translateZ(160px)'}}>
                    Cloud Infra
                  </div>
                  {/* Right */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg opacity-80 flex items-center justify-center font-bold text-2xl"
                    style={{transform: 'rotateY(90deg) translateZ(160px)'}}>
                    Security
                  </div>
                  {/* Left */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg opacity-80 flex items-center justify-center font-bold text-2xl"
                    style={{transform: 'rotateY(-90deg) translateZ(160px)'}}>
                    Analytics
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
                Trusted by Doctors
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="p-8 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:border-blue-500/50 hover:from-blue-900/20 hover:to-purple-900/20 transition-all duration-300 backdrop-blur h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fadeInUp">
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transform Your Clinic Today
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution. Sign up for a free 14-day trial and see how MedicoHelp can revolutionize your clinic operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg overflow-hidden hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-10 py-4 border-2 border-gray-600 hover:border-white text-white rounded-xl font-bold text-lg hover:bg-white/5 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Activity className="w-6 h-6 text-blue-400" />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MedicoHelp</span>
              </div>
              <p className="text-gray-400">The future of clinical management is here.</p>
            </div>
            {footerColumns.map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MedicoHelp. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes chartBars {
          0%, 100% {
            opacity: 0.5;
            transform: scaleY(0.8);
          }
          50% {
            opacity: 1;
            transform: scaleY(1);
          }
        }

        @keyframes rotatingCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @keyframes drawLine {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-slideIn {
          animation: slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-rotatingCube {
          animation: rotatingCube 8s linear infinite;
          transform-style: preserve-3d;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .group {
          position: relative;
        }

        .group-hover\\:scale-110:hover {
          transform: scale(1.1);
        }

        .group-hover\\:translate-x-1:hover {
          transform: translateX(0.25rem);
        }
      `}</style>
    </div>
  );
}

// Premium Loading Screen
function PremiumLoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <div className="relative w-32 h-32">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin" style={{animationDuration: '3s'}}></div>
          
          {/* Middle Ring */}
          <div className="absolute inset-4 rounded-full border-3 border-transparent border-b-cyan-500 border-l-pink-500 animate-spin" style={{animationDuration: '4s', animationDirection: 'reverse'}}></div>

          {/* Inner Pulse */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 animate-pulse flex items-center justify-center">
            <Activity className="w-16 h-16 text-white animate-pulse" />
          </div>

          {/* Particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                top: `${50 + 35 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                left: `${50 + 35 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                animation: `float 4s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.5))'
              }}
            ></div>
          ))}
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
            MedicoHelp
          </h2>
          <p className="text-gray-400 text-sm">Powering Healthcare Innovation</p>
        </div>

        {/* Progress Bar */}
        <div className="w-80 h-1.5 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse" style={{
            animation: 'loadingBar 2s ease-in-out infinite',
          }}></div>
        </div>

        {/* Loading Text */}
        <div className="flex gap-2 text-gray-400 text-sm">
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
          <span className="inline-block w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
          <span className="ml-2">Initializing AI Engine</span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes loadingBar {
          0% { width: 0; opacity: 0.3; }
          50% { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0.3; }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-spin {
          animation: spin 3s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>
    </div>
  );
}

// Premium Navbar
function PremiumNavbar({ isMobileMenuOpen, setIsMobileMenuOpen, mousePosition }) {
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-gray-700/50 backdrop-blur-xl bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 font-bold text-xl group cursor-pointer">
            <Activity className="w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors" />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              MedicoHelp
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Platform', 'Pricing', 'Blog'].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-blue-400 font-medium transition-colors">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-purple-600/50 hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-4 border-t border-gray-700/50 pt-4">
            {['Features', 'Platform', 'Pricing', 'Blog'].map((link, i) => (
              <a key={i} href="#" className="block text-gray-300 hover:text-blue-400 font-medium">
                {link}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

// Premium Feature Card
function PremiumFeatureCard({ feature, index }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="group relative animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative p-8 rounded-xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur h-full">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-600/50">
          <feature.icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed mb-4">{feature.description}</p>
        <a href="#" className="text-blue-400 hover:text-purple-400 font-semibold flex items-center gap-2 group/link">
          Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// Data
const premiumFeatures = [
  {
    icon: Users,
    title: 'Patient Portal',
    description: 'Intuitive patient registration, appointment booking, and real-time queue management system'
  },
  {
    icon: Brain,
    title: 'AI Intake System',
    description: 'Intelligent symptom analysis with adaptive questioning and structured data collection'
  },
  {
    icon: Stethoscope,
    title: 'Live Consultation',
    description: 'Real-time consultation with voice recording, transcription, and AI-powered note generation'
  },
  {
    icon: Pill,
    title: 'Smart Prescriptions',
    description: 'AI-generated digital prescriptions with patient-friendly explanations and dosage guides'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Bot',
    description: 'Automated medicine reminders, follow-ups, and appointment notifications via WhatsApp'
  },
  {
    icon: TrendingUp,
    title: 'Analytics Dashboard',
    description: 'Real-time clinic analytics, patient insights, and performance metrics at a glance'
  }
];

const workflowSteps = [
  {
    icon: Users,
    title: 'Register',
    description: 'Patient sign-up'
  },
  {
    icon: Brain,
    title: 'Intake',
    description: 'AI assessment'
  },
  {
    icon: Activity,
    title: 'Consult',
    description: 'Live session'
  },
  {
    icon: Pill,
    title: 'Prescribe',
    description: 'Digital Rx'
  }
];

const techStack = [
  {
    icon: Brain,
    title: 'Advanced AI Engine',
    description: 'GPT-4 powered conversation and prescription generation'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Sub-second response times for seamless experience'
  },
  {
    icon: Heart,
    title: 'Healthcare Compliant',
    description: 'HIPAA, GDPR, and local healthcare regulations'
  },
  {
    icon: Activity,
    title: 'Cloud Infrastructure',
    description: '99.99% uptime with auto-scaling and redundancy'
  }
];

const testimonials = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Cardiologist, Delhi',
    text: 'MedicoHelp has completely transformed how I manage my clinic. Patient wait times have reduced by 50%.'
  },
  {
    name: 'Dr. Priya Singh',
    title: 'General Physician, Mumbai',
    text: 'The AI prescription feature is a game-changer. Patients understand their medications much better now.'
  },
  {
    name: 'Dr. Amit Patel',
    title: 'Pediatrician, Bangalore',
    text: 'The WhatsApp integration has improved patient compliance significantly. Highly recommend!'
  }
];

const footerColumns = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Security', 'API']
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact']
  },
  {
    title: 'Resources',
    links: ['Docs', 'Guides', 'Community', 'Support']
  }
];