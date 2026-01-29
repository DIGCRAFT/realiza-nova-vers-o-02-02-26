import { Check, ShieldCheck, Users, Award, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Sobre() {
  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Sobre */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/obra_alto_padrao_vertical.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-1 rounded-full text-sm font-bold mb-6 border border-secondary/30">
              Nossa Essência
            </div>
            <h1 className="font-display font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Excelência em cada milímetro, compromisso em cada entrega
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A Realiza Projetos em Alumínio nasceu para redefinir o padrão do mercado de esquadrias, unindo engenharia de precisão, design contemporâneo e um compromisso inegociável com a satisfação do cliente.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História e Missão */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl rotate-2"></div>
              <img 
                src="/images/tecnologia_perfetta.jpg" 
                alt="Tecnologia e Precisão Realiza" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl text-primary mb-6">
                Mais que fabricantes, somos parceiros da sua obra
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Entendemos que uma obra de alto padrão é a realização de um sonho. E sonhos não podem ter infiltrações, ruídos ou atrasos. Por isso, desenvolvemos um método de trabalho rigoroso que elimina as dores de cabeça comuns na construção civil.
                </p>
                <p>
                  Nossa equipe é formada por especialistas técnicos que acompanham seu projeto desde a concepção até a instalação final, garantindo que cada vão seja preenchido com perfeição e que a estética do seu projeto arquitetônico seja valorizada.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="bg-muted/30 p-6 rounded-xl border border-border hover:border-secondary transition-colors">
                  <div className="text-4xl font-bold text-secondary mb-2">+10</div>
                  <div className="text-sm font-medium text-primary">Anos de Experiência</div>
                </div>
                <div className="bg-muted/30 p-6 rounded-xl border border-border hover:border-secondary transition-colors">
                  <div className="text-4xl font-bold text-secondary mb-2">+2k</div>
                  <div className="text-sm font-medium text-primary">Obras Entregues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propósito, Missão e Visão */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Entregar soluções em esquadrias de alumínio que superem as expectativas técnicas e estéticas, garantindo conforto, segurança e valorização para cada imóvel.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground">
                Ser a referência absoluta em esquadrias de alto padrão no Estado de São Paulo, reconhecida pela inovação, qualidade impecável e excelência no atendimento.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-primary mb-4">Nossos Valores</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Transparência total</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Qualidade técnica</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Compromisso com prazos</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-secondary" /> Respeito ao cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-bold text-3xl text-primary mb-4">Nossos Pilares</h2>
            <p className="text-muted-foreground text-lg">O que sustenta nossa reputação no exigente mercado de alto padrão.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="w-10 h-10" />,
                title: "Segurança Técnica",
                desc: "Projetos calculados para resistir a ventos, chuvas e uso intenso, com vedação garantida e certificada."
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Acabamento Premium",
                desc: "Cortes precisos, pintura eletrostática de alta resistência e componentes de primeira linha mundial."
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Atendimento Consultivo",
                desc: "Não vendemos o que queremos, mas o que sua obra realmente precisa para performar com excelência."
              }
            ].map((item, i) => (
              <div key={i} className="bg-muted/10 p-8 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-border group">
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-bold text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Institucional */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-primary mb-4">Dúvidas Institucionais</h2>
            <p className="text-muted-foreground">Conheça mais sobre nossa forma de trabalho.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-white rounded-xl shadow-sm border border-border px-6 py-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">A Realiza possui equipe própria de instalação?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sim. Não terceirizamos a etapa mais crítica da obra. Nossos instaladores são funcionários registrados, treinados constantemente e seguem um rigoroso protocolo de limpeza e organização dentro da sua obra.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">Vocês oferecem garantia estendida?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Oferecemos 5 anos de garantia total (produto e instalação) e 10 anos para a pintura eletrostática (certificação Qualicoat). Tudo documentado em contrato para sua segurança jurídica.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">Como funciona o pós-venda?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Temos um canal exclusivo para assistência técnica. Se houver qualquer necessidade de regulagem ou manutenção, nossa equipe atende com prioridade. Não abandonamos o cliente após a entrega das chaves.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/BT6xBlgLFFsl.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-8">
            Pronto para elevar o nível da sua obra?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Agende uma visita técnica ou envie seu projeto para uma avaliação detalhada de nossos especialistas.
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 px-10 text-lg shadow-xl shadow-secondary/20">
              Falar com um Especialista
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
