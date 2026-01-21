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
        <div className="max-w-5xl mx-auto space-y-8">
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-cyan/30 bg-gradient-to-br from-cyan/10 via-transparent to-transparent shadow-[0_25px_60px_-35px_rgba(0,255,255,0.6)]">
              <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-cyan mb-4">Problem Statement</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Modern connected vehicles generate large volumes of data, but legacy IoT and vehicle systems rely on centralized servers and basic security mechanisms. If these systems are compromised, vehicle data can be altered, faked, or misused without detection. This lack of verifiable data integrity creates risks for safety, compliance, and trust across fleet operators and manufacturers.
              </p>
            </div>
            
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-purple/30 bg-gradient-to-br from-purple/10 via-transparent to-transparent shadow-[0_25px_60px_-35px_rgba(168,85,247,0.55)]">
              <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-purple mb-4">Our Solution</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                We introduce a secure IoT framework that combines traditional cloud infrastructure with blockchain-based verification. Vehicle data is securely processed at the edge, cryptographically sealed, and anchored to an immutable blockchain while maintaining a private ledger for fast local validation. This approach ensures data authenticity, tamper detection, and secure over-the-air updates without disrupting existing systems.
              </p>
            </div>
            
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-green/30 bg-gradient-to-br from-green/10 via-transparent to-transparent shadow-[0_25px_60px_-35px_rgba(34,197,94,0.45)]">
              <h3 className="font-orbitron text-xl md:text-2xl font-semibold text-green mb-4">Impact</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                The solution delivers trusted and tamper-proof vehicle data, safer remote updates, and transparent verification for all stakeholders. It improves operational reliability, strengthens security against cyber and data tampering attacks, and enables confident decision-making for fleet management, compliance, and safety-critical applications.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
