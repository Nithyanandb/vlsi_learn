import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, BookOpen, Calculator, Users, Award, ChevronRight,
  Cpu, Zap, Target, Play, Clock, Star, TrendingUp, Code,
  Database, Rocket, Globe, Lightbulb, CheckCircle, Brain,
  Shield, Smartphone, Layers, Activity, Briefcase, GraduationCap,
  ArrowUpRight
} from 'lucide-react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const heroStats = [
    { number: '25K+', label: 'Active Learners', subtext: 'Growing community' },
    { number: '500+', label: 'Expert Tutorials', subtext: 'Updated weekly' },
    { number: '50+', label: 'Design Tools', subtext: 'Professional grade' },
    { number: '98%', label: 'Success Rate', subtext: 'Career advancement' }
  ];
  const researchTools = [
    {
      title: 'Neural Power Predictor',
      description: 'AI-powered dynamic and static power consumption modeling',
      icon: Brain,
      stats: '15K+ predictions',
      href: '/tools/neural-power',
      preview: 'Run AI analysis'
    },
    {
      title: 'Quantum Timing Analyzer',
      description: 'Advanced setup/hold analysis with quantum-aware methodologies',
      icon: Zap,
      stats: '8.2K+ analyses',
      href: '/tools/quantum-timing',
      preview: 'Analyze quantum effects'
    },
    {
      title: 'ML Area Optimizer',
      description: 'Machine learning-driven gate count and area optimization',
      icon: Target,
      stats: '12K+ optimizations',
      href: '/tools/ml-optimizer',
      preview: 'Optimize with AI'
    },
    {
      title: 'Research Database',
      description: 'Comprehensive semiconductor research and methodology library',
      icon: Database,
      stats: '2.5K+ papers indexed',
      href: '/research/database',
      preview: 'Explore research'
    }
  ];

  const researchPartners = [
    {
      organization: 'Google DeepMind',
      focus: 'AI-Driven Circuit Design',
      description: 'Advancing neural architecture search for semiconductor design',
      logo: '🧠',
      collaboration: 'Active research'
    },
    {
      organization: 'MIT CSAIL',
      focus: 'Quantum Computing Integration',
      description: 'Next-generation quantum-classical hybrid architectures',
      logo: '🔬',
      collaboration: '12 joint papers'
    },
    {
      organization: 'Stanford HAI',
      focus: 'Human-AI Collaboration',
      description: 'Intelligent design assistance and automation',
      logo: '⚡',
      collaboration: 'Ongoing studies'
    },
    {
      organization: 'NVIDIA Research',
      focus: 'GPU Architecture Innovation',
      description: 'Advanced parallel processing architectures',
      logo: '🚀',
      collaboration: '8 publications'
    }
  ];

  const researchMetrics = [
    { metric: 'Research Impact', value: '8.7', trend: '+12%', color: 'text-blue-600', unit: 'h-index' },
    { metric: 'Methodology Accuracy', value: '97.3%', trend: '+5%', color: 'text-green-600', unit: '' },
    { metric: 'Industry Adoption', value: '156', trend: '+34', color: 'text-purple-600', unit: 'companies' },
    { metric: 'Research Citations', value: '2.4K', trend: '+18%', color: 'text-cyan-600', unit: 'citations' }
  ];

  const researchFormats = [
    {
      format: 'Interactive Labs',
      description: 'Hands-on research with cutting-edge methodologies',
      icon: Activity,
      count: '200+'
    },
    {
      format: 'Research Papers',
      description: 'Peer-reviewed publications and methodology papers',
      icon: BookOpen,
      count: '500+'
    },
    {
      format: 'Case Studies',
      description: 'Real-world research applications and results',
      icon: Briefcase,
      count: '150+'
    },
    {
      format: 'Methodology Guides',
      description: 'Step-by-step research methodologies and protocols',
      icon: GraduationCap,
      count: '300+'
    }
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
      <section className="relative min-h-screen bg-gradient-to-br from-slate-1000 via-blue-1000 to-indigo-900 overflow-hidden flex items-center">
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
                    Semiconductor
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
              <div className="relative ">

                {/* Circuit Visualization */}
                <div className="relative h-96 overflow-hidden rounded-2xl">
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
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
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


      {/* Practical Tools - Grid Layout */}
      {/* <section className="bg-gray-50 py-20">
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
      </section> */}
      {/* Research Metrics Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '2.4K', label: 'Citations', sublabel: 'Research impact' },
              { value: '156', label: 'Companies', sublabel: 'Industry partners' },
              { value: '97.3%', label: 'Accuracy', sublabel: 'Methodology precision' },
              { value: '25K+', label: 'Researchers', sublabel: 'Global network' }
            ].map((metric, i) => (
              <div key={i} className="space-y-2">
                <div className="text-3xl font-light text-gray-900">{metric.value}</div>
                <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                <div className="text-xs text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-full font-light text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group">
              Explore Research
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-300 text-gray-900 px-8 py-4 rounded-full font-light text-lg hover:border-gray-400 transition-colors">
              View Publications
            </button>
          </div>
        </div>
      </section>


      {/* Right Visualization */}
      <div className="">
        {/* Main Research Visualization */}
        <div className=" bg-gradient-to-br from-white to-gray-50  shadow-xl">

          {/* Neural Network Visualization */}
          <div className="relative h-96 overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900">
            {/* Animated Research Data Flow */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                </linearGradient>
                <filter id="research-glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Research pathways */}
              <path
                d="M60 60 Q180 100 300 60 T540 100"
                stroke="url(#dataFlow)"
                strokeWidth="2"
                fill="none"
                filter="url(#research-glow)"
                className="animate-pulse"
              />
              <path
                d="M80 120 Q200 160 320 120 T520 160"
                stroke="url(#dataFlow)"
                strokeWidth="2"
                fill="none"
                filter="url(#research-glow)"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />

              {/* Research nodes */}
              <circle cx="100" cy="80" r="6" fill="#3b82f6" className="animate-pulse" />
              <circle cx="280" cy="140" r="6" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="450" cy="100" r="6" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </svg>

            {/* Research Metrics Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 text-center">
                {[
                  { label: 'Neural Accuracy', value: '97.3%', color: 'text-blue-400' },
                  { label: 'Optimization Rate', value: '156x', color: 'text-purple-400' },
                  { label: 'Power Efficiency', value: '+45%', color: 'text-cyan-400' },
                  { label: 'Design Speed', value: '12.3x', color: 'text-green-400' }
                ].map((metric, i) => (
                  <div key={i} className="space-y-2">
                    <div className={`text-2xl font-light ${metric.color} animate-pulse`} style={{ animationDelay: `${i * 0.3}s` }}>
                      {metric.value}
                    </div>
                    <div className="text-xs text-gray-300">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        </div>

        {/* Floating Research Indicators */}

      </div>





      {/* Featured Research - Publication Style */}
      < section className="bg-gray-50 py-32" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-gray-900 mb-6">Latest Research</h2>
            <p className="text-xl text-gray-600 font-light">Breakthrough discoveries and methodological advances in semiconductor design.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {featuredContent.map((content, index) => (
              <article key={index} className="group cursor-pointer">
                <Link to={content.href} className="block">
                  <div className="space-y-6">
                    {/* Research Image */}
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={content.image}
                        alt={content.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-light text-gray-900">
                          {content.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Research Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-light text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                          {content.title}
                        </h3>
                        <p className="text-gray-600 font-light leading-relaxed">{content.description}</p>
                      </div>

                      {/* Research Metadata */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-4">
                          <span className="text-gray-500 font-light">{content.readTime}</span>
                          <span className="px-2 py-1 rounded-full text-xs font-light bg-red-50 text-red-700 border border-red-200">
                            {content.difficulty}
                          </span>
                        </div>
                      </div>

                      {/* Research Tags */}
                      <div className="flex flex-wrap gap-2">
                        {content.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-3 py-1 bg-white text-gray-600 rounded-full text-xs font-light border border-gray-200">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Author and Publication Info */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm font-medium text-gray-900">{content.author}</span>
                        <span className="text-xs text-gray-500 font-light">{content.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section >

      {/* Research Tools - Grid Layout */}
      < section className="bg-white py-32" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-gray-900 mb-6">Research Tools</h2>
            <p className="text-xl text-gray-600 font-light">Advanced computational tools for semiconductor research and development.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchTools.map((tool, index) => (
              <Link key={index} to={tool.href} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 hover:shadow-lg transition-all duration-500 group">
                <div className="space-y-6">
                  {/* Tool Icon and Action */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300">
                      <tool.icon className="w-7 h-7 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>

                  {/* Tool Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-gray-900 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">{tool.description}</p>

                    {/* Tool Stats and Preview */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500 font-light">{tool.stats}</span>
                      <span className="text-blue-600 font-medium">{tool.preview}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section >

      {/* Research Formats */}
      < section className="bg-gray-50 py-24" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extralight text-gray-900 mb-4">Research Formats</h2>
            <p className="text-lg text-gray-600 font-light">Multiple approaches to research and knowledge dissemination.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchFormats.map((format, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center mx-auto">
                  <format.icon className="w-8 h-8 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">{format.format}</h3>
                  <p className="text-sm text-gray-600 font-light mb-4">{format.description}</p>
                  <div className="text-2xl font-light text-blue-600">{format.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Research Partners - Clean Cards */}
      < section className="bg-white py-32" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-extralight text-gray-900 mb-6">Research Collaborations</h2>
            <p className="text-xl text-gray-600 font-light">Partnering with leading institutions to advance semiconductor research.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchPartners.map((partner, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 hover:border-gray-200 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="text-4xl">{partner.logo}</div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-light text-gray-900">{partner.organization}</h3>
                    <p className="text-blue-600 text-sm font-medium">{partner.focus}</p>
                    <p className="text-gray-600 text-sm font-light">{partner.description}</p>
                  </div>
                  <div className="text-xs text-gray-500 font-light">{partner.collaboration}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Research Impact Metrics */}
          <div className="mt-24 grid md:grid-cols-4 gap-8">
            {researchMetrics.map((metric, index) => (
              <div key={index} className="text-center space-y-2">
                <div className={`text-4xl font-extralight ${metric.color}`}>
                  {metric.value}
                  <span className="text-lg font-light text-gray-500 ml-1">{metric.unit}</span>
                </div>
                <div className="text-sm text-gray-600 font-light">{metric.metric}</div>
                <div className="text-xs text-green-600 font-medium">{metric.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Final CTA - DeepMind Style */}
      < section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-32" >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12">
            {/* Research Network Visualization */}
            <div className="relative">
              <svg className="w-full h-32 opacity-30" viewBox="0 0 600 120">
                <defs>
                  <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path d="M0 60 Q150 20 300 60 T600 60" stroke="url(#networkGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
                <circle cx="100" cy="45" r="3" fill="#3b82f6" className="animate-pulse" />
                <circle cx="300" cy="60" r="3" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <circle cx="500" cy="75" r="3" fill="#06b6d4" className="animate-pulse" style={{ animationDelay: '1s' }} />
              </svg>
            </div>

            <h2 className="text-6xl lg:text-7xl font-extralight leading-tight">
              Join the Research
            </h2>
            <p className="text-2xl lg:text-3xl text-blue-200 font-extralight leading-relaxed max-w-3xl mx-auto">
              Contribute to the future of semiconductor intelligence.
              Your research journey begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/tutorials/vlsi/intro" className="bg-white text-gray-900 px-10 py-5 rounded-full font-light text-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group">
                Start Research Journey
                <Rocket className="ml-3 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </Link>
              <Link to="/contact" className="border border-blue-400 text-blue-300 px-10 py-5 rounded-full font-light text-lg hover:border-blue-300 hover:text-blue-200 transition-colors duration-300">
                Explore Publications
              </Link>
            </div>
          </div>
        </div>
      </section >
    </Layout >
  );
};

export default Home;