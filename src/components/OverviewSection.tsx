const OverviewSection = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="font-mono text-sm md:text-base uppercase tracking-[0.35em] text-cyan/70 mb-4">
            Mission Snapshot
          </p>
          <h2 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            <span className="text-foreground">Project </span>
            <span className="text-cyan text-glow-cyan">Overview</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl">
            A crisp, end-to-end view of the problem we solve, the architecture we built, and the impact we
            deliver across secure mobility.
          </p>
          <div className="w-32 h-1.5 mx-auto mt-8 bg-gradient-to-r from-cyan via-purple to-green rounded-full" />
        </div>
        
        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 via-transparent to-transparent shadow-[0_25px_60px_-35px_rgba(0,255,255,0.6)]">
              <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-cyan mb-4">Problem Statement</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Legacy vehicle systems face critical security vulnerabilities in the modern connected era. 
                Traditional data transmission methods lack the cryptographic protection needed to prevent 
                tampering, leaving fleet operators and manufacturers exposed to potential breaches.
              </p>
            </div>
            
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-purple/30 bg-gradient-to-br from-purple/10 via-transparent to-transparent shadow-[0_25px_60px_-35px_rgba(168,85,247,0.55)]">
              <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-purple mb-4">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Team Unified Logic presents a comprehensive IoT security ecosystem that bridges legacy 
                automotive systems with cutting-edge blockchain technology. Our three-tier platform ensures 
                military-grade data integrity from vehicle sensors to distributed ledgers.
              </p>
            </div>
            
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-green/30 bg-gradient-to-br from-green/10 via-transparent to-transparent shadow-[0_25px_60px_-35px_rgba(34,197,94,0.45)]">
              <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-green mb-4">Impact</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Enhanced fleet management, improved driver safety through real-time coaching, and optimized 
                operational planning. Our solution processes over 1.2 million transactions with 99.99% 
                uptime and 12ms latency on AWS cloud infrastructure.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
