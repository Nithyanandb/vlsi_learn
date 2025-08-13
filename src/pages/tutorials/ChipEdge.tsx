import React from 'react';
import Layout from '../../components/Layout';

const ChipEdge: React.FC = () => {
  return (
    <Layout title="Chip Edge Techniques" description="Seal rings, scribe lines, edge terminations and test structures.">
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="card overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200&auto=format&fit=crop"
                alt="Wafer and dies"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Chip Edge Techniques</h1>
          <p className="text-lg text-gray-600 mb-8">Chip edges are engineered to protect the die, improve yield, and support test/characterization. This module covers seal rings, scribe lines, edge terminations, and process monitors with practical sign‑off considerations.</p>

          {/* Seal Rings */}
          <div className="card p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Seal Rings</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Purpose: Protect against moisture, contaminants, and mechanical stress during handling/dicing.</li>
              <li>Composition: Stacked metals with vias; spacing from active area defined by foundry rules.</li>
              <li>Integration: Connect to ground to shunt ESD; ensure continuity around corners and IP perimeters.</li>
            </ul>
          </div>

          {/* Edge Termination */}
          <div className="card p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Edge Termination</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>High‑voltage devices: Use guard rings / field plates to manage fringing fields and breakdown paths.</li>
              <li>ESD structures: Provide discharge paths without coupling noise into sensitive analog blocks.</li>
              <li>Noise isolation: Deep n‑well, P‑guard rings for substrate noise mitigation near IO and analog.</li>
            </ul>
          </div>

          {/* Scribe Lines & Dicing */}
          <div className="card p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Scribe Lines & Dicing</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Street width: Determined by saw blade/laser kerf and foundry recommendations.</li>
              <li>Alignment marks: Optical alignment and overlay targets placed within the scribe lane.</li>
              <li>Mechanical stress: Keep critical nets and thin metals away from dicing edge; add dummy fill.</li>
            </ul>
          </div>

          {/* Test Structures & Monitors */}
          <div className="card p-6 mb-10">
            <h2 className="text-2xl font-semibold mb-3">Test Structures & Process Monitors</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ring oscillators for speed tracking; monitor Vth, line/space, via resistance, and metal thickness.</li>
              <li>DFM monitors: Antenna effect structures, OPC verifiers, contact arrays for yield analysis.</li>
              <li>Place in scribe lanes or die margins where accessible to the probe; label with coordinates.</li>
            </ul>
          </div>

          {/* Sign-off & Foundry */}
          <div className="card p-6">
            <h2 className="text-2xl font-semibold mb-3">Sign‑off & Foundry Handoff</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>DRC/LVS: Special edge checks for seal ring spacing, slotting, antenna, density, notch rules.</li>
              <li>Mask data: Ensure scribe alignment keys and seal rings are in the correct layers for mask prep.</li>
              <li>ESD & IO: Verify pad ring continuity, ESD clamps, and corner cells; confirm package clearance.</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ChipEdge;


