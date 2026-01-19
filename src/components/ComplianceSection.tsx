import { ShieldCheck } from 'lucide-react';
import ApplicationCard from './ApplicationCard';

const ComplianceSection = () => {
  const compliance = {
    title: 'Compliance Management',
    subtitle: 'EU R155, R156, and ISO/SAE 21434 aligned compliance evidence for Unified Logic (hackathon build).',
    description:
      'This module summarizes the cybersecurity + OTA update controls we implemented and the proof artifacts we generate during the demo.',
    features: [
      'Tamper-proof OBD data integrity (Merkle Root + Public DLT TxID anchor)',
      'Secure OTA updates (Signed package + AWS IoT Jobs + Status reporting)',
      'Audit-ready verification (Private ledger manifest + S3 evidence + EC2 match logs)',
    ],
    architectureLink:
      'https://amritavishwavidyapeetham-my.sharepoint.com/:w:/g/personal/cb_en_u4cse22125_cb_students_amrita_edu/IQDA9JXqplXQTb-QtSKuQlH4Aer-hU2_N8VweJjmr-CxHPs?e=noUsjw',
    architectureButtonText: 'Open Document',
    theme: 'green' as const,
    icon: ShieldCheck,
  };

  return (
    <section id="compliance" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-30" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-mono text-green border border-green/30 rounded-full bg-green/5">
            Governance & Assurance
          </span>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Compliance </span>
            <span className="text-green text-glow-green">Management</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Centralized compliance oversight for policies, audits, and evidence tracking
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-green via-cyan to-purple rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 place-items-center">
          <div className="animate-fade-in-up opacity-0 h-full w-full md:col-span-2 lg:col-span-2 max-w-2xl">
            <ApplicationCard {...compliance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
