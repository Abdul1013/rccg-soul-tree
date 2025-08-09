import React from 'react';
import { TreePine, Users, TrendingUp, Target, Heart, Shield, Globe, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Intuitive User Registration",
      description: "Simplified, secure interface for capturing essential new convert data with seamless onboarding experience.",
      color: "primary"
    },
    {
      icon: TreePine,
      title: "Dynamic Spiritual Lineage",
      description: "Visual representation of soul-winning trees across multiple generations with interactive family mapping.",
      color: "growth"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor spiritual milestones, foundational classes, and status updates with personalized roadmaps.",
      color: "sacred"
    },
    {
      icon: Target,
      title: "Soul-Winner Dashboard",
      description: "Dedicated tools for managing downlines with real-time tracking and performance analytics.",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Integrated Mentorship",
      description: "Sophisticated system for assigning mentors across spiritual lineages ensuring personalized discipleship.",
      color: "growth"
    },
    {
      icon: Shield,
      title: "Centralized Admin",
      description: "Powerful hierarchical dashboard for RCCG leadership with granular data filtering and analytics.",
      color: "sacred"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Full localization in English, Yoruba, Hausa, Igbo, and Pidgin for global accessibility.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Gamification Elements",
      description: "Motivational badges for milestones and dynamic leaderboards fostering healthy competition.",
      color: "growth"
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Features for
            <span className="bg-gradient-divine bg-clip-text text-transparent"> Kingdom Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every feature meticulously designed to transform individual soul-winning efforts 
            into a collective, self-sustaining movement across the global RCCG community.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-divine transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${getGradientClass(feature.color)} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Module Highlight */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-primary/5 via-primary-glow/5 to-background border-primary/20 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                    <TreePine className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Core Innovation</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Soul-Winning Network Module
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    The revolutionary engine that captures, visualizes, and accelerates spiritual multiplication 
                    through meticulously tracked tree structures, transforming individual efforts into exponential growth.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Interconnected spiritual relationships</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Multi-generational tracking and depth analysis</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Real-time visualization of exponential growth</span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="w-full h-64 bg-gradient-divine/10 rounded-xl border border-primary/20 flex items-center justify-center">
                    <TreePine className="w-24 h-24 text-primary/40 animate-grow-tree" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};