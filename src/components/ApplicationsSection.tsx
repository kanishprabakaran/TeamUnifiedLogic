import { Link2, Brain, MapPin } from 'lucide-react';
import ApplicationCard from './ApplicationCard';
import { LINKS } from '@/config/links';

const ApplicationsSection = () => {
  const applications = [
    {
      title: 'Automotive Blockchain Security',
      subtitle: 'Real-Time Data Integrity from Road to Ledger',
      description: 'A dual-DLT architecture combining public and private ledgers with Merkle Tree cryptography for immutable vehicle data protection on AWS cloud infrastructure.',
      features: [
        'Merkle Tree Cryptography with SHA-256 Hashing',
        'Dual-DLT Architecture (Public & Private Ledger)',
        'Raspberry Pi Edge Computing Integration',
        'AWS Cloud (IoT Core, EC2, KMS, S3, SageMaker)',
        '99.99% Uptime with 1.2M+ Transactions',
      ],
      architectureLink: LINKS.blockchain.architecture,
      applicationLink: LINKS.blockchain.application,
      launchButtonText: 'Launch Application',
      theme: 'cyan' as const,
      icon: Link2,
    },
    {
      title: 'AI-Powered Fleet Intelligence',
      subtitle: 'Real-Time ML Inference & Driver Coaching',
      description: 'Advanced behavioral analytics with Random Forest ML models for fuel optimization, TVOL anomaly detection, and personalized driver coaching recommendations.',
      features: [
        '60-Second Window Behavior Vector Analysis',
        'Random Forest ML (4.02 L/hr Fuel Prediction)',
        'Real-time Driver Coaching (Priority Levels)',
        'TVOL Anomaly Detection with Time-Varying Lasso',
        'OBD-II Vehicle Data Integration',
      ],
      architectureLink: LINKS.fleet.architecture,
      applicationLink: LINKS.fleet.application,
      launchButtonText: 'Launch Dashboard',
      theme: 'purple' as const,
      icon: Brain,
    },
    {
      title: 'EV Route Planner',
      subtitle: 'Optimized Route Planning for Tata EVs',
      description: 'Intelligent route optimization for Tata Nexon EV Max with real-time charging station visualization and range calculation across the Indian charging network.',
      features: [
        'Tata Nexon EV Max Integration (437km Range)',
        'Dynamic Battery Percentage Slider',
        'Pan-India Charging Station Network',
        'Fast Charge: 50kW | Battery: 40.5kWh',
        'Efficiency Rating: 10.8km/kWh',
      ],
      architectureLink: LINKS.ev.architecture,
      applicationLink: LINKS.ev.application,
      launchButtonText: 'Launch Planner',
      theme: 'green' as const,
      icon: MapPin,
    },
  ];

  return (
    <section id="applications" className="relative py-24 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 circuit-pattern opacity-30" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-cyan border border-cyan/30 rounded-full bg-cyan/5">
            Three Integrated Solutions
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Our </span>
            <span className="text-cyan text-glow-cyan">Applications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive ecosystem of automotive security and fleet management solutions
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-cyan via-purple to-green rounded-full" />
        </div>
        
        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <ApplicationCard {...app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
