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
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">All Tutorials</h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">Learn step-by-step with practical examples and projects.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {tutorials.map((t) => (
              <Link key={t.href} to={t.href} className="card p-6 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{t.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{t.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
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


