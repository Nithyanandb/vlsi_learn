import React from 'react';
import { Cpu, Code, GitBranch, Layers, Clock, Zap, CheckCircle, Package, Settings2 } from 'lucide-react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const RTLToGDSII: React.FC = () => {
  const flowSteps = [
    { icon: Code, title: "RTL Design", description: "Register Transfer Level coding in Verilog/VHDL", tools: ["Verilog", "SystemVerilog", "VHDL", "Chisel"], image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" },
    { icon: GitBranch, title: "Functional Verification", description: "Ensure design behaves as intended", tools: ["UVM", "SystemVerilog Assertions", "Cocotb", "Verilator"], image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" },
    { icon: Layers, title: "Synthesis", description: "Convert RTL to gate-level netlist", tools: ["Design Compiler", "Genus", "Yosys", "Fusion Compiler"], image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" },
    { icon: Clock, title: "Place & Route", description: "Physical implementation of the design", tools: ["Innovus", "ICC2", "Fusion Compiler", "OpenROAD"], image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" },
    { icon: Zap, title: "Timing Analysis", description: "Verify design meets timing constraints", tools: ["PrimeTime", "Tempus", "OpenSTA"], image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" },
    { icon: CheckCircle, title: "Physical Verification", description: "DRC, LVS, and ERC checks", tools: ["Calibre", "Pegasus", "IC Validator"], image: "https://images.unsplash.com/photo-1581093057305-25a0a6b4acd8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" },
    { icon: Package, title: "Tapeout", description: "Final GDSII generation for fabrication", tools: ["IC Compiler II", "Innovus", "Fusion Compiler"], image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&auto=format&fit=crop&w=800" }
  ];

  const popularTools = [
    { name: "Cadence", tools: ["Genus", "Innovus", "Tempus", "Joules", "Spectre"], logo: "" },
    { name: "Synopsys", tools: ["Design Compiler", "IC Compiler II", "PrimeTime", "Fusion Compiler", "HSPICE"], logo: "" },
    { name: "Siemens EDA", tools: ["Calibre", "Tanner", "Aprisa", "Solido"], logo: "" },
    { name: "Open Source", tools: ["Yosys", "OpenROAD", "Magic", "Netgen", "OpenSTA"], logo: "" }
  ];

  return (
    <Layout title="RTL to GDSII Flow - Complete VLSI Design Process" description="Learn the complete semiconductor design flow from RTL coding to final GDSII tapeout with industry-standard EDA tools.">
      {/* Hero Section */}
     

      {/* Flow Steps */}
      <section className="section-apple bg-white">
        <div className="container-tesla">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="apple-headline text-apple-gray-900 mb-4">The 7-Step VLSI Design Flow</h2>
            <p className="apple-subtitle text-apple-gray-600 max-w-3xl mx-auto">Each stage transforms your design closer to physical implementation</p>
          </div>
          <div className="space-y-12">
            {flowSteps.map((step, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`animate-fade-in-up ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-apple-gray-900 rounded-xl flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-apple-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-apple-gray-600 mb-6">{step.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-apple-gray-600 uppercase tracking-wider mb-2">Common Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-apple-gray-100 text-apple-gray-800 rounded-full text-sm">{tool}</span>
                      ))}
                    </div>
                  </div>
                  {index === 0 && (
                    <Link to="/tutorials/vlsi/intro" className="btn-apple-primary inline-flex">Start Learning RTL</Link>
                  )}
                </div>
                <div className={`animate-fade-in-up ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="card overflow-hidden">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDA Tools Section */}
      <section className="section-apple bg-apple-gray-50">
        <div className="container-tesla">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="apple-headline text-apple-gray-900 mb-4">Industry-Standard EDA Tools</h2>
            <p className="apple-subtitle text-apple-gray-600 max-w-3xl mx-auto">The software that powers modern chip design</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {popularTools.map((vendor, index) => (
              <div key={index} className="card p-8">
                <h3 className="text-xl font-semibold text-center mb-4 text-apple-gray-900">{vendor.name}</h3>
                <ul className="space-y-2 mx-8">
                  {vendor.tools.map((tool, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-apple-gray-900 mr-2" />
                      <span className="text-apple-gray-600">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-apple-gray-900 text-white">
        <div className="container-tesla text-center">
          <div className="animate-fade-in-up">
            <h2 className="apple-headline mb-6">Master the Complete VLSI Flow</h2>
            <p className="apple-subtitle text-apple-gray-300 mb-8 max-w-2xl mx-auto">From RTL coding to final tapeout, learn every aspect of modern chip design with our comprehensive courses.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/vlsi/intro" className="btn-apple-ghost bg-white text-apple-gray-900 hover:bg-apple-gray-100">Start Learning Now</Link>
              <Link to="/tools/calculator" className="btn-apple text-white hover:bg-white hover:text-apple-gray-900">Explore VLSI Tools</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RTLToGDSII;