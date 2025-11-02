import { Button } from "@/components/ui/button";

const Header = ({ onGetDetails }: { onGetDetails: () => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-background font-display font-bold text-lg">C</span>
          </div>
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Creathon
          </span>
        </div>
        
        <Button 
          onClick={onGetDetails}
          className="bg-primary hover:bg-primary/90 text-background font-display font-medium rounded-full px-6 shadow-[var(--glow-primary)] hover:shadow-[var(--glow-primary)] transition-all duration-300"
        >
          Get Details
        </Button>
      </nav>
    </header>
  );
};

export default Header;