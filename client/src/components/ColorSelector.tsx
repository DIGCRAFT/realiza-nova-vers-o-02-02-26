import React, { useState } from "react";
import { WoodColor, ProductLineConfig } from "@/types/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Palette } from "lucide-react";

interface ColorSelectorProps {
  productLine: ProductLineConfig;
  onColorSelect: (color: WoodColor) => void;
  selectedColor?: WoodColor;
}

export default function ColorSelector({
  productLine,
  onColorSelect,
  selectedColor,
}: ColorSelectorProps) {
  const [activeTab, setActiveTab] = useState<"wood" | "solid">("wood");

  const woodColors = productLine.colors.filter((c) => c.category === "wood");
  const solidColors = productLine.solidColors.filter((c) => c.category === "solid");

  return (
    <Card className="w-full border-2 border-primary/20 bg-gradient-to-br from-white to-slate-50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Palette className="h-5 w-5 text-primary" />
          <div>
            <CardTitle className="text-lg">Escolha a Cor</CardTitle>
            <CardDescription>
              Visualize as cores disponíveis para a linha {productLine.displayName}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Tabs para Amadeirado e Sólidas */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "wood" | "solid")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="wood" className="flex items-center gap-2">
              <span className="hidden sm:inline">Cores</span> Amadeirado
            </TabsTrigger>
            <TabsTrigger value="solid" className="flex items-center gap-2">
              Cores Sólidas
            </TabsTrigger>
          </TabsList>

          {/* Cores Amadeirado */}
          <TabsContent value="wood" className="space-y-4">
            {woodColors.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {woodColors.map((color) => (
                  <ColorCard
                    key={color.id}
                    color={color}
                    isSelected={selectedColor?.id === color.id}
                    onSelect={() => onColorSelect(color)}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-8 text-center text-sm text-slate-500">
                Nenhuma cor amadeirado disponível para esta linha
              </div>
            )}
          </TabsContent>

          {/* Cores Sólidas */}
          <TabsContent value="solid" className="space-y-4">
            {solidColors.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {solidColors.map((color) => (
                  <ColorCard
                    key={color.id}
                    color={color}
                    isSelected={selectedColor?.id === color.id}
                    onSelect={() => onColorSelect(color)}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-8 text-center text-sm text-slate-500">
                Nenhuma cor sólida disponível para esta linha
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Preview da cor selecionada */}
        {selectedColor && (
          <div className="space-y-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
            <div className="text-sm font-semibold text-slate-700">Cor Selecionada:</div>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full border-2 border-slate-200 shadow-md transition-transform hover:scale-105 overflow-hidden">
                {selectedColor.imageName ? (
                  <img
                    src={`/images/${selectedColor.imageName}`}
                    alt={selectedColor.name}
                    className="h-full w-full object-cover object-top scale-[1.35] origin-top"
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{ backgroundColor: selectedColor.hexCode }}
                  />
                )}
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-slate-900">{selectedColor.name}</p>
                <p className="text-sm text-slate-600">{selectedColor.hexCode}</p>
                <p className="mt-2 text-xs text-slate-500">
                  {selectedColor.category === "wood" ? "Cor Amadeirado" : "Cor Sólida"}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

/**
 * Componente individual de cor
 */
interface ColorCardProps {
  color: WoodColor;
  isSelected: boolean;
  onSelect: () => void;
}

function ColorCard({ color, isSelected, onSelect }: ColorCardProps) {
  return (
    <button
      onClick={onSelect}
      className="group relative flex flex-col items-center gap-2 rounded-lg p-1.5 transition-transform duration-200 hover:scale-[1.02]"
      title={color.name}
    >
      {/* Amostra de cor */}
      <div
        className={`relative mx-auto h-14 w-14 overflow-hidden rounded-full border-2 shadow-sm transition-all ${
          isSelected ? "border-[#f18a1b]" : "border-slate-200"
        }`}
      >
        {color.imageName ? (
          <img
            src={`/images/${color.imageName}`}
            alt={color.name}
            className="h-full w-full object-cover object-top scale-[1.35] origin-top"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{ backgroundColor: color.hexCode }}
          />
        )}
      </div>

      {/* Checkmark se selecionado */}
      {isSelected && (
        <div className="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f18a1b] text-white shadow">
          <Check className="h-3.5 w-3.5" />
        </div>
      )}

      {/* Nome da cor */}
      <span
        className={`min-h-8 text-center text-[10px] font-bold leading-4 uppercase tracking-[0.01em] sm:text-[11px] ${
          isSelected ? "text-[#f18a1b]" : "text-slate-900"
        }`}
      >
        {color.name}
      </span>
    </button>
  );
}
