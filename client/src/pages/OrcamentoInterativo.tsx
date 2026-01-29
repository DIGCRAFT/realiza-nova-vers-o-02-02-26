import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLocation } from "wouter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ColorSelector from "@/components/ColorSelector";
import { ProductLineConfig, WoodColor } from "@/types/products";

const formSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  productLine: z.string().min(1, "Selecione uma linha"),
  color: z.string().min(1, "Selecione uma cor"),
});

type FormData = z.infer<typeof formSchema>;

// Configurações das linhas de produtos
const productConfigs: Record<string, ProductLineConfig> = {
  perfetta: {
    id: "perfetta",
    name: "Perfetta",
    displayName: "Linha Perfetta™",
    description: "Design minimalista invisível, isolamento acústico absoluto e vedação hermética.",
    colors: [
      { id: "1", name: "Madeira Clara", hexCode: "#D4A574", category: "wood" },
      { id: "2", name: "Madeira Média", hexCode: "#8B6F47", category: "wood" },
      { id: "3", name: "Madeira Escura", hexCode: "#5C4033", category: "wood" },
    ],
    solidColors: [
      { id: "4", name: "Branco", hexCode: "#FFFFFF", category: "solid" },
      { id: "5", name: "Preto", hexCode: "#000000", category: "solid" },
      { id: "6", name: "Alumínio", hexCode: "#C0C0C0", category: "solid" },
    ],
  },
  acm: {
    id: "acm",
    name: "ACM",
    displayName: "Linha ACM",
    description: "Revestimento premium para fachadas com durabilidade de 20+ anos.",
    colors: [
      { id: "7", name: "Madeira Clara", hexCode: "#D4A574", category: "wood" },
      { id: "8", name: "Madeira Média", hexCode: "#8B6F47", category: "wood" },
    ],
    solidColors: [
      { id: "9", name: "Branco", hexCode: "#FFFFFF", category: "solid" },
      { id: "10", name: "Preto", hexCode: "#000000", category: "solid" },
    ],
  },
  aluminio: {
    id: "aluminio",
    name: "Alumínio",
    displayName: "Linha Alumínio",
    description: "Esquadrias resistentes e econômicas com baixa manutenção.",
    colors: [
      { id: "11", name: "Madeira Clara", hexCode: "#D4A574", category: "wood" },
    ],
    solidColors: [
      { id: "12", name: "Branco", hexCode: "#FFFFFF", category: "solid" },
      { id: "13", name: "Preto", hexCode: "#000000", category: "solid" },
      { id: "14", name: "Alumínio", hexCode: "#C0C0C0", category: "solid" },
    ],
  },
};

export default function OrcamentoInterativo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedLine, setSelectedLine] = useState<"perfetta" | "acm" | "aluminio">("perfetta");
  const [selectedColor, setSelectedColor] = useState<WoodColor | undefined>(undefined);
  const [, setLocation] = useLocation();

  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productLine: "perfetta",
      color: "",
    }
  });

  const lineColors: Record<string, { name: string; description: string; badge: string; badgeColor: string }> = {
    perfetta: {
      name: "Linha Perfetta™",
      description: "Design minimalista invisível, isolamento acústico absoluto e vedação hermética.",
      badge: "Premium",
      badgeColor: "bg-primary"
    },
    acm: {
      name: "Linha ACM",
      description: "Revestimento premium para fachadas com durabilidade de 20+ anos.",
      badge: "Fachada",
      badgeColor: "bg-amber-600"
    },
    aluminio: {
      name: "Linha Alumínio",
      description: "Esquadrias resistentes e econômicas com baixa manutenção.",
      badge: "Padrão",
      badgeColor: "bg-orange-600"
    }
  };

  const handleColorSelect = (color: WoodColor) => {
    setSelectedColor(color);
    setValue("color", color.name);
  };

  const onSubmit = async (data: FormData) => {
    if (!selectedColor) {
      toast.error("Por favor, selecione uma cor");
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lineInfo = lineColors[selectedLine];
    const message = `Olá! Gostaria de um orçamento para a Linha ${lineInfo.name} na cor ${selectedColor.name}. Meu nome é ${data.name}, e-mail ${data.email} e telefone ${data.phone}.`;
    
    console.log({
      ...data,
      selectedLine,
      selectedColor
    });
    
    toast.success("Solicitação recebida! Entraremos em contato em breve.");
    setIsSubmitting(false);
    setLocation("/obrigado");
  };

  const currentLine = lineColors[selectedLine];
  const currentLineConfig = productConfigs[selectedLine];

  return (
    <div className="min-h-screen bg-background font-sans">
      <WhatsAppButton />
      
      {/* Header */}
      <header className="py-4 border-b border-border/50 bg-white sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <img src="/images/logo_realiza_atualizada.jpeg" alt="Realiza" className="h-10 w-auto" />
          <div className="text-sm font-bold text-primary hidden md:block">Orçamento Personalizado</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4 text-primary">
              Seu Orçamento Personalizado
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha a linha de produtos e a cor que melhor se adequa ao seu projeto
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Left: Product Line Selection */}
            <div>
              <h3 className="font-display font-bold text-2xl mb-6 text-primary">
                1. Escolha a Linha
              </h3>
              
              <div className="space-y-4">
                {Object.entries(lineColors).map(([key, line]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedLine(key as "perfetta" | "acm" | "aluminio");
                      setSelectedColor(undefined);
                    }}
                    className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                      selectedLine === key
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-lg">{line.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${line.badgeColor}`}>
                        {line.badge}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{line.description}</p>
                    {selectedLine === key && (
                      <div className="mt-4 flex items-center gap-2 text-primary">
                        <Check className="h-5 w-5" />
                        <span className="text-sm font-bold">Selecionado</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Center: Color Selection */}
            <div className="lg:col-span-2">
              <h3 className="font-display font-bold text-2xl mb-6 text-primary">
                2. Escolha a Cor
              </h3>
              
              <ColorSelector
                productLine={currentLineConfig}
                onColorSelect={handleColorSelect}
                selectedColor={selectedColor}
              />

              {/* Form */}
              <div className="mt-12">
                <h3 className="font-display font-bold text-2xl mb-6 text-primary">
                  3. Seus Dados
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        {...register("name")}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        {...register("email")}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        placeholder="(11) 98765-4321"
                        {...register("phone")}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="line">Linha de Produto *</Label>
                      <Input
                        id="line"
                        value={currentLine.name}
                        disabled
                        className="bg-gray-100"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="color">Cor Selecionada *</Label>
                      <Input
                        id="color"
                        value={selectedColor?.name || ""}
                        disabled
                        className="bg-gray-100"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !selectedColor}
                    className="w-full h-12 text-lg font-bold"
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Seus dados estão seguros conosco</span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="font-bold text-xl mb-6 text-primary">Por que escolher a Realiza?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Garantia de 10 Anos</h4>
                  <p className="text-sm text-muted-foreground">Proteção total em todos os produtos</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Instalação Profissional</h4>
                  <p className="text-sm text-muted-foreground">Equipe especializada e certificada</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Suporte Técnico 24/7</h4>
                  <p className="text-sm text-muted-foreground">Sempre à disposição para ajudar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
