import React from 'react';
import { ChevronRight, Users, TreePine, TrendingUp, Clock, Shield, Headphones, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const GetStartedSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Leadership Endorsement",
      description: "Secure formal approval and mandate from RCCG leadership for project authorization",
      action: "Get Approval"
    },
    {
      icon: TreePine,
      title: "Structural Integration",
      description: "Provide RCCG hierarchy data and designate key admin users for each level",
      action: "Setup Structure"
    },
    {
      icon: TrendingUp,
      title: "Development & Testing",
      description: "Complete MVP development with pilot testing in selected provinces",
      action: "Begin Development"
    },
    {
      icon: Clock,
      title: "Global Deployment",
      description: "Roll out across all RCCG provinces with comprehensive training and support",
      action: "Launch Globally"
    }
  ];

  const support = [
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Industry-standard encryption and data protection compliance"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated technical support desk for continuous assistance"
    },
    {
      icon: Heart,
      title: "Training & Onboarding",
      description: "Comprehensive training materials and onboarding webinars"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Transform
            <span className="bg-gradient-divine bg-clip-text text-transparent"> Soul-Winning?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Partner with us to build the most comprehensive new converts tracking and 
            soul-winning network application for the global RCCG community.
          </p>
          <Button variant="hero" size="hero" className="group">
            Start Your Journey
            <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Implementation Steps */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Implementation Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card key={index} className="group hover:shadow-divine transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm relative">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-divine z-10"></div>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-divine rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full border-primary/30 hover:bg-primary/5">
                    {step.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Features */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Comprehensive Support & Training
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {support.map((item, index) => (
              <Card key={index} className="group hover:shadow-growth transition-all duration-300 border-border/50 bg-white/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-growth rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <Card className="bg-gradient-to-br from-primary via-primary-glow to-primary border-primary/20 text-center overflow-hidden">
          <CardContent className="p-8 md:p-12 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Transform Every Convert into a Soul-Winner
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join us in creating a legacy of transformation that will impact generations 
                and accelerate the fulfillment of the Great Commission.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Request Proposal Meeting
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Download Full Proposal
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};