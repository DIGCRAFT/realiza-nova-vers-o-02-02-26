import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Shield, Star, Clock, Award, ChevronDown } from "lucide-react";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <ExitIntentPopup />
      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          style={{ scale, y, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
          <img 
            src="/images/hero_home_luxury.jpg" 
            alt="Casa de alto padrão com esquadrias de alumínio Realiza" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div className="container relative z-20 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-widest uppercase mb-6 text-secondary">
              Tecnologia Perfetta
            </span>
            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 tracking-tight">
              O Futuro das <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">Esquadrias Premium</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Descubra a linha <strong>Perfetta</strong>: design minimalista invisível, isolamento acústico de estúdio e vedação hermética. A tecnologia que redefine o conceito de luxo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/message/X4KQ726JGQX5B1" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(201,161,74,0.3)] transition-all hover:scale-105">
                  Solicitar Avaliação
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/projetos">
                <Button variant="outline" size="lg" className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                  Ver Projetos
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-widest">Explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Diferenciais / Sobre */}
      <section className="py-24 bg-background relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <img 
                  src="/images/COb8XUwfX6NN.jpg" 
                  alt="Detalhe de esquadria de luxo" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover mt-12"
                />
                <img 
                  src="/images/TVj8rtkTqFnJ.jpg" 
                  alt="Interior com grandes vãos" 
                  className="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-2xl border border-white/50 z-20 text-center min-w-[200px]">
                <span className="block font-display font-bold text-4xl text-primary mb-1">2.000+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">Obras Entregues</span>
              </div>
            </div>
            
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Quem Somos</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-primary">
                Especialistas em obras que exigem precisão
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                A Realiza Projetos em Alumínio nasceu para atender um público exigente, que entende que detalhes definem o resultado final de um imóvel.
                Aqui, nada é padrão. Cada projeto é pensado para entregar segurança, sofisticação e tranquilidade.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Projetos 100% sob medida e personalizados",
                  "Foco absoluto em vedação e conforto acústico",
                  "Instalação com equipe própria especializada",
                  "Garantia formal e acompanhamento pós-obra"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/sobre">
                <Button variant="link" className="text-primary font-bold p-0 hover:text-secondary transition-colors group">
                  Conheça nossa história 
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos / Soluções */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Nossas Soluções</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-primary">
              Linha Perfetta: Outro Nível
            </h2>
            <p className="text-muted-foreground text-lg">
              Esqueça tudo o que você sabe sobre esquadrias. A linha Perfetta traz perfis ultra-slim, roldanas de alta performance e acabamento que beira a perfeição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Grandes Vãos",
                desc: "Sistemas deslizantes que integram ambientes com leveza e transparência total.",
                img: "/images/Wfp7lFJ3pQce.jpg"
              },
              {
                title: "Portas Pivotantes",
                desc: "Imponência na entrada com portas de alumínio ripado ou liso de grandes dimensões.",
                img: "/images/tERLcAEKObJH.jpg"
              },
              {
                title: "Fachadas Glazing",
                desc: "Pele de vidro e fachadas cortina para um visual moderno e limpo.",
                img: "/images/uw1Ywj3ocqfn.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/5] cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                  <h3 className="text-white font-display font-bold text-2xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    {item.desc}
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <span className="text-secondary text-sm font-bold flex items-center gap-2">
                      Saiba mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos - Prova Social */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Depoimentos</span>
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-primary">
              O que dizem nossos clientes
            </h2>
          </div>
          
{/* Seção de Vídeos removida conforme solicitação */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Almeida",
                role: "Arquiteto",
                text: "A precisão da Realiza é impressionante. O sistema Perfetta permitiu vãos enormes sem interferir na estética da fachada. Parceiros indispensáveis.",
                stars: 5,
                avatar: "/images/avatar_architect.jpg"
              },
              {
                name: "Fernanda Costa",
                role: "Proprietária",
                text: "O isolamento acústico mudou nossa vida. Moro em avenida movimentada e dentro de casa é silêncio total. O acabamento é impecável.",
                stars: 5,
                avatar: "/images/avatar_owner.jpg"
              },
              {
                name: "Carlos Eduardo",
                role: "Engenheiro Civil",
                text: "Cumpriram o cronograma à risca, o que é raro hoje em dia. A equipe de instalação é muito técnica e limpa. Recomendo de olhos fechados.",
                stars: 5,
                avatar: "/images/avatar_engineer.jpg"
              }
            ].map((item, i) => (
              <div key={i} className="bg-muted/10 p-8 rounded-xl border border-border hover:shadow-lg transition-shadow flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(item.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 flex-grow">"{item.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                  <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-secondary/20" />
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-4 block">Metodologia</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Um processo claro, <br />sem surpresas
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Sabemos que obra gera ansiedade. Por isso, nosso processo é desenhado para dar visibilidade e segurança em cada etapa, do projeto à entrega das chaves.
              </p>
              <a href="https://wa.me/message/X4KQ726JGQX5B1" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-primary hover:bg-white/90 font-bold">
                  Agendar Consultoria
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Clock className="w-6 h-6" />, title: "1. Análise Técnica", desc: "Avaliação detalhada do projeto arquitetônico e necessidades." },
                { icon: <Shield className="w-6 h-6" />, title: "2. Projeto Executivo", desc: "Definição milimétrica de perfis, vidros e acabamentos." },
                { icon: <Award className="w-6 h-6" />, title: "3. Fabricação Premium", desc: "Corte e montagem com maquinário de precisão." },
                { icon: <Star className="w-6 h-6" />, title: "4. Instalação Especializada", desc: "Equipe própria, limpa e cuidadosa com sua obra." }
              ].map((step, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-32 bg-background relative overflow-hidden">
        <div className="container text-center relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6 text-primary max-w-4xl mx-auto">
            Seu projeto merece mais do que o básico
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto mb-12">
            Se você busca esquadrias que valorizam o imóvel e trazem tranquilidade, fale com a Realiza Projetos em Alumínio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/message/X4KQ726JGQX5B1" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-primary font-bold px-10 py-7 text-lg rounded-full shadow-xl">
                Falar com um Especialista
              </Button>
            </a>
            <Link href="/guia-esquadrias">
              <Button variant="outline" size="lg" className="border-primary/20 text-primary hover:bg-primary/5 px-10 py-7 text-lg rounded-full">
                Baixar Guia Gratuito
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
