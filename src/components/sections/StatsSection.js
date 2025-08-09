import React from 'react';
import { TrendingUp, Users, TreePine, Target, Globe, Award, Clock, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "100%",
      label: "Convert Registration Rate",
      description: "within 48 hours",
      color: "primary"
    },
    {
      icon: TreePine,
      number: "Multi-Gen",
      label: "Spiritual Lineage",
      description: "tracking depth",
      color: "growth"
    },
    {
      icon: TrendingUp,
      number: "Real-time",
      label: "Leadership Insights",
      description: "data-driven decisions",
      color: "sacred"
    },
    {
      icon: Globe,
      number: "5+",
      label: "Languages Supported",
      description: "global accessibility",
      color: "primary"
    },
    {
      icon: Award,
      number: "24/7",
      label: "Technical Support",
      description: "continuous assistance",
      color: "growth"
    },
    {
      icon: Heart,
      number: "100%",
      label: "Mentorship Coverage",
      description: "no soul left behind",
      color: "sacred"
    }
  ];

  const benefits = [
    {
      title: "Sustainable Revival",
      description: "Robust digital infrastructure to sustain revival momentum with systematic follow-up",
      impact: "Enhanced Follow-up"
    },
    {
      title: "Data-Driven Strategy",
      description: "Real-time actionable data for informed strategic planning and resource allocation",
      impact: "Smart Leadership"
    },
    {
      title: "Motivated Soul-Winners",
      description: "Gamification and recognition systems fostering vibrant evangelism culture",
      impact: "Active Engagement"
    },
    {
      title: "Accelerated Multiplication",
      description: "Visual spiritual family trees catalyzing exponential membership growth",
      impact: "Kingdom Expansion"
    }
  ];

  const getGradientClass = (color) => {
    switch (color) {
      case 'growth': return 'bg-gradient-growth';
      case 'sacred': return 'bg-gradient-sacred';
      default: return 'bg-gradient-divine';
    }
  };

  return (
    <section className="py-20 bg-gradient-heavenly">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Measurable Impact &
            <span className="bg-gradient-divine bg-clip-text text-transparent"> Transformation</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Key performance indicators and strategic benefits that will revolutionize 
            RCCG's global evangelism and discipleship effectiveness.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="group hover:shadow-divine transition-all duration-300 border-border/50 bg-white/70 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${getGradientClass(stat.color)} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits to RCCG */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Strategic Benefits for Global RCCG Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-divine transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-divine rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-foreground">{benefit.title}</h4>
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {benefit.impact}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <Card className="bg-gradient-to-br from-primary/5 via-background to-primary-glow/5 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Implementation Phases</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { phase: "Phase 1", title: "MVP Development", duration: "8-10 weeks", focus: "Core Features" },
                { phase: "Phase 2", title: "Network Integration", duration: "6-8 weeks", focus: "Soul-Winning Tree" },
                { phase: "Phase 3", title: "Advanced Features", duration: "6-8 weeks", focus: "Analytics & Gamification" },
                { phase: "Phase 4", title: "Global Rollout", duration: "Ongoing", focus: "Worldwide Deployment" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-divine rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{phase.phase}</h4>
                  <p className="text-sm font-medium text-primary mb-1">{phase.title}</p>
                  <p className="text-xs text-muted-foreground mb-2">{phase.duration}</p>
                  <p className="text-xs text-muted-foreground">{phase.focus}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};