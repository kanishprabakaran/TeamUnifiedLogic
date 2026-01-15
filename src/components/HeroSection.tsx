import { ChevronDown, Shield, Zap, Lock } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient circuit-pattern">
      <ParticleBackground />
      
      {/* Decorative Elements */}
      <div className="absolute bottom-32 right-20 w-48 h-48 border border-purple/20 rounded-full animate-spin-slow opacity-20" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-cyan rounded-full animate-glow-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-green rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Event Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-card border border-cyan/30 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          <Shield className="w-4 h-4 text-cyan" />
          <span className="text-sm font-medium text-cyan">Tata Technology Innovent Hackathon 2026</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="text-foreground">IoT Security:</span>
          <br />
          <span className="text-glow-cyan text-cyan">Legacy</span>
          <span className="text-foreground"> and </span>
          <span className="text-glow-purple text-purple">Blockchain</span>
          <span className="text-foreground"> Solutions</span>
        </h1>
        
        {/* Subheadline */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          <span className="font-orbitron text-lg md:text-xl text-muted-foreground">Team</span>
          <span className="font-orbitron text-lg md:text-xl font-bold text-glow-cyan text-cyan">Unified Logic</span>
        </div>
        
        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Revolutionizing Automotive Security Through Blockchain Innovation —
          <br className="hidden md:block" />
          From Road to Ledger, Total Data Integrity
        </p>
        
        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2 text-cyan">
            <Lock className="w-5 h-5" />
            <span className="text-sm font-medium">Military-Grade Security</span>
          </div>
          <div className="flex items-center gap-2 text-purple">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">Real-Time Processing</span>
          </div>
          <div className="flex items-center gap-2 text-green">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">99.99% Uptime</span>
          </div>
        </div>
        
        {/* CTA Button */}
        <a
          href="#applications"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg btn-solid-cyan font-orbitron text-sm tracking-wider animate-fade-in-up opacity-0"
          style={{ animationDelay: '0.6s' }}
        >
          Explore Our Solutions
          <ChevronDown className="w-4 h-4" />
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 scroll-indicator">
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
