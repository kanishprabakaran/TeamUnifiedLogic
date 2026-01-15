import { User } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Kanish Prabakaran',
      role: 'Blockchain Developer',
      color: 'cyan',
    },
    {
      name: 'Harsha Guntreddi',
      role: 'ML Engineer',
      color: 'purple',
    },
    {
      name: 'Ganga Ramesh',
      role: 'Full-Stack Developer',
      color: 'green',
    },
    {
      name: 'Sathish E',
      role: 'IoT Specialist',
      color: 'gold',
    },
  ];

  const colorClasses: Record<string, { border: string; glow: string; text: string; bg: string }> = {
    cyan: {
      border: 'border-cyan/40 group-hover:border-cyan',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--cyan)/0.4)]',
      text: 'text-cyan',
      bg: 'bg-cyan/10',
    },
    purple: {
      border: 'border-purple/40 group-hover:border-purple',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--purple)/0.4)]',
      text: 'text-purple',
      bg: 'bg-purple/10',
    },
    green: {
      border: 'border-green/40 group-hover:border-green',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--green)/0.4)]',
      text: 'text-green',
      bg: 'bg-green/10',
    },
    gold: {
      border: 'border-gold/40 group-hover:border-gold',
      glow: 'group-hover:shadow-[0_0_30px_hsl(var(--gold)/0.4)]',
      text: 'text-gold',
      bg: 'bg-gold/10',
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Meet Team </span>
            <span className="text-green text-glow-green">Unified Logic</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our innovative solutions
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-cyan via-purple to-green rounded-full" />
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const colors = colorClasses[member.color];
            return (
              <div
                key={index}
                className={`group team-card glass-card rounded-2xl p-6 text-center border ${colors.border} ${colors.glow} transition-all duration-300`}
              >
                {/* Avatar */}
                <div className={`w-24 h-24 mx-auto mb-4 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center overflow-hidden transition-all duration-300`}>
                  <User className={`w-12 h-12 ${colors.text}`} />
                </div>
                
                {/* Name */}
                <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                
                {/* Role */}
                <p className={`text-sm font-medium ${colors.text}`}>
                  {member.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
