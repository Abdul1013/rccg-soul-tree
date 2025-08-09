import React from 'react';
import { ChevronRight, TreePine, Users, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/30 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Badge */}
          <div className="inline-flex items-center space-x-2 bg-sacred/20 border border-sacred-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <TreePine className="w-4 h-4 text-sacred-gold" />
            <span className="text-sm font-medium text-foreground">Transforming New Converts into Soul-Winners</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Track Every Soul,
            <span className="bg-gradient-divine bg-clip-text text-transparent"> Multiply </span>
            the Kingdom
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            A revolutionary platform for RCCG to track new converts, visualize spiritual lineages, 
            and transform every believer into an active soul-winner through dynamic mentorship networks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <Button variant="hero" size="hero" className="group">
              Register New Convert
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/5">
              View Soul-Winning Tree
              <TreePine className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Key Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-divine rounded-lg mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">Convert Registration within 48hrs</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-growth rounded-lg mx-auto mb-4">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Multi-Gen</h3>
              <p className="text-muted-foreground">Spiritual Lineage Tracking</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-sacred rounded-lg mx-auto mb-4">
                <Target className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Real-time</h3>
              <p className="text-muted-foreground">Leadership Insights</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};