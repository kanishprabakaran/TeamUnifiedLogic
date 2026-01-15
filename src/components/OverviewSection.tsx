import { Activity, Shield, TrendingUp } from 'lucide-react';

const OverviewSection = () => {
  const stats = [
    { value: '99.99%', label: 'Uptime', icon: Activity },
    { value: '1.2M+', label: 'Transactions', icon: Shield },
    { value: '12ms', label: 'Avg Latency', icon: TrendingUp },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Project </span>
            <span className="text-cyan text-glow-cyan">Overview</span>
          </h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-cyan via-purple to-green rounded-full" />
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div className="space-y-6">
            <div className="glass-card p-6 rounded-xl border-l-4 border-cyan">
              <h3 className="font-orbitron text-lg font-semibold text-cyan mb-3">Problem Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Legacy vehicle systems face critical security vulnerabilities in the modern connected era. 
                Traditional data transmission methods lack the cryptographic protection needed to prevent 
                tampering, leaving fleet operators and manufacturers exposed to potential breaches.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border-l-4 border-purple">
              <h3 className="font-orbitron text-lg font-semibold text-purple mb-3">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Team Unified Logic presents a comprehensive IoT security ecosystem that bridges legacy 
                automotive systems with cutting-edge blockchain technology. Our three-tier platform ensures 
                military-grade data integrity from vehicle sensors to distributed ledgers.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-xl border-l-4 border-green">
              <h3 className="font-orbitron text-lg font-semibold text-green mb-3">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enhanced fleet management, improved driver safety through real-time coaching, and optimized 
                EV infrastructure planning. Our solution processes over 1.2 million transactions with 99.99% 
                uptime and 12ms latency on AWS cloud infrastructure.
              </p>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl text-center animated-border group"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan group-hover:text-cyan-glow transition-colors" />
                <div className="font-orbitron text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
