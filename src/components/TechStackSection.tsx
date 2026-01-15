const TechStackSection = () => {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'cyan',
      technologies: ['React', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Backend',
      color: 'purple',
      technologies: ['Python', 'Raspberry Pi', 'MQTT Protocol', 'Node.js'],
    },
    {
      title: 'Cloud & Infrastructure',
      color: 'green',
      technologies: ['AWS IoT Core', 'AWS EC2', 'AWS KMS', 'AWS S3', 'SageMaker'],
    },
    {
      title: 'Blockchain',
      color: 'gold',
      technologies: ['Ethereum', 'Polygon', 'Merkle Tree', 'Smart Contracts'],
    },
    {
      title: 'ML & AI',
      color: 'purple',
      technologies: ['Random Forest', 'TensorFlow', 'Real-time Inference', 'TVOL'],
    },
    {
      title: 'Security',
      color: 'cyan',
      technologies: ['SHA-256', 'AWS KMS', 'Merkle Tree', 'OBD-II Protocol'],
    },
  ];

  const colorClasses: Record<string, string> = {
    cyan: 'border-cyan/40 hover:border-cyan hover:shadow-[0_0_20px_hsl(var(--cyan)/0.3)]',
    purple: 'border-purple/40 hover:border-purple hover:shadow-[0_0_20px_hsl(var(--purple)/0.3)]',
    green: 'border-green/40 hover:border-green hover:shadow-[0_0_20px_hsl(var(--green)/0.3)]',
    gold: 'border-gold/40 hover:border-gold hover:shadow-[0_0_20px_hsl(var(--gold)/0.3)]',
  };

  const titleColors: Record<string, string> = {
    cyan: 'text-cyan',
    purple: 'text-purple',
    green: 'text-green',
    gold: 'text-gold',
  };

  return (
    <section className="relative py-24 overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-foreground">Technology </span>
            <span className="text-purple text-glow-purple">Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading technologies and frameworks
          </p>
          <div className="w-24 h-1 mx-auto mt-6 bg-gradient-to-r from-cyan via-purple to-green rounded-full" />
        </div>
        
        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-card p-6 rounded-xl border ${colorClasses[category.color]} transition-all duration-300`}
            >
              <h3 className={`font-orbitron text-lg font-semibold mb-4 ${titleColors[category.color]}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="tech-badge"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
