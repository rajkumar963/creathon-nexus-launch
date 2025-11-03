import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg-v3.jpg";

const Hero = ({ onGetDetails }: { onGetDetails: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background"></div>
      </div>

      {/* Stats - Left Side */}
      <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 space-y-12 hidden lg:block animate-fade-in">
        <div className="text-left">
          <div className="font-display text-5xl font-bold text-foreground mb-2">50,000+</div>
          <div className="text-sm text-muted-foreground max-w-[140px]">
            impressions across platforms
          </div>
        </div>
        
        <div className="text-left">
          <div className="font-display text-5xl font-bold text-foreground mb-2">$10K+</div>
          <div className="text-sm text-muted-foreground max-w-[140px]">
            in prize money & perks
          </div>
        </div>
        
        <div className="text-left">
          <div className="font-display text-5xl font-bold text-foreground mb-2">2 Weeks</div>
          <div className="text-sm text-muted-foreground max-w-[140px]">
            of innovation & collaboration
          </div>
        </div>
      </div>

      {/* Testimonial Card - Right Side */}
      <div className="absolute right-8 lg:right-16 top-[58%] -translate-y-1/2 hidden lg:block animate-fade-in">
        <div className="backdrop-blur-md bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-6 max-w-[320px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex -space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-secondary border-2 border-background"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary border-2 border-background"></div>
            </div>
          </div>
          <div className="text-sm font-semibold text-foreground mb-1">What to Expect</div>
          <div className="text-xs text-muted-foreground mb-3">IMMERSIVE EXPERIENCE</div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Connect with industry leaders, collaborate with diverse teams, and access cutting-edge tools. Transform your vision into reality with mentorship and resources.
          </p>
          <div className="flex gap-1 mt-4">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
            <div className="w-2 h-2 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6 animate-fade-in">
        {/* Eyebrow */}
        <div className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-light">
          One of the Biggest Non-Technical Hackathons
        </div>

        {/* Main Heading */}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Build the future with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            AI & Web3
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
          Join India's biggest non-technical hackathon blending creativity, AI, and blockchain. Hosted around India Blockchain Week, Bitcoin MENA, and Binance Blockchain Week.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Button
            onClick={onGetDetails}
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background font-display font-semibold rounded-full px-10 transition-all duration-300"
          >
            Register Now
          </Button>
          
          <Button
            onClick={onGetDetails}
            size="lg"
            variant="outline"
            className="backdrop-blur-md bg-transparent border-foreground/20 hover:bg-foreground/10 hover:border-foreground/40 text-foreground font-display font-semibold rounded-full px-10 transition-all duration-300"
          >
            See How It Works
          </Button>
        </div>

        {/* Small Text */}
        <p className="text-xs text-muted-foreground pt-2">
          Registration closes soon. Open to all skill levels—creativity is your only requirement.
        </p>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8 lg:px-16 text-xs text-muted-foreground">
        <div>AI × Web3 Creathon 2025 — Innovation for Creators</div>
        <div className="hidden md:block">Created for the future of blockchain and AI</div>
        <div className="hidden lg:block">Scroll to explore</div>
      </div>
    </section>
  );
};

export default Hero;