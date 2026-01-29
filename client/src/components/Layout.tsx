import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import WhatsAppButton from "./WhatsAppButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fechar menu mobile ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Projetos", href: "/projetos" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-border py-3"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <img src="/images/logo_realiza_atualizada.jpeg" alt="Realiza Projetos em Alumínio" className="h-12 w-auto rounded-full" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={cn(
                    "text-sm font-medium tracking-wide hover:text-secondary transition-colors cursor-pointer relative group",
                    location === link.href ? "text-secondary" : "text-foreground/80"
                  )}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                    location === link.href ? "w-full" : ""
                  )}></span>
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/message/X4KQ726JGQX5B1" target="_blank" rel="noopener noreferrer">
              <Button variant="default" size="sm" className="bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-lg shadow-secondary/20">
                <Phone className="w-4 h-4 mr-2" />
                Falar com Especialista
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden pt-24 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-5">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className="text-2xl font-display font-medium text-foreground hover:text-secondary transition-colors cursor-pointer block border-b border-border/50 pb-4">
                  {link.name}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <a href="https://wa.me/message/X4KQ726JGQX5B1" target="_blank" rel="noopener noreferrer" className="w-full block">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold py-6 text-lg">
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      <WhatsAppButton />
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-20 pb-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/logo_realiza_atualizada.jpeg" alt="Realiza Projetos em Alumínio" className="h-14 w-auto rounded-full opacity-90" />
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Especialistas em esquadrias de alumínio de alto padrão. Unindo estética, desempenho técnico e durabilidade para projetos que exigem excelência.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/realizaprojetosemaluminio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/message/X4KQ726JGQX5B1" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      <span className="text-white/70 hover:text-secondary transition-colors text-sm cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/guia-perffeta">
                    <span className="text-white/70 hover:text-secondary transition-colors text-sm cursor-pointer block mb-2">
                      Guia Técnico PERFFETA
                    </span>
                  </Link>
                  <Link href="/guia-esquadrias">
                    <span className="text-white/70 hover:text-secondary transition-colors text-sm cursor-pointer">
                      Guia 7 Erros na Obra
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Contato</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1 h-1 rounded-full bg-secondary"></div>
                  <span className="text-white/70 text-sm">
                    Rua Monica Scnavinatto, 57<br />
                    Jardim Panorama, Itatiba - SP<br />
                    13251-785
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-secondary"></div>
                  <a href="https://wa.me/message/X4KQ726JGQX5B1" className="text-white/70 hover:text-secondary transition-colors text-sm">
                    (11) 99999-9999
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-secondary"></div>
                  <a href="mailto:contato@realizaprojetos.com.br" className="text-white/70 hover:text-secondary transition-colors text-sm">
                    contato@realizaprojetos.com.br
                  </a>
                </li>
              </ul>
            </div>

            {/* SEO Area */}
            <div>
              <h4 className="font-display font-bold text-lg mb-6 text-white">Área de Atuação</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Atendemos projetos de alto padrão em todo o Estado de São Paulo, com foco em Alphaville, Campinas, Jundiaí, Itatiba, Valinhos, Vinhedo e Litoral Paulista.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Realiza Projetos em Alumínio. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidade">
                <span className="text-white/40 hover:text-white text-xs cursor-pointer">Política de Privacidade</span>
              </Link>
              <Link href="/termos">
                <span className="text-white/40 hover:text-white text-xs cursor-pointer">Termos de Uso</span>
              </Link>
            </div>
          </div>
          
          {/* Área de Demonstração - Apenas para visualização do cliente */}
          <div className="mt-8 pt-4 border-t border-white/5 text-center">
            <p className="text-secondary/60 text-[10px] uppercase tracking-widest mb-2">Menu de Demonstração (Links Rápidos)</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/landing">
                <span className="text-white/60 hover:text-secondary text-xs cursor-pointer border border-white/10 px-2 py-1 rounded">Ver Landing Page (Padrão)</span>
              </Link>
              <Link href="/lp-4us">
                <span className="text-white/60 hover:text-secondary text-xs cursor-pointer border border-white/10 px-2 py-1 rounded">Ver Landing Page (4Us)</span>
              </Link>
              <Link href="/guia-perffeta">
                <span className="text-white/60 hover:text-secondary text-xs cursor-pointer border border-white/10 px-2 py-1 rounded">Ver Guia PERFFETA</span>
              </Link>
              <Link href="/guia-esquadrias">
                <span className="text-white/60 hover:text-secondary text-xs cursor-pointer border border-white/10 px-2 py-1 rounded">Ver Guia 7 Erros</span>
              </Link>
              <Link href="/obrigado">
                <span className="text-white/60 hover:text-secondary text-xs cursor-pointer border border-white/10 px-2 py-1 rounded">Ver Página de Obrigado</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
