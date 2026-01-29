import { Link } from "wouter";
import { CheckCircle, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-2xl p-10 text-center border border-border">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="font-display font-bold text-3xl text-primary mb-4">
          Solicitação Recebida!
        </h1>
        
        <p className="text-muted-foreground text-lg mb-8">
          Obrigado pelo interesse. Nossa equipe técnica já recebeu seus dados e entrará em contato em breve (geralmente em até 24h úteis).
        </p>
        
        <div className="bg-muted/30 p-6 rounded-xl border border-border mb-8">
          <h3 className="font-bold text-primary mb-2 flex items-center justify-center gap-2">
            <Download className="w-5 h-5 text-secondary" />
            Presente para você
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Enquanto aguarda, baixe nosso guia exclusivo para evitar erros na sua obra.
          </p>
          <Link href="/guia-esquadrias">
            <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary/10 font-bold">
              Baixar Guia: 7 Erros Fatais
            </Button>
          </Link>
        </div>
        
        <Link href="/">
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o site
          </Button>
        </Link>
      </div>
    </div>
  );
}
