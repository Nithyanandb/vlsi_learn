import React from 'react';
import { Cpu, Code, GitBranch, Layers, Clock, CheckCircle, Settings2 } from 'lucide-react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const EDAToolsGuide: React.FC = () => {
  const toolCategories = [
    {
      name: "RTL Design & Simulation",
      tools: [
        { name: "VCS", vendor: "Synopsys", purpose: "RTL Simulation" },
        { name: "Xcelium", vendor: "Cadence", purpose: "Mixed-Signal Simulation" },
        { name: "ModelSim", vendor: "Siemens", purpose: "HDL Simulation" },
        { name: "Verilator", vendor: "Open Source", purpose: "Fast RTL Simulation" }
      ],
      icon: Code
    },
    {
      name: "Synthesis",
      tools: [
        { name: "Design Compiler", vendor: "Synopsys", purpose: "Logic Synthesis" },
        { name: "Genus", vendor: "Cadence", purpose: "RTL-to-GDSII Synthesis" },
        { name: "Yosys", vendor: "Open Source", purpose: "Verilog Synthesis" }
      ],
      icon: Layers
    },
    {
      name: "Place & Route",
      tools: [
        { name: "ICC2", vendor: "Synopsys", purpose: "Physical Implementation" },
        { name: "Innovus", vendor: "Cadence", purpose: "Digital Implementation" },
        { name: "OpenROAD", vendor: "Open Source", purpose: "End-to-End Flow" }
      ],
      icon: GitBranch
    },
    {
      name: "Timing Analysis",
      tools: [
        { name: "PrimeTime", vendor: "Synopsys", purpose: "Sign-off Timing" },
        { name: "Tempus", vendor: "Cadence", purpose: "Timing Sign-off" },
        { name: "OpenSTA", vendor: "Open Source", purpose: "Static Timing" }
      ],
      icon: Clock
    },
    {
      name: "Physical Verification",
      tools: [
        { name: "Calibre", vendor: "Siemens", purpose: "DRC/LVS" },
        { name: "Pegasus", vendor: "Synopsys", purpose: "Physical Verification" },
        { name: "IC Validator", vendor: "Cadence", purpose: "Physical Sign-off" }
      ],
      icon: CheckCircle
    },
    {
      name: "Analog/Mixed-Signal",
      tools: [
        { name: "Virtuoso", vendor: "Cadence", purpose: "Custom IC Design" },
        { name: "HSPICE", vendor: "Synopsys", purpose: "Circuit Simulation" },
        { name: "Spectre", vendor: "Cadence", purpose: "Analog Simulation" }
      ],
      icon: Settings2
    }
  ];

  return (
    <Layout
      title="EDA Tools Guide - Complete Semiconductor Design Software"
      description="Comprehensive guide to Electronic Design Automation (EDA) tools used in the semiconductor industry for chip design and verification."
    >
      {/* Hero Section */}
      <section className="relative bg-apple-gray-50 py-20 lg:py-32 overflow-hidden">
        <div className="container-tesla relative">
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-apple-gray-900 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="apple-display mb-6">EDA Tools <span className="gradient-text">Guide</span></h1>
            <p className="apple-subtitle text-apple-gray-600 max-w-3xl mx-auto">
              The complete reference for Electronic Design Automation software used in semiconductor design.
            </p>
          </div>
        </div>
      </section>

      {/* Tool Categories */}
      <section className="section-apple bg-white">
        <div className="container-tesla">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="apple-headline text-apple-gray-900 mb-4">EDA Tool Categories</h2>
            <p className="apple-subtitle text-apple-gray-600 max-w-3xl mx-auto">
              Modern chip design requires specialized tools for each stage of development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toolCategories.map((category, index) => (
              <div key={index} className="card p-6 animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-apple-gray-900 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-apple-gray-900">{category.name}</h3>
                </div>
                <div className="space-y-4">
                  {category.tools.map((tool, i) => (
                    <div key={i} className="border-l-2 border-apple-gray-200 pl-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-apple-gray-900">{tool.name}</h4>
                          <p className="text-sm text-apple-gray-600">{tool.purpose}</p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-apple-gray-100 text-apple-gray-800 rounded-full">
                          {tool.vendor}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section-apple bg-apple-gray-50">
        <div className="container-tesla">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="apple-headline text-apple-gray-900 mb-4">EDA Learning Path</h2>
            <p className="apple-subtitle text-apple-gray-600 max-w-3xl mx-auto">
              Structured approach to mastering semiconductor design tools
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-apple-gray-200"></div>
            {[
              { title: "Beginner", description: "Learn the fundamentals of RTL design and simulation", tools: ["ModelSim", "Verilator", "Yosys"], icon: Code },
              { title: "Intermediate", description: "Master synthesis and basic place & route", tools: ["Design Compiler", "Genus", "OpenROAD"], icon: Layers },
              { title: "Advanced", description: "Complete RTL-to-GDSII flow and sign-off", tools: ["Innovus", "PrimeTime", "Calibre"], icon: GitBranch },
              { title: "Expert", description: "Specialize in analog/mixed-signal or advanced nodes", tools: ["Virtuoso", "HSPICE", "IC Validator"], icon: Settings2 }
            ].map((step, index) => (
              <div key={index} className={`relative mb-12 lg:w-1/2 ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                <div className="card p-6 animate-fade-in-up">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-apple-gray-900 rounded-lg flex items-center justify-center mr-4">
                      {React.createElement(step.icon, { className: 'w-5 h-5 text-white' })}
                    </div>
                    <h3 className="text-xl font-semibold text-apple-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-apple-gray-600 mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {step.tools.map((tool: string, i: number) => (
                      <span key={i} className="px-3 py-1 bg-apple-gray-100 text-apple-gray-800 rounded-full text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-apple-gray-900 text-white">
        <div className="container-tesla text-center">
          <div className="animate-fade-in-up">
            <h2 className="apple-headline mb-6">Ready to Master EDA Tools?</h2>
            <p className="apple-subtitle text-apple-gray-300 mb-8 max-w-2xl mx-auto">
              Start your journey to becoming a semiconductor design expert with our comprehensive tutorials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/vlsi/intro" className="btn-apple-ghost bg-white text-apple-gray-900 hover:bg-apple-gray-100">
                Begin Learning
              </Link>
              <Link to="/contact" className="btn-apple text-white hover:bg-white hover:text-apple-gray-900">
                Get Expert Advice
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EDAToolsGuide;