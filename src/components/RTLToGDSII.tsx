import React from 'react';
import { Cpu, Code, GitBranch, Layers, Clock, Zap, CheckCircle, Package, Settings2 } from 'lucide-react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

const RTLToGDSII: React.FC = () => {
  const flowSteps = [
    {
      icon: Code,
      title: "RTL Design",
      description: "Register Transfer Level coding in Verilog/VHDL",
      tools: ["Verilog", "SystemVerilog", "VHDL", "Chisel"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    },
    {
      icon: GitBranch,
      title: "Functional Verification",
      description: "Ensure design behaves as intended",
      tools: ["UVM", "SystemVerilog Assertions", "Cocotb", "Verilator"],
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    },
    {
      icon: Layers,
      title: "Synthesis",
      description: "Convert RTL to gate-level netlist",
      tools: ["Design Compiler", "Genus", "Yosys", "Fusion Compiler"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    },
    {
      icon: Clock,
      title: "Place & Route",
      description: "Physical implementation of the design",
      tools: ["Innovus", "ICC2", "Fusion Compiler", "OpenROAD"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    },
    {
      icon: Zap,
      title: "Timing Analysis",
      description: "Verify design meets timing constraints",
      tools: ["PrimeTime", "Tempus", "OpenSTA"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    },
    {
      icon: CheckCircle,
      title: "Physical Verification",
      description: "DRC, LVS, and ERC checks",
      tools: ["Calibre", "Pegasus", "IC Validator"],
      image: "https://images.unsplash.com/photo-1581093057305-25a0a6b4acd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    },
    {
      icon: Package,
      title: "Tapeout",
      description: "Final GDSII generation for fabrication",
      tools: ["IC Compiler II", "Innovus", "Fusion Compiler"],
      image: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
    }
  ];

  const popularTools = [
    {
      name: "Cadence",
      tools: ["Genus", "Innovus", "Tempus", "Joules", "Spectre"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Cadence_Design_Systems_logo.svg/1200px-Cadence_Design_Systems_logo.svg.png"
    },
    {
      name: "Synopsys",
      tools: ["Design Compiler", "IC Compiler II", "PrimeTime", "Fusion Compiler", "HSPICE"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Synopsys_Logo.svg/1200px-Synopsys_Logo.svg.png"
    },
    {
      name: "Siemens EDA",
      tools: ["Calibre", "Tanner", "Aprisa", "Solido"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Siemens_AG_logo.svg/1200px-Siemens_AG_logo.svg.png"
    },
    {
      name: "Open Source",
      tools: ["Yosys", "OpenROAD", "Magic", "Netgen", "OpenSTA"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Open_Source_Initiative_keyhole.svg/1200px-Open_Source_Initiative_keyhole.svg.png"
    }
  ];

  return (
    <Layout
      title="RTL to GDSII Flow - Complete VLSI Design Process"
      description="Learn the complete semiconductor design flow from RTL coding to final GDSII tapeout with industry-standard EDA tools."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              RTL to <span className="gradient-text">GDSII</span> Flow
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The complete semiconductor design process from Register Transfer Level coding to final tapeout.
            </p>
          </div>
        </div>
      </section>

      {/* Flow Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">The 7-Step VLSI Design Flow</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each stage transforms your design closer to physical implementation
            </p>
          </div>

          <div className="space-y-12">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                <div className={`animate-fade-in-up ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Common Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  {index === 0 && (
                    <Link to="/tutorials/vlsi/intro" className="btn-primary inline-flex">
                      Start Learning RTL
                    </Link>
                  )}
                </div>
                <div className={`animate-fade-in-up ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="card overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDA Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Industry-Standard EDA Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The software that powers modern chip design
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {popularTools.map((vendor, index) => (
              <div
                key={index}
                className="card p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                 
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{vendor.name}</h3>
                <ul className="space-y-2 mx-8">
                  {vendor.tools.map((tool, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-gray-600">{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chip Edge Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6">Chip Edge Techniques</h2>
              <p className="text-lg text-gray-600 mb-6">
                Modern semiconductor design incorporates advanced techniques at the chip edges to improve yield, 
                reliability, and performance. These include:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Seal Rings:</strong> Protect against mechanical stress and contamination
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Edge Termination:</strong> Special structures to manage electric fields
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Scribe Lines:</strong> Allow for precise dicing of wafers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    <strong>Test Structures:</strong> Process monitoring and yield analysis
                  </span>
                </li>
              </ul>
              <a href="/tutorials/vlsi/chip-edge" className="btn-primary">
                Learn Chip Edge Design
              </a>
            </div>
            <div className="relative animate-fade-in-up">
              <div className="card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800"
                  alt="Chip Edge Techniques"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-6">Master the Complete VLSI Flow</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              From RTL coding to final tapeout, learn every aspect of modern chip design with our comprehensive courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/tutorials/vlsi/intro" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                Start Learning Now
              </Link>
              <Link to="/tools/calculator" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                Explore VLSI Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RTLToGDSII;