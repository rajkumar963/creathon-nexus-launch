import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DetailsDialog from "@/components/DetailsDialog";

const Index = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onGetDetails={() => setDialogOpen(true)} />
      <Hero onGetDetails={() => setDialogOpen(true)} />
      <DetailsDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Index;