import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, Users, Award, ChevronRight, Cpu, Zap, Target } from 'lucide-react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Tutorials',
      description: 'Learn VLSI design concepts through hands-on, interactive tutorials that adapt to your pace.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calculator,
      title: 'Design Tools',
      description: 'Access powerful calculators and tools for VLSI design calculations and simulations.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a vibrant community of learners and professionals in the semiconductor industry.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Earn certificates and track your progress as you master VLSI design principles.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Learners' },
    { number: '50+', label: 'Tutorials' },
    { number: '15+', label: 'Design Tools' },
    { number: '98%', label: 'Success Rate' }
  ];

  const tutorials = [
    {
      title: 'VLSI Introduction',
      description: 'Get started with the fundamentals of Very Large Scale Integration design.',
      duration: '45 min',
      level: 'Beginner',
      href: '/tutorials/vlsi/intro',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Digital Logic Design',
      description: 'Master the principles of digital logic circuits and Boolean algebra.',
      duration: '60 min',
      level: 'Intermediate',
      href: '/tutorials/vlsi/digital-logic',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <Layout
      title="VLSI Learn - Master Semiconductor Design"
      description="Learn VLSI design and digital electronics through interactive tutorials, design tools, and expert guidance."
    >
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="">
              <h1 className="apple-headline mb-6 text-gray-900">
                Learn VLSI.
                <span className="block">Design the future.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                A minimal, focused learning hub for semiconductor design. Tutorials, tools, and projects with no fluff.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tutorials/vlsi/intro" className="btn-apple-primary group">
                  Start Learning
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/tools/calculator" className="btn-apple">
                  Explore Tools
                </Link>
              </div>
            </div>

            <div className="relative ">
              <div className="card-apple overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
                  alt="Silicon wafer"
                  className="w-full h-full object-cover saturate-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center " style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 ">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Built for focus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The essentials for mastering chip design—clean, consistent, and practical.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-apple p-6 "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12 ">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                Featured Tutorials
              </h2>
              <p className="text-lg text-gray-600">
                Start with these popular courses designed for success.
              </p>
            </div>
            <Link to="/tutorials" className="hidden md:flex items-center text-gray-900 hover:text-gray-700 font-medium group">
              View All Tutorials
              <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tutorials.map((tutorial, index) => (
              <div
                key={index}
                className="card-apple overflow-hidden "
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={tutorial.image}
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 saturate-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-sm font-medium text-gray-700 rounded-full">
                      {tutorial.level}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {tutorial.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {tutorial.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 font-medium">
                      {tutorial.duration}
                    </span>
                    <Link
                      to={tutorial.href}
                      className="text-gray-900 hover:text-gray-700 font-medium flex items-center group"
                    >
                      Start Tutorial
                      <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/tutorials" className="btn-apple-primary">
              View All Tutorials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your VLSI Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and professionals building career-defining skills in chip design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/vlsi/intro" className="btn-apple bg-white text-gray-900 hover:bg-gray-100">
                Get Started Free
              </Link>
              <Link to="/contact" className="btn-apple-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;