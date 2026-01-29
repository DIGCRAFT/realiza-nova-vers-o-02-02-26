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
              <div
                className="h-20 w-20 rounded-lg border-2 border-slate-200 shadow-md transition-transform hover:scale-105"
                style={{ backgroundColor: selectedColor.hexCode }}
              />
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
      className={`group relative flex flex-col items-center gap-2 rounded-lg p-2 transition-all duration-200 ${
        isSelected
          ? "ring-2 ring-primary ring-offset-2"
          : "hover:ring-2 hover:ring-primary/50 hover:ring-offset-1"
      }`}
      title={color.name}
    >
      {/* Amostra de cor */}
      <div
        className="h-16 w-full rounded-md border-2 border-slate-200 shadow-sm transition-transform group-hover:scale-105"
        style={{ backgroundColor: color.hexCode }}
      />

      {/* Checkmark se selecionado */}
      {isSelected && (
        <div className="absolute inset-0 flex items-center justify-center rounded-md bg-black/20">
          <Check className="h-6 w-6 text-white drop-shadow-lg" />
        </div>
      )}

      {/* Nome da cor */}
      <span className="text-center text-xs font-medium text-slate-700 line-clamp-2">
        {color.name}
      </span>
    </button>
  );
}
