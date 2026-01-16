import { Shield, Link2, Brain, MapPin } from 'lucide-react';
import { LINKS } from '@/config/links';

const Footer = () => {
  const quickLinks = [
    { label: 'Blockchain Architecture', href: LINKS.blockchain.architecture, icon: Link2 },
    { label: 'Blockchain App', href: LINKS.blockchain.application, icon: Link2 },
    { label: 'Fleet Architecture', href: LINKS.fleet.architecture, icon: Brain },
    { label: 'Fleet Dashboard', href: LINKS.fleet.application, icon: Brain },
    { label: 'EV Architecture', href: LINKS.ev.architecture, icon: MapPin },
    { label: 'EV Planner', href: LINKS.ev.application, icon: MapPin },
  ];

  return (
    <footer className="relative py-16 bg-card/50 border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-cyan" />
              <span className="font-orbitron text-xl font-bold text-foreground">
                Unified Logic
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Revolutionizing automotive security through blockchain innovation. 
              Built for the Tata Technology Innovent Hackathon 2026.
            </p>
            <p className="text-sm text-muted-foreground">
              Powered by <span className="text-cyan">AWS</span> | Secured by <span className="text-purple">Blockchain</span>
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-orbitron text-lg font-semibold text-foreground mb-4">
              Quick Access
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © 2026 Team Unified Logic. Built for{' '}
            <span className="text-cyan font-medium">Tata Technology Innovent</span>.
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse" />
            All Systems Operational
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
