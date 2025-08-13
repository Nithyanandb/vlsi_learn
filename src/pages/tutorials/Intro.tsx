import React from 'react';
import Layout from '../../components/Layout';

const Intro: React.FC = () => {
  return (
    <Layout title="VLSI Introduction" description="Fundamentals of VLSI design and flow.">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">VLSI Introduction</h1>
          <p className="text-lg text-gray-600 mb-8">
            Very Large Scale Integration (VLSI) is the process of designing and fabricating integrated circuits (ICs)
            that contain billions of transistors on a single chip. This lesson gives you a strong mental model of the
            end-to-end process, the major abstractions, and the tools used in industry.
          </p>

          {/* Why VLSI matters */}
          <div className="card p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Why VLSI Matters</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Performance:</strong> Hardware acceleration for AI/ML, graphics, networking, and storage.</li>
              <li><strong>Power Efficiency:</strong> Specialized silicon achieves orders-of-magnitude better perf/W.</li>
              <li><strong>Scale:</strong> Modern SoCs integrate CPU, GPU, ISP, NPU, DSP, memory interfaces, and I/O.</li>
              <li><strong>Economics:</strong> Competitive advantage from custom silicon and vertical optimization.</li>
            </ul>
          </div>

          {/* Design Abstractions */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Design Abstractions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">System Level</h3>
                <p className="text-gray-600">Architecture, microarchitecture, partitioning into blocks and IPs.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">RTL Level</h3>
                <p className="text-gray-600">Behavior described in Verilog/VHDL/SystemVerilog. Clocked logic and datapaths.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Gate Level</h3>
                <p className="text-gray-600">Netlists of standard cells, timing arcs, and constraints.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Physical Level</h3>
                <p className="text-gray-600">Placement, routing, clock tree, power grid, and sign-off.</p>
              </div>
            </div>
          </div>

          {/* End-to-End Flow */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">End-to-End VLSI Flow</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Specification & Architecture:</strong> Features, performance, power, area, cost (PPAC) targets.</li>
              <li><strong>RTL Design:</strong> Write synthesizable RTL and assertions; plan clock/reset, CDC, low-power.</li>
              <li><strong>Verification:</strong> Testbenches, UVM, coverage closure, formal checks, lint, CDC/RDC.</li>
              <li><strong>Synthesis:</strong> RTL → gate-level netlist under SDC constraints; QoR iteration.</li>
              <li><strong>Physical Implementation:</strong> Floorplan, place, CTS, route, optimization, ECOs.</li>
              <li><strong>Sign-off:</strong> STA, IR/EM, DRC/LVS, antenna, DFM, power intent checks (UPF/CPF).</li>
              <li><strong>Tapeout:</strong> Final GDSII/OASIS, masks, and release to foundry.</li>
            </ol>
          </div>

          {/* Example RTL snippet */}
          <div className="card p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-3">RTL Example (SystemVerilog)</h2>
            <p className="text-gray-600 mb-3">A simple edge-triggered D flip-flop with synchronous reset:</p>
            <pre className="bg-gray-900 text-gray-100 text-sm p-4 rounded-lg overflow-x-auto"><code>{`
module dff (
  input  logic clk,
  input  logic rst_n,
  input  logic d,
  output logic q
);
  always_ff @(posedge clk) begin
    if (!rst_n) q <= 1'b0;
    else        q <= d;
  end
endmodule
`}</code></pre>
          </div>

          {/* Prerequisites & Learning Outcomes */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">Prerequisites</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Basic digital logic (gates, truth tables, flip-flops)</li>
                <li>Programming fundamentals (C/C++/Python preferred)</li>
                <li>Comfort with command-line and version control (Git)</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-3">Learning Outcomes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Explain the VLSI design flow from spec to tapeout</li>
                <li>Identify the role of RTL, synthesis, PnR, and sign-off</li>
                <li>Recognize key EDA tools and data formats</li>
              </ul>
            </div>
          </div>

          {/* Quick Glossary */}
          <div className="card p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-3">Quick Glossary</h2>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>RTL:</strong> Register Transfer Level description of synchronous logic.</p>
                <p><strong>SDC:</strong> Synopsys Design Constraints (timing, clocks, IO).</p>
                <p><strong>UPF/CPF:</strong> Power intent for multi-voltage and power-gated designs.</p>
              </div>
              <div>
                <p><strong>STA:</strong> Static Timing Analysis across corners and modes.</p>
                <p><strong>DRC/LVS:</strong> Design Rule Check / Layout vs Schematic.</p>
                <p><strong>ECO:</strong> Engineering Change Order to fix late-cycle issues.</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-3">Next Steps</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Study <strong>Digital Logic</strong> foundations (combinational + sequential).</li>
              <li>Practice writing <strong>synthesizable RTL</strong> and simple testbenches.</li>
              <li>Explore the <strong>VLSI Calculator</strong> to build intuition for power/delay/area.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Intro;


