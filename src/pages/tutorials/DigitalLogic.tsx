import React from 'react';
import Layout from '../../components/Layout';

const DigitalLogic: React.FC = () => {
  return (
    <Layout title="Digital Logic" description="Boolean algebra, combinational and sequential logic.">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="card overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
                alt="Digital logic circuits"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Digital Logic</h1>
          <p className="text-lg text-gray-600 mb-8">Build a strong foundation in Boolean algebra, logic gates, combinational circuits, and sequential systems (flip‑flops, counters, FSMs). This module focuses on correctness, timing, and synthesizable design practices.</p>

          {/* Boolean Algebra Essentials */}
          <div className="card p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Boolean Algebra Essentials</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Laws and Theorems: De Morgan, Distributive, Associative, Absorption.</li>
              <li>Canonical Forms: Sum of Products (SOP), Product of Sums (POS).</li>
              <li>Minimization: Karnaugh Maps (K‑maps), Quine–McCluskey basics.</li>
              <li>Hazards: Static‑0, Static‑1, Dynamic; mitigation using consensus terms.</li>
            </ul>
          </div>

          {/* Combinational Logic */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Combinational Logic</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Building Blocks</h3>
                <p className="text-gray-600">Adders (half/full), subtractors, multiplexers, encoders/decoders, comparators, priority logic.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Synthesis Tips</h3>
                <p className="text-gray-600">Avoid incomplete sensitivity lists; use ternary operators carefully; prefer case/casez/casex with defaults.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Parameterization</h3>
                <p className="text-gray-600">Leverage generate blocks and parameters for scalable datapaths and bus widths.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Verification</h3>
                <p className="text-gray-600">Constrain inputs; validate truth tables; assert corner cases (all‑zeros/all‑ones, carries/borrows).</p>
              </div>
            </div>
          </div>

          {/* Sequential Logic */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Sequential Logic</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Flip‑Flops & Latches</h3>
                <p className="text-gray-600">D, T, JK flip‑flops; setup/hold; metastability; latch vs. flop and why latches complicate timing.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">Counters & Registers</h3>
                <p className="text-gray-600">Binary/Gray counters, up/down, synchronous vs asynchronous resets; shift registers and load‑enable.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">FSM Design</h3>
                <p className="text-gray-600">Moore vs. Mealy, encoding (one‑hot, binary, Gray), reset state, safe state recovery, output glitch prevention.</p>
              </div>
              <div className="card p-5">
                <h3 className="text-lg font-semibold mb-2">CDC & Resets</h3>
                <p className="text-gray-600">Clock domain crossing synchronizers; async assert / sync deassert resets; avoiding fanout‑heavy resets.</p>
              </div>
            </div>
          </div>

          {/* Timing & Constraints */}
          <div className="card p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-3">Timing & Constraints</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Max/Min paths; setup/hold; false/multicycle paths; generated clocks.</li>
              <li>Input/output delays relative to board timing; IO standards; registering IO at boundaries.</li>
              <li>Pipeline for frequency; balance stages; avoid long combinational chains.</li>
            </ul>
          </div>

          {/* Practice */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-3">Practice Exercises</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Design a parameterized priority encoder and verify for all widths.</li>
              <li>Implement a synchronous up/down counter with load and terminal count.</li>
              <li>Build a Mealy traffic‑light controller with debounced pedestrian input.</li>
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalLogic;


