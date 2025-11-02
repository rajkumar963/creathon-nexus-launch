import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg-v2.jpg";

const Hero = ({ onGetDetails }: { onGetDetails: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-glow-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] animate-float">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-light text-muted-foreground tracking-wide">
            India Blockchain Week × Bitcoin MENA × Binance Blockchain Week
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            AI × Web3
          </span>
          <br />
          <span className="text-foreground">Creathon</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
          India's biggest non-technical hackathon blending{" "}
          <span className="text-primary font-medium">creativity</span>,{" "}
          <span className="text-primary font-medium">artificial intelligence</span>, and{" "}
          <span className="text-secondary font-medium">blockchain technology</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            onClick={onGetDetails}
            size="lg"
            className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-background font-display font-semibold rounded-full px-8 shadow-[var(--glow-primary)] hover:shadow-[var(--glow-primary)] transition-all duration-300"
          >
            Register Now
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            onClick={onGetDetails}
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-[var(--glass-bg)] border-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:border-primary/50 text-foreground font-display font-semibold rounded-full px-8 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;