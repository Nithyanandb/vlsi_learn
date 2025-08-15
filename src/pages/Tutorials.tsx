import React from 'react';
import Layout from '../components/Layout';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Tutorials: React.FC = () => {
  const tutorials = [
    { title: 'VLSI Introduction', href: '/tutorials/vlsi/intro', description: 'Foundational concepts of VLSI and design flows.' },
    { title: 'Digital Logic', href: '/tutorials/vlsi/digital-logic', description: 'Boolean algebra, combinational and sequential logic.' },
    { title: 'RTL to GDSII Flow', href: '/tutorials/vlsi/rtl-to-gdsii', description: 'Complete design flow from RTL to tapeout.' },
    { title: 'Chip Edge Techniques', href: '/tutorials/vlsi/chip-edge', description: 'Seal rings, scribe lines, and edge terminations.' },
  ];

  return (
    <Layout title="Tutorials - VLSI Learn" description="Explore curated tutorials across the VLSI design flow.">
      <section className="relative bg-apple-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-apple-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="apple-headline text-apple-gray-900 mb-4">All Tutorials</h1>
            <p className="apple-subtitle text-apple-gray-600">Learn step-by-step with practical examples and projects.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map((t) => (
              <Link key={t.href} to={t.href} className="card p-6 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-apple-gray-900 group-hover:text-apple-gray-900 transition-colors">{t.title}</h3>
                    <p className="text-apple-gray-600">{t.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-apple-gray-500 group-hover:text-apple-gray-900 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tutorials;


