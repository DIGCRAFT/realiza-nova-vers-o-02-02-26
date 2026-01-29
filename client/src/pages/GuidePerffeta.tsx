import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Check, Star, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function GuidePerffeta() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header do Guia */}
      <header className="bg-primary text-white py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10">
          <Link href="/">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 mb-8 pl-0">
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o site
            </Button>
          </Link>
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-6">
              Material Exclusivo
            </span>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Guia Técnico: <span className="text-secondary">Linha PERFFETA</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Descubra por que esta tecnologia está revolucionando o mercado de alto padrão. Perfis invisíveis, isolamento total e design premiado.
            </p>
          </div>
        </div>
      </header>

      {/* Conteúdo do Guia */}
      <main className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Coluna Principal - Texto */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="font-display font-bold text-3xl text-primary mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary text-lg">1</span>
                O que é a Linha PERFFETA?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A Linha PERFFETA não é apenas uma evolução das esquadrias tradicionais; é uma ruptura completa. Desenvolvida com engenharia de precisão, ela elimina o excesso de alumínio visível, permitindo que o vidro seja o protagonista absoluto do seu projeto.
              </p>
              <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-secondary">
                <p className="font-medium text-primary italic">
                  "O objetivo da PERFFETA é desaparecer. Quando você olha para o vão, você vê a paisagem, não a moldura."
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl text-primary mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary text-lg">2</span>
                Diferenciais Tecnológicos
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Roldanas Blindadas",
                    desc: "Sistema de rolamento em aço inox que suporta até 400kg por folha com deslizamento suave.",
                    icon: <Zap className="w-5 h-5 text-secondary" />
                  },
                  {
                    title: "Vedação Tripla",
                    desc: "Escovas de vedação de alta densidade e EPDM garantem estanqueidade total contra chuva e vento.",
                    icon: <ShieldCheck className="w-5 h-5 text-secondary" />
                  },
                  {
                    title: "Perfis Minimalistas",
                    desc: "Montantes centrais com apenas 28mm de vista frontal. Quase invisível.",
                    icon: <Star className="w-5 h-5 text-secondary" />
                  },
                  {
                    title: "Acústica Superior",
                    desc: "Compatível com vidros duplos e laminados de até 32mm para silêncio absoluto.",
                    icon: <Check className="w-5 h-5 text-secondary" />
                  }
                ].map((item, i) => (
                  <div key={i} className="border border-border p-5 rounded-lg hover:shadow-md transition-shadow">
                    <div className="mb-3">{item.icon}</div>
                    <h3 className="font-bold text-lg text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-3xl text-primary mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary text-lg">3</span>
                Comparativo: Comum vs. PERFFETA
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="p-4 text-left font-bold text-primary">Característica</th>
                      <th className="p-4 text-left font-bold text-muted-foreground">Linha Comum (Gold)</th>
                      <th className="p-4 text-left font-bold text-secondary bg-primary/5 border-b-2 border-secondary">Linha PERFFETA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Largura do Perfil</td>
                      <td className="p-4 text-muted-foreground">Largo e pesado</td>
                      <td className="p-4 font-bold text-primary bg-primary/5">Ultra-slim (Minimalista)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Deslizamento</td>
                      <td className="p-4 text-muted-foreground">Pode travar com o tempo</td>
                      <td className="p-4 font-bold text-primary bg-primary/5">Suave por décadas</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="p-4 font-medium">Isolamento Acústico</td>
                      <td className="p-4 text-muted-foreground">Básico</td>
                      <td className="p-4 font-bold text-primary bg-primary/5">Alta Performance</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Valorização do Imóvel</td>
                      <td className="p-4 text-muted-foreground">Neutra</td>
                      <td className="p-4 font-bold text-primary bg-primary/5">Altíssima</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar - Download */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-primary text-white p-8 rounded-2xl shadow-2xl">
              <h3 className="font-display font-bold text-2xl mb-4">Baixe o Catálogo Técnico Completo</h3>
              <p className="text-white/70 mb-8 text-sm">
                Tenha acesso a todas as especificações técnicas, cortes e detalhes construtivos da Linha PERFFETA em PDF.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Check className="text-secondary w-4 h-4" />
                  <span>Especificações de vidros</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="text-secondary w-4 h-4" />
                  <span>Detalhamento de trilhos</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Check className="text-secondary w-4 h-4" />
                  <span>Opções de acabamento</span>
                </div>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg shadow-lg group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Baixar PDF Agora
              </Button>
              
              <p className="text-center text-xs text-white/40 mt-4">
                Download seguro e gratuito.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
