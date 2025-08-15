import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Calculator, Users, Award, ChevronRight,
  Cpu, Zap, Target, Play, Clock, Star, TrendingUp, Code,
  Database, Rocket, Globe, Lightbulb, CheckCircle, Brain,
  Shield, Smartphone, Layers, Activity, Briefcase, GraduationCap
} from 'lucide-react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const heroStats = [
    { number: '25K+', label: 'Active Learners', subtext: 'Growing community' },
    { number: '500+', label: 'Expert Tutorials', subtext: 'Updated weekly' },
    { number: '50+', label: 'Design Tools', subtext: 'Professional grade' },
    { number: '98%', label: 'Success Rate', subtext: 'Career advancement' }
  ];

  const learningPaths = [
    {
      title: 'VLSI Fundamentals',
      subtitle: 'Foundation Course',
      description: 'Master the core concepts of Very Large Scale Integration design',
      duration: '6-8 weeks',
      level: 'Beginner',
      modules: 12,
      practicals: 8,
      topics: ['Digital Logic', 'CMOS Transistors', 'Logic Gates', 'Sequential Circuits'],
      color: 'from-blue-500 to-indigo-600',
      icon: BookOpen,
      href: '/tutorials/vlsi/intro',
      completionRate: '94%',
      rating: 4.9
    },
    {
      title: 'RTL Design & Verification',
      subtitle: 'Intermediate Track',
      description: 'Advanced RTL coding, synthesis, and verification methodologies',
      duration: '10-12 weeks',
      level: 'Intermediate',
      modules: 16,
      practicals: 12,
      topics: ['SystemVerilog', 'UVM', 'Synthesis', 'Static Timing Analysis'],
      color: 'from-purple-500 to-violet-600',
      icon: Code,
      href: '/tutorials/vlsi/rtl-to-gdsii',
      completionRate: '89%',
      rating: 4.8
    },
    {
      title: 'Physical Design',
      subtitle: 'Advanced Specialization',
      description: 'Complete physical implementation from netlist to GDSII',
      duration: '12-16 weeks',
      level: 'Advanced',
      modules: 20,
      practicals: 15,
      topics: ['Floor Planning', 'Place & Route', 'Clock Tree Synthesis', 'Sign-off'],
      color: 'from-green-500 to-emerald-600',
      icon: Cpu,
      href: '/tutorials/vlsi/chip-edge',
      completionRate: '92%',
      rating: 4.9
    }
  ];

  const featuredContent = [
    {
      category: 'Tutorial',
      title: 'CMOS Logic Design Deep Dive',
      description: 'Comprehensive guide to CMOS logic families, power consumption, and optimization techniques',
      readTime: '12 min read',
      difficulty: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=compress&cs=tinysrgb&w=800',
      href: '/tutorials/vlsi/intro',
      tags: ['CMOS', 'Logic Design', 'Power'],
      author: 'Dr. Sarah Chen',
      publishedAt: '2 days ago'
    },
    {
      category: 'Case Study',
      title: 'Modern CPU Design Challenges',
      description: 'Analyzing the latest trends in processor architecture and manufacturing challenges',
      readTime: '8 min read',
      difficulty: 'Advanced',
      image: 'https://images.unsplash.com/photo-1555617868-b88c3cf8f275?auto=compress&cs=tinysrgb&w=800',
      href: '/tutorials/vlsi/rtl-to-gdsii',
      tags: ['CPU Design', 'Architecture', 'Manufacturing'],
      author: 'Prof. Michael Zhang',
      publishedAt: '1 week ago'
    },
    {
      category: 'Industry Insight',
      title: '7nm to 3nm: Process Evolution',
      description: 'Understanding the technical and economic implications of advanced process nodes',
      readTime: '15 min read',
      difficulty: 'Expert',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=compress&cs=tinysrgb&w=800',
      href: '/tutorials/vlsi/chip-edge',
      tags: ['Process Technology', 'Manufacturing', 'Economics'],
      author: 'Dr. Lisa Park',
      publishedAt: '3 days ago'
    }
  ];

  const practicalTools = [
    {
      title: 'Power Calculator',
      description: 'Calculate dynamic and static power consumption',
      icon: Zap,
      stats: '15K+ calculations',
      href: '/tools/power-calculator',
      preview: 'Try sample calculation'
    },
    {
      title: 'Timing Analyzer',
      description: 'Setup/hold time analysis and path delay calculations',
      icon: Clock,
      stats: '8.2K+ analyses',
      href: '/tools/timing-analyzer',
      preview: 'Analyze critical paths'
    },
    {
      title: 'Area Estimator',
      description: 'Gate count and silicon area estimation tools',
      icon: Calculator,
      stats: '12K+ estimates',
      href: '/tools/area-estimator',
      preview: 'Estimate your design'
    },
    {
      title: 'EDA Tool Guide',
      description: 'Comprehensive guide to industry tools',
      icon: Database,
      stats: '50+ tools covered',
      href: '/tools/eda-guide',
      preview: 'Explore tools'
    }
  ];

  const industrySpotlight = [
    {
      company: 'Apple',
      role: 'Silicon Design Engineer',
      description: 'Leading M-series chip development',
      logo: '🍎',
      openings: '12+ positions'
    },
    {
      company: 'NVIDIA',
      role: 'GPU Architect',
      description: 'Next-gen graphics processing',
      logo: '🟢',
      openings: '8+ positions'
    },
    {
      company: 'Intel',
      role: 'Process Engineer',
      description: 'Advanced manufacturing processes',
      logo: '🔷',
      openings: '15+ positions'
    },
    {
      company: 'AMD',
      role: 'Verification Engineer',
      description: 'CPU/GPU verification',
      logo: '🔴',
      openings: '6+ positions'
    }
  ];

  const quickStats = [
    { metric: 'Course Completion', value: '94%', trend: '+5%', color: 'text-green-600' },
    { metric: 'Job Placement', value: '87%', trend: '+12%', color: 'text-blue-600' },
    { metric: 'Salary Increase', value: '45%', trend: '+8%', color: 'text-purple-600' },
    { metric: 'Industry Partners', value: '150+', trend: '+25', color: 'text-orange-600' }
  ];

  const learningFormats = [
    {
      format: 'Interactive Labs',
      description: 'Hands-on experience with real EDA tools',
      icon: Activity,
      count: '200+'
    },
    {
      format: 'Video Lectures',
      description: 'Expert-led comprehensive tutorials',
      icon: Play,
      count: '500+'
    },
    {
      format: 'Case Studies',
      description: 'Real-world industry projects',
      icon: Briefcase,
      count: '150+'
    },
    {
      format: 'Assessments',
      description: 'Skills validation and certification',
      icon: GraduationCap,
      count: '300+'
    }
  ];

  return (
    <Layout
      title="VLSI Learn - Master Semiconductor Design"
      description="The most comprehensive VLSI learning platform with expert-curated content, practical tools, and industry connections."
    >
      {/* Hero Section - Apple-style minimal */}
      {/* Hero Section - DeepMind-inspired */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Neural Network Visualization */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Neural nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
              style={{
                left: `${15 + (i % 4) * 20}%`,
                top: `${20 + Math.floor(i / 4) * 25}%`,
                animation: `pulse 3s ease-in-out infinite ${i * 0.3}s`
              }}
            >
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          ))}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => (
              <line
                key={i}
                x1={`${15 + (i % 4) * 20}%`}
                y1={`${25 + Math.floor(i / 4) * 25}%`}
                x2={`${35 + (i % 3) * 20}%`}
                y2={`${45 + Math.floor(i / 3) * 15}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                className="animate-pulse"
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-400/30 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/5 w-24 h-24 border border-purple-400/30 rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">

            {/* Left Content */}
            <div className="space-y-8">
              {/* Research Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
                Advanced Semiconductor Research Platform
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light text-white leading-tight">
                  Advancing
                  <span className="block font-normal bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    VLSI Intelligence
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                  Pioneering the future of semiconductor design through cutting-edge research,
                  advanced methodologies, and intelligent design automation.
                </p>
              </div>

              {/* Research Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-light text-blue-400 mb-2">500+</div>
                  <div className="text-sm text-slate-300 font-medium">Research Papers</div>
                  <div className="text-xs text-slate-400 mt-1">Published methodologies</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-light text-purple-400 mb-2">25K+</div>
                  <div className="text-sm text-slate-300 font-medium">Researchers</div>
                  <div className="text-xs text-slate-400 mt-1">Global community</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-3xl font-light text-cyan-400 mb-2">98%</div>
                  <div className="text-sm text-slate-300 font-medium">Accuracy</div>
                  <div className="text-xs text-slate-400 mt-1">Design optimization</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">

              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Main Visualization Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

                {/* Circuit Visualization */}
                <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Animated Circuit Paths */}
                  <svg className="absolute inset-0 w-full h-full">
                    <defs>
                      <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Circuit traces */}
                    <path
                      d="M50 50 L150 50 L150 150 L250 150 L250 250 L350 250"
                      stroke="url(#circuitGradient)"
                      strokeWidth="3"
                      fill="none"
                      filter="url(#glow)"
                      className="animate-pulse"
                    />
                    <path
                      d="M100 100 L200 100 L200 200 L300 200"
                      stroke="url(#circuitGradient)"
                      strokeWidth="2"
                      fill="none"
                      filter="url(#glow)"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />

                    {/* Logic gates */}
                    <rect x="140" y="40" width="20" height="20" fill="#3b82f6" rx="4" className="animate-pulse" />
                    <rect x="240" y="140" width="20" height="20" fill="#8b5cf6" rx="4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <rect x="190" y="90" width="20" height="20" fill="#06b6d4" rx="4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                  </svg>

                  {/* Floating Data Points */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-8">
                      {[
                        { label: 'Power', value: '2.3W', color: 'text-blue-400' },
                        { label: 'Frequency', value: '3.2GHz', color: 'text-purple-400' },
                        { label: 'Area', value: '45mm²', color: 'text-cyan-400' },
                        { label: 'Delay', value: '120ps', color: 'text-green-400' },
                        { label: 'Efficiency', value: '94%', color: 'text-yellow-400' },
                        { label: 'Yield', value: '98.7%', color: 'text-pink-400' }
                      ].map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className={`text-lg font-light ${metric.color} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }}>
                            {metric.value}
                          </div>
                          <div className="text-xs text-slate-400 mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Research Insights Panel */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Brain className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium text-slate-300">AI Optimization</span>
                    </div>
                    <div className="text-xs text-slate-400">Neural network-driven design space exploration</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/20 rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-medium text-slate-300">Quantum Ready</span>
                    </div>
                    <div className="text-xs text-slate-400">Next-generation computing architectures</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style>{`
          @keyframes grid-move {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Learning Paths - Information Dense */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Structured Learning Paths</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert-designed curricula that take you from beginner to industry-ready professional.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <path.icon className="w-8 h-8 text-white" />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-blue-600 mb-1">{path.subtitle}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{path.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{path.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-medium text-gray-900">{path.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Modules</span>
                        <span className="font-medium text-gray-900">{path.modules}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Practicals</span>
                        <span className="font-medium text-gray-900">{path.practicals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Completion</span>
                        <span className="font-medium text-green-600">{path.completionRate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-900">Key Topics:</p>
                    <div className="flex flex-wrap gap-2">
                      {path.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(path.rating) ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">{path.rating}</span>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${path.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                      path.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                      {path.level}
                    </span>
                  </div>

                  <Link to={path.href} className="w-full bg-black text-white py-3 rounded-2xl font-medium text-center hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center">
                    Start Learning
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content - Magazine Style */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Featured Content</h2>
            <p className="text-xl text-gray-600">Latest insights and deep dives from industry experts.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredContent.map((content, index) => (
              <article key={index} className="group cursor-pointer">
                <Link to={content.href} className="block">
                  <div className="relative overflow-hidden rounded-2xl mb-6">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                        {content.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {content.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{content.description}</p>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-500">{content.readTime}</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${content.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          content.difficulty === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                          {content.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {content.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="text-sm font-medium text-gray-900">{content.author}</span>
                      <span className="text-xs text-gray-500">{content.publishedAt}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tools - Grid Layout */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Professional Tools</h2>
            <p className="text-xl text-gray-600">Industry-grade calculators and design aids used by professionals worldwide.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalTools.map((tool, index) => (
              <Link key={index} to={tool.href} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-200">
                    <tool.icon className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{tool.description}</p>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{tool.stats}</span>
                    <span className="text-blue-600 font-medium">{tool.preview}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">Multiple Learning Formats</h2>
            <p className="text-lg text-gray-600">Choose the format that works best for your learning style.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFormats.map((format, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <format.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{format.format}</h3>
                <p className="text-sm text-gray-600 mb-3">{format.description}</p>
                <div className="text-2xl font-bold text-blue-600">{format.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Spotlight - Compact Cards */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Industry Opportunities</h2>
            <p className="text-xl text-gray-300">Our learners are hired by the world's leading technology companies.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industrySpotlight.map((company, index) => (
              <div key={index} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-200">
                <div className="text-center space-y-4">
                  <div className="text-4xl">{company.logo}</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{company.company}</h3>
                    <p className="text-blue-400 text-sm font-medium mb-2">{company.role}</p>
                    <p className="text-gray-300 text-sm">{company.description}</p>
                  </div>
                  <div className="text-xs text-gray-400">{company.openings}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-20 grid md:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-300 mb-1">{stat.metric}</div>
                <div className="text-xs text-green-400">{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-6xl font-semibold">
              Ready to Start?
            </h2>
            <p className="text-xl lg:text-2xl text-gray-300 font-light">
              Join the next generation of VLSI designers. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/vlsi/intro" className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Begin Learning Journey
                <Rocket className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="border border-gray-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:border-white transition-colors duration-200">
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;