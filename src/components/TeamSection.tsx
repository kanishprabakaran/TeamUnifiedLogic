import { User } from 'lucide-react';
import kanishPhoto from '@/config/Photos/Kanish Prabakaran.jpg';
import harshaPhoto from '@/config/Photos/Harsha Guntreddi.jpg';
import gangaPhoto from '@/config/Photos/Ganga Ramesh.jpg';
import sathishPhoto from '@/config/Photos/Sathish E.png';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Kanish Prabakaran',
      color: 'cyan',
      photo: kanishPhoto,
    },
    {
      name: 'Harsha Guntreddi',
      color: 'purple',
      photo: harshaPhoto,
    },
    {
      name: 'Ganga Ramesh',
      color: 'green',
      photo: gangaPhoto,
    },
    {
      name: 'Sathish E',
      color: 'gold',
      photo: sathishPhoto,
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const colors = colorClasses[member.color];
            return (
              <div
                key={index}
                className={`group team-card glass-card rounded-2xl p-6 text-center border ${colors.border} ${colors.glow} transition-all duration-300 flex flex-col items-center`}
              >
                {/* Avatar */}
                <div className={`w-52 h-52 mx-auto mb-4 rounded-full ${colors.bg} border-2 ${colors.border} flex items-center justify-center overflow-hidden transition-all duration-300`}>
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-full w-full object-cover object-center"
                      loading="lazy"
                    />
                  ) : (
                    <User className={`w-12 h-12 ${colors.text}`} />
                  )}
                </div>
                
                {/* Name */}
                <div className="min-h-[3.5rem] flex items-center justify-center">
                  <h3 className="font-orbitron text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
