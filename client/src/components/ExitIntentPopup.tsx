import { useState, useEffect } from "react";
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasTriggered]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-white border-none shadow-2xl p-0 overflow-hidden">
        <div className="bg-primary p-6 text-white text-center relative">
          <DialogClose className="absolute right-4 top-4 text-white/50 hover:text-white">
            <X className="w-5 h-5" />
          </DialogClose>
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="w-8 h-8 text-secondary" />
          </div>
          <DialogTitle className="font-display font-bold text-2xl mb-2">
            Espere! Conheça a Tecnologia PERFETTA.
          </DialogTitle>
          <DialogDescription className="text-white/80">
            Antes de decidir, baixe o catálogo técnico da linha que está revolucionando o mercado de alto padrão.
          </DialogDescription>
        </div>
        <div className="p-6 bg-white">
          <Link href="/guia-perffeta">
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg shadow-lg" onClick={() => setIsOpen(false)}>
              Baixar Catálogo PERFETTA
            </Button>
          </Link>
          <p className="text-center text-xs text-muted-foreground mt-4">
            É 100% gratuito e pode economizar milhares de reais na sua obra.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
