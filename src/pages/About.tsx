import React from 'react';
import { Users, Award, BookOpen, Target, Heart, Lightbulb } from 'lucide-react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'We believe that learning should be engaging, accessible, and rewarding for everyone.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in our content, tools, and user experience.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community where learners can grow together and share knowledge.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly improving our platform with cutting-edge technology and teaching methods.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Lead VLSI Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: '15+ years in semiconductor design at leading tech companies.'
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'Digital Design Expert',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professor of Electrical Engineering with 20+ research publications.'
    },
    {
      name: 'Dr. Lisa Wang',
      role: 'Analog Circuit Specialist',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expert in analog and mixed-signal VLSI design methodologies.'
    }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Students Taught' },
    { icon: BookOpen, number: '50+', label: 'Courses Created' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: Target, number: '5', label: 'Years of Excellence' }
  ];

  return (
    <Layout
      title="About VLSI Learn - Our Mission & Team"
      description="Learn about our mission to make VLSI education accessible and our expert team of semiconductor professionals."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              About <span className="gradient-text">VLSI Learn</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're passionate about making VLSI education accessible, engaging, and practical. 
              Our mission is to empower the next generation of semiconductor designers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                At VLSI Learn, we believe that everyone should have access to high-quality semiconductor 
                education. Our platform bridges the gap between theoretical knowledge and practical skills, 
                preparing students for successful careers in the rapidly evolving tech industry.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine cutting-edge technology with proven educational methods to create an 
                immersive learning experience that adapts to your pace and learning style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/tutorials/vlsi/intro" className="btn-primary">
                  Start Learning Today
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl animate-float">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-md">
                    <BookOpen className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Interactive Learning</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-md">
                    <Award className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Certification</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-md">
                    <Users className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Expert Support</div>
                  </div>
                  <div className="bg-white/20 rounded-xl p-4 backdrop-blur-md">
                    <Target className="w-8 h-8 text-white mb-2" />
                    <div className="text-white font-semibold">Career Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape our approach to education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence in VLSI education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team consists of industry veterans and academic experts with decades of 
              combined experience in VLSI design and education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Join Our Learning Community</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to start your journey in VLSI design? Join thousands of students 
              who are already building their future in semiconductor technology.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/tutorials/vlsi/intro" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                  Start Learning Free
                </Link>
                <Link to="/contact" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                  Contact Our Team
                </Link>
              </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;