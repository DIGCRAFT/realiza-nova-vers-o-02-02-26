import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Projetos() {
  const projects = [
    {
      id: 1,
      title: "Residência Alphaville",
      category: "Linha Gold",
      image: "/images/BT6xBlgLFFsl.jpg",
      desc: "Integração total entre living e área externa com vãos de 6 metros, utilizando sistema de trilhos embutidos para transição suave."
    },
    {
      id: 2,
      title: "Casa de Campo Itatiba",
      category: "Linha Suprema",
      image: "/images/COb8XUwfX6NN.jpg",
      desc: "Esquadrias com isolamento térmico reforçado e acabamento amadeirado, garantindo conforto e estética rústica com tecnologia."
    },
    {
      id: 3,
      title: "Cobertura Duplex SP",
      category: "Linha Minimalista",
      image: "/images/obra_alto_padrao_vertical.jpg",
      desc: "Perfis ultra-slim para maximizar a vista panorâmica da cidade, com vidro laminado acústico para silêncio absoluto."
    },
    {
      id: 4,
      title: "Fachada Comercial",
      category: "Pele de Vidro",
      image: "/images/Lre3ANUJQQgg.jpg",
      desc: "Modernidade e eficiência energética para edifício corporativo, com vidros de controle solar de alto desempenho."
    },
    {
      id: 5,
      title: "Área Gourmet Integrada",
      category: "Sistema Mão Amiga",
      image: "/images/TVj8rtkTqFnJ.jpg",
      desc: "Abertura total do vão para conectar churrasqueira e piscina, criando um espaço único de convivência."
    },
    {
      id: 6,
      title: "Mansão Contemporânea",
      category: "Linha Perfetta",
      image: "/images/Wfp7lFJ3pQce.jpg",
      desc: "O ápice do design com perfis invisíveis, automação total e integração com sistema de casa inteligente."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Projetos */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-6">
              Portfolio Selecionado
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-primary mb-6">
              Nossa Galeria de Obras
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Inspire-se com projetos reais onde a técnica encontrou a arte. Cada obra reflete nosso compromisso com a excelência e a satisfação do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border flex flex-col h-full">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary z-20 shadow-sm border border-border/50">
                    {project.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-2xl text-primary mb-3 group-hover:text-secondary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  <Link href="/contato">
                    <Button variant="outline" className="w-full font-bold hover:bg-primary hover:text-white transition-all group/btn border-primary/20">
                      Quero um projeto assim
                      <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Projetos */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-primary mb-4">Dúvidas sobre Projetos</h2>
            <p className="text-muted-foreground">Entenda como transformamos seu projeto em realidade.</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full bg-muted/10 rounded-xl shadow-sm border border-border px-6 py-2">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">Vocês trabalham com projetos personalizados?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Sim, 100% dos nossos projetos são sob medida. Analisamos a arquitetura da sua obra para propor soluções que valorizem a estética e garantam a funcionalidade, seja para vãos curvos, grandes dimensões ou tipologias especiais.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">Qual a linha mais indicada para minha casa?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Isso depende do tamanho dos vãos, da pressão de vento da região e do nível de isolamento acústico desejado. Nossos consultores técnicos avaliam esses fatores para recomendar a linha ideal (Gold, Suprema, Minimalista) com o melhor custo-benefício.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left font-bold text-lg text-primary">Vocês fazem a medição na obra?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Com certeza. A medição final é feita por nossa equipe técnica com equipamentos a laser de alta precisão. Só iniciamos a fabricação após essa conferência in loco para garantir que tudo encaixe perfeitamente.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/COb8XUwfX6NN.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="container relative z-10">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-8">
            Sua obra merece esse padrão de qualidade
          </h2>
          <p className="text-white/70 mb-10 max-w-2xl mx-auto text-lg">
            Nossa equipe técnica está pronta para analisar sua planta e propor a melhor solução em esquadrias de alto padrão.
          </p>
          <Link href="/contato">
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold h-14 px-10 text-lg shadow-xl shadow-secondary/20">
              Solicitar Orçamento Personalizado
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
