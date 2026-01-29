import React from "react";
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  Wrench,
  Zap,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ExclusiveBonusProps {
  title?: string;
  description?: string;
  onDownload?: () => void;
}

export default function ExclusiveBonus({
  title = "Bônus Exclusivo: Erros que Economizam Milhares",
  description = "Guia completo com os erros mais comuns em projetos de esquadrias e como evitá-los para economizar até 40% em custos de retrabalho e manutenção.",
  onDownload,
}: ExclusiveBonusProps) {
  const errors = [
    {
      icon: AlertTriangle,
      title: "Erro #1: Especificação Incorreta de Perfis",
      description:
        "Muitos projetos falham por usar perfis inadequados. Aprenda a escolher o perfil certo para cada aplicação.",
      savings: "Economiza até R$ 15.000",
    },
    {
      icon: TrendingDown,
      title: "Erro #2: Negligência no Cálculo de Carga",
      description:
        "Ignorar o peso e a distribuição de carga causa falhas estruturais. Veja como calcular corretamente.",
      savings: "Economiza até R$ 12.000",
    },
    {
      icon: Clock,
      title: "Erro #3: Cronograma Inadequado",
      description:
        "Prazos irrealistas causam retrabalho e custos extras. Descubra o cronograma ideal para cada projeto.",
      savings: "Economiza até R$ 8.000",
    },
    {
      icon: Wrench,
      title: "Erro #4: Instalação Deficiente",
      description:
        "Técnicas incorretas de instalação resultam em problemas futuros. Conheça as melhores práticas.",
      savings: "Economiza até R$ 10.000",
    },
    {
      icon: Zap,
      title: "Erro #5: Falta de Manutenção Preventiva",
      description:
        "Negligenciar manutenção causa degradação acelerada. Aprenda o programa de manutenção essencial.",
      savings: "Economiza até R$ 20.000",
    },
    {
      icon: DollarSign,
      title: "Erro #6: Orçamentação Inadequada",
      description:
        "Subestimar custos causa prejuízos. Domine a técnica de orçamentação precisa.",
      savings: "Economiza até R$ 25.000",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header do Bônus */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 p-8 shadow-lg">
        {/* Decoração de fundo */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2">
            <Zap className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-semibold text-amber-700">BÔNUS EXCLUSIVO</span>
          </div>

          <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
          <p className="mb-6 text-lg text-slate-700">{description}</p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-lg font-bold text-green-600">
              <CheckCircle className="h-6 w-6" />
              Economize até 40% em custos
            </div>
            {onDownload && (
              <Button
                onClick={onDownload}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
              >
                Baixar Guia Completo
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Grid de Erros */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-slate-900">Os 6 Erros Mais Custosos (e Como Evitá-los)</h3>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {errors.map((error, index) => {
            const Icon = error.icon;
            return (
              <Card
                key={index}
                className="group border-2 border-slate-200 transition-all duration-300 hover:border-primary hover:shadow-lg"
              >
                <CardHeader className="pb-3">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-base">{error.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">{error.description}</p>
                  <div className="rounded-lg bg-green-50 px-3 py-2">
                    <p className="text-sm font-semibold text-green-700">{error.savings}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* CTA Final */}
      <Card className="border-2 border-primary bg-gradient-to-r from-primary/5 to-primary/10">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="mb-2 text-xl font-bold text-slate-900">
              Pronto para Economizar Milhares?
            </h3>
            <p className="mb-6 text-slate-600">
              Receba o guia completo com todas as estratégias, checklists e templates prontos para usar.
            </p>
            {onDownload && (
              <Button
                onClick={onDownload}
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80"
              >
                Baixar Guia Exclusivo Agora
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
