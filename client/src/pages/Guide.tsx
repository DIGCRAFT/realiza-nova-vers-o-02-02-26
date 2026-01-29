import { Download, FileText, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Guide() {
  return (
    <div className="pt-20 pb-20">
      <div className="container max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
          {/* Header do Guia */}
          <div className="bg-primary p-10 text-white text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wide mb-6 text-secondary">
              Material Gratuito
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl mb-6">
              7 Erros Fatais na Escolha de <br />Esquadrias de Alto Padrão
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Um manual essencial para proprietários e arquitetos que não querem ter surpresas desagradáveis (e caras) no final da obra.
            </p>
          </div>

          {/* Conteúdo do Guia */}
          <div className="p-10 md:p-16 space-y-12">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="lead text-xl text-primary font-medium">
                Você sabia que as esquadrias representam cerca de 15% a 20% do custo total de uma obra de alto padrão, mas são responsáveis por 80% das patologias pós-obra (infiltrações e ruídos)?
              </p>
              
              <p>
                Neste guia rápido, compilamos os erros mais comuns que vemos em obras residenciais e como você pode evitá-los antes de fechar contrato.
              </p>
            </div>

            <div className="grid gap-8">
              {[
                {
                  erro: "Erro #1: Ignorar a Zona de Pressão de Vento",
                  desc: "Em andares altos ou áreas abertas, o vento exerce uma força enorme. Escolher perfis finos demais pode fazer os vidros vibrarem ou até estourarem.",
                  solucao: "Exija o cálculo de pressão de vento conforme a norma NBR 10821."
                },
                {
                  erro: "Erro #2: Economizar nos Componentes Invisíveis",
                  desc: "Roldanas e fechos baratos desgastam em meses. Uma porta pesada com roldana ruim vai travar e riscar seu piso.",
                  solucao: "Verifique a marca e a capacidade de carga dos componentes (ex: Udinese, Fise)."
                },
                {
                  erro: "Erro #3: Esquecer o Conforto Acústico",
                  desc: "Vidro comum não barra ruído. Se você mora perto de ruas movimentadas, vai se arrepender.",
                  solucao: "Use vidros laminados ou insulados (duplos) e perfis com câmara acústica."
                },
                {
                  erro: "Erro #4: Contramarco Mal Instalado",
                  desc: "O contramarco é a base da esquadria. Se ficar torto, a janela nunca fechará direito e entrará água.",
                  solucao: "A instalação do contramarco deve ser feita na fase de alvenaria, com prumo e nível laser."
                },
                {
                  erro: "Erro #5: Escolher Cor por Foto",
                  desc: "O preto fosco de uma marca pode ser diferente de outra. O 'efeito madeira' varia muito de qualidade.",
                  solucao: "Peça amostras físicas dos perfis antes de aprovar."
                },
                {
                  erro: "Erro #6: Não Prever Trilhos Embutidos",
                  desc: "Para ter aquele piso nivelado entre sala e varanda, o trilho precisa ser embutido no contrapiso.",
                  solucao: "Defina isso no projeto executivo ANTES de fazer o contrapiso."
                },
                {
                  erro: "Erro #7: Contratar 'Serralheiro' para Obra de 'Esquadria'",
                  desc: "Serralheria faz portão de ferro. Esquadria de alumínio é indústria de precisão. São mundos diferentes.",
                  solucao: "Contrate empresas especializadas com portfólio comprovado em alto padrão."
                }
              ].map((item, i) => (
                <div key={i} className="bg-muted/20 p-6 rounded-xl border border-border">
                  <h3 className="font-display font-bold text-xl text-primary mb-3 flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-1" />
                    {item.erro}
                  </h3>
                  <p className="mb-4">{item.desc}</p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex gap-3">
                    <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-green-800">
                      <span className="font-bold">Solução Realiza:</span> {item.solucao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Final do Guia */}
            <div className="bg-primary text-white p-8 rounded-xl text-center">
              <h3 className="font-display font-bold text-2xl mb-4">
                Quer garantir que sua obra esteja livre desses erros?
              </h3>
              <p className="text-white/70 mb-8">
                Nossa equipe técnica analisa seu projeto gratuitamente para identificar esses pontos críticos.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/landing">
                  <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 font-bold w-full sm:w-auto">
                    Solicitar Análise Técnica
                  </Button>
                </Link>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto" onClick={() => window.print()}>
                  <FileText className="w-4 h-4 mr-2" />
                  Imprimir / Salvar PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
