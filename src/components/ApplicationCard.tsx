import { FileText, ExternalLink, LucideIcon } from 'lucide-react';

interface ApplicationCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  architectureLink: string;
  architectureButtonText?: string;
  applicationLink: string;
  launchButtonText: string;
  theme: 'cyan' | 'purple' | 'green';
  icon: LucideIcon;
}

const ApplicationCard = ({
  title,
  subtitle,
  description,
  features,
  architectureLink,
  architectureButtonText = 'View Architecture',
  applicationLink,
  launchButtonText,
  theme,
  icon: Icon,
}: ApplicationCardProps) => {
  const themeClasses = {
    cyan: {
      border: 'border-cyan/30 hover:border-cyan/60',
      glow: 'group-hover:glow-cyan',
      iconBg: 'bg-cyan/10',
      iconColor: 'text-cyan',
      textGlow: 'text-glow-cyan',
      outlineBtn: 'btn-outline-cyan',
      solidBtn: 'btn-solid-cyan',
      bullet: 'bg-cyan',
    },
    purple: {
      border: 'border-purple/30 hover:border-purple/60',
      glow: 'group-hover:glow-purple',
      iconBg: 'bg-purple/10',
      iconColor: 'text-purple',
      textGlow: 'text-glow-purple',
      outlineBtn: 'btn-outline-purple',
      solidBtn: 'btn-solid-purple',
      bullet: 'bg-purple',
    },
    green: {
      border: 'border-green/30 hover:border-green/60',
      glow: 'group-hover:glow-green',
      iconBg: 'bg-green/10',
      iconColor: 'text-green',
      textGlow: 'text-glow-green',
      outlineBtn: 'btn-outline-green',
      solidBtn: 'btn-solid-green',
      bullet: 'bg-green',
    },
  };

  const classes = themeClasses[theme];

  return (
    <div
      className={`group glass-card rounded-2xl p-8 border-2 ${classes.border} transition-all duration-500 hover:translate-y-[-8px] ${classes.glow} relative overflow-hidden h-full flex flex-col`}
    >
      {/* Decorative Corner */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${classes.iconBg} rounded-bl-full opacity-50 transition-opacity group-hover:opacity-80`} />
      
      {/* Icon */}
      <div className={`relative w-16 h-16 ${classes.iconBg} rounded-xl flex items-center justify-center mb-6`}>
        <Icon className={`w-8 h-8 ${classes.iconColor}`} />
      </div>
      
      {/* Title */}
      <h3 className={`font-orbitron text-xl md:text-2xl font-bold mb-2 ${classes.iconColor} ${classes.textGlow}`}>
        {title}
      </h3>
      
      {/* Subtitle */}
      <p className="text-sm text-muted-foreground mb-4 font-mono">
        {subtitle}
      </p>
      
      {/* Description */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      {/* Features List */}
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className={`w-1.5 h-1.5 ${classes.bullet} rounded-full mt-2 flex-shrink-0`} />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href={architectureLink}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm ${classes.outlineBtn}`}
        >
          <FileText className="w-4 h-4" />
          {architectureButtonText}
        </a>
        <a
          href={applicationLink}
          className={`flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm ${classes.solidBtn}`}
        >
          <ExternalLink className="w-4 h-4" />
          {launchButtonText}
        </a>
      </div>
    </div>
  );
};

export default ApplicationCard;
