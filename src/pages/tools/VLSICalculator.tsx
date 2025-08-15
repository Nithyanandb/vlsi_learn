import React, { useState } from 'react';
import { Calculator, Zap, Cpu, BarChart3, Settings } from 'lucide-react';
import Layout from '../../components/Layout';

const VLSICalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState('power');
  const [results, setResults] = useState<any>({});

  // Power Calculator State
  const [powerInputs, setPowerInputs] = useState({
    voltage: '',
    current: '',
    frequency: '',
    capacitance: '',
    switchingActivity: '0.5'
  });

  // Delay Calculator State
  const [delayInputs, setDelayInputs] = useState({
    resistance: '',
    capacitance: '',
    inputTransition: '',
    outputLoad: ''
  });

  // Area Calculator State
  const [areaInputs, setAreaInputs] = useState({
    width: '',
    height: '',
    transistorCount: '',
    technology: '7nm'
  });

  const calculatePower = () => {
    const V = parseFloat(powerInputs.voltage);
    const I = parseFloat(powerInputs.current);
    const f = parseFloat(powerInputs.frequency);
    const C = parseFloat(powerInputs.capacitance);
    const α = parseFloat(powerInputs.switchingActivity);

    let staticPower = 0;
    let dynamicPower = 0;

    if (V && I) {
      staticPower = V * I;
    }

    if (V && f && C) {
      dynamicPower = α * C * Math.pow(V, 2) * f;
    }

    const totalPower = staticPower + dynamicPower;

    setResults({
      staticPower: staticPower.toFixed(6),
      dynamicPower: dynamicPower.toFixed(6),
      totalPower: totalPower.toFixed(6)
    });
  };

  const calculateDelay = () => {
    const R = parseFloat(delayInputs.resistance);
    const C = parseFloat(delayInputs.capacitance);
    const tr = parseFloat(delayInputs.inputTransition);
    const CL = parseFloat(delayInputs.outputLoad);

    let propagationDelay = 0;
    let transitionTime = 0;

    if (R && C) {
      propagationDelay = 0.69 * R * C;
    }

    if (R && CL) {
      transitionTime = 2.2 * R * CL;
    }

    setResults({
      propagationDelay: propagationDelay.toFixed(3),
      transitionTime: transitionTime.toFixed(3),
      totalDelay: (propagationDelay + transitionTime).toFixed(3)
    });
  };

  const calculateArea = () => {
    const w = parseFloat(areaInputs.width);
    const h = parseFloat(areaInputs.height);
    const transistors = parseFloat(areaInputs.transistorCount);

    const techMultiplier = {
      '45nm': 1.0,
      '28nm': 0.6,
      '14nm': 0.3,
      '7nm': 0.15,
      '5nm': 0.1
    }[areaInputs.technology] || 1.0;

    let chipArea = 0;
    let transistorDensity = 0;

    if (w && h) {
      chipArea = w * h;
    }

    if (transistors && chipArea) {
      transistorDensity = (transistors / chipArea) * techMultiplier;
    }

    setResults({
      chipArea: chipArea.toFixed(2),
      transistorDensity: transistorDensity.toFixed(0),
      technologyFactor: techMultiplier
    });
  };

  const calculators = [
    {
      id: 'power',
      name: 'Power Calculator',
      icon: Zap,
      description: 'Calculate static and dynamic power consumption'
    },
    {
      id: 'delay',
      name: 'Delay Calculator',
      icon: BarChart3,
      description: 'Compute propagation delay and transition times'
    },
    {
      id: 'area',
      name: 'Area Calculator',
      icon: Cpu,
      description: 'Estimate chip area and transistor density'
    }
  ];

  const renderPowerCalculator = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Supply Voltage (V)
          </label>
          <input
            type="number"
            step="0.1"
            value={powerInputs.voltage}
            onChange={(e) => setPowerInputs({ ...powerInputs, voltage: e.target.value })}
            className="input-field"
            placeholder="1.8"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Leakage Current (A)
          </label>
          <input
            type="number"
            step="0.000001"
            value={powerInputs.current}
            onChange={(e) => setPowerInputs({ ...powerInputs, current: e.target.value })}
            className="input-field"
            placeholder="0.000001"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Clock Frequency (Hz)
          </label>
          <input
            type="number"
            step="1000000"
            value={powerInputs.frequency}
            onChange={(e) => setPowerInputs({ ...powerInputs, frequency: e.target.value })}
            className="input-field"
            placeholder="1000000000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Load Capacitance (F)
          </label>
          <input
            type="number"
            step="0.000000000001"
            value={powerInputs.capacitance}
            onChange={(e) => setPowerInputs({ ...powerInputs, capacitance: e.target.value })}
            className="input-field"
            placeholder="0.000000000001"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Switching Activity Factor
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          max="1"
          value={powerInputs.switchingActivity}
          onChange={(e) => setPowerInputs({ ...powerInputs, switchingActivity: e.target.value })}
          className="input-field"
          placeholder="0.5"
        />
      </div>

      <button onClick={calculatePower} className="btn-primary w-full">
        <Calculator className="w-4 h-4 mr-2" />
        Calculate Power
      </button>

      {results.totalPower && (
        <div className="card p-6 bg-blue-50 border-blue-200">
          <h3 className="text-lg font-semibold mb-4">Power Analysis Results</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{results.staticPower}</div>
              <div className="text-sm text-gray-600">Static Power (W)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{results.dynamicPower}</div>
              <div className="text-sm text-gray-600">Dynamic Power (W)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{results.totalPower}</div>
              <div className="text-sm text-gray-600">Total Power (W)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderDelayCalculator = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resistance (Ω)
          </label>
          <input
            type="number"
            step="1000"
            value={delayInputs.resistance}
            onChange={(e) => setDelayInputs({ ...delayInputs, resistance: e.target.value })}
            className="input-field"
            placeholder="10000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Capacitance (F)
          </label>
          <input
            type="number"
            step="0.000000000001"
            value={delayInputs.capacitance}
            onChange={(e) => setDelayInputs({ ...delayInputs, capacitance: e.target.value })}
            className="input-field"
            placeholder="0.000000000001"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Input Transition Time (s)
          </label>
          <input
            type="number"
            step="0.000000001"
            value={delayInputs.inputTransition}
            onChange={(e) => setDelayInputs({ ...delayInputs, inputTransition: e.target.value })}
            className="input-field"
            placeholder="0.000000001"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Output Load (F)
          </label>
          <input
            type="number"
            step="0.000000000001"
            value={delayInputs.outputLoad}
            onChange={(e) => setDelayInputs({ ...delayInputs, outputLoad: e.target.value })}
            className="input-field"
            placeholder="0.000000000001"
          />
        </div>
      </div>

      <button onClick={calculateDelay} className="btn-primary w-full">
        <BarChart3 className="w-4 h-4 mr-2" />
        Calculate Delay
      </button>

      {results.totalDelay && (
        <div className="card p-6 bg-green-50 border-green-200">
          <h3 className="text-lg font-semibold mb-4">Timing Analysis Results</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{results.propagationDelay}</div>
              <div className="text-sm text-gray-600">Propagation Delay (s)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{results.transitionTime}</div>
              <div className="text-sm text-gray-600">Transition Time (s)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{results.totalDelay}</div>
              <div className="text-sm text-gray-600">Total Delay (s)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderAreaCalculator = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chip Width (mm)
          </label>
          <input
            type="number"
            step="0.1"
            value={areaInputs.width}
            onChange={(e) => setAreaInputs({ ...areaInputs, width: e.target.value })}
            className="input-field"
            placeholder="10"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chip Height (mm)
          </label>
          <input
            type="number"
            step="0.1"
            value={areaInputs.height}
            onChange={(e) => setAreaInputs({ ...areaInputs, height: e.target.value })}
            className="input-field"
            placeholder="10"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of Transistors
          </label>
          <input
            type="number"
            step="1000000"
            value={areaInputs.transistorCount}
            onChange={(e) => setAreaInputs({ ...areaInputs, transistorCount: e.target.value })}
            className="input-field"
            placeholder="1000000000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Technology Node
          </label>
          <select
            value={areaInputs.technology}
            onChange={(e) => setAreaInputs({ ...areaInputs, technology: e.target.value })}
            className="input-field"
          >
            <option value="45nm">45nm</option>
            <option value="28nm">28nm</option>
            <option value="14nm">14nm</option>
            <option value="7nm">7nm</option>
            <option value="5nm">5nm</option>
          </select>
        </div>
      </div>

      <button onClick={calculateArea} className="btn-primary w-full">
        <Cpu className="w-4 h-4 mr-2" />
        Calculate Area
      </button>

      {results.chipArea && (
        <div className="card p-6 bg-purple-50 border-purple-200">
          <h3 className="text-lg font-semibold mb-4">Area Analysis Results</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{results.chipArea}</div>
              <div className="text-sm text-gray-600">Chip Area (mm²)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{results.transistorDensity}</div>
              <div className="text-sm text-gray-600">Transistors/mm²</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{results.technologyFactor}</div>
              <div className="text-sm text-gray-600">Tech Factor</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <Layout

    >
      {/* Hero Section */}


      {/* Calculator Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-2">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-xl">
              {calculators.map((calc) => (
                <button
                  key={calc.id}
                  onClick={() => setActiveTab(calc.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeTab === calc.id
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                    }`}
                >
                  <calc.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{calc.name}</span>
                </button>
              ))}
            </div>

            {/* Active Calculator Description */}
            <div className="mb-8 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center space-x-3">
                {calculators.find(c => c.id === activeTab)?.icon && (
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    {React.createElement(calculators.find(c => c.id === activeTab)!.icon, {
                      className: "w-5 h-5 text-white"
                    })}
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-semibold">
                    {calculators.find(c => c.id === activeTab)?.name}
                  </h2>
                  <p className="text-gray-600">
                    {calculators.find(c => c.id === activeTab)?.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Content */}
            <div className="animate-fade-in-up">
              {activeTab === 'power' && renderPowerCalculator()}
              {activeTab === 'delay' && renderDelayCalculator()}
              {activeTab === 'area' && renderAreaCalculator()}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold mb-4">Usage Guidelines</h2>
            <p className="text-gray-600">
              Tips and best practices for accurate VLSI calculations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 animate-fade-in-up">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Power Calculator</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use realistic voltage values (0.8V - 3.3V)</li>
                <li>• Consider process variations</li>
                <li>• Account for temperature effects</li>
                <li>• Include switching activity factor</li>
              </ul>
            </div>

            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Delay Calculator</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Use extracted parasitics</li>
                <li>• Consider worst-case conditions</li>
                <li>• Include wire delays</li>
                <li>• Account for load variations</li>
              </ul>
            </div>

            <div className="card p-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Area Calculator</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Include routing overhead</li>
                <li>• Consider standard cell libraries</li>
                <li>• Account for design rules</li>
                <li>• Factor in yield considerations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VLSICalculator;