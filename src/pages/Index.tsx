import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DetailsDialog from "@/components/DetailsDialog";
import Footer from "@/components/Footer";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onGetDetails={() => setDialogOpen(true)} />
      <Hero onGetDetails={() => setDialogOpen(true)} />
      <DetailsDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  );
};

export default Index;