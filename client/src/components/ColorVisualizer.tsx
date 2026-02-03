import { useEffect, useRef, useState } from "react";
import { WoodColor } from "@/types/products";

interface ColorVisualizerProps {
  selectedColor: WoodColor | undefined;
  productLine: string;
}

export default function ColorVisualizer({ selectedColor, productLine }: ColorVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Carregar imagem base
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/images/hero_home_luxury.jpg";
    
    img.onload = () => {
      imageRef.current = img;
      setImageLoaded(true);
      applyColorFilter();
    };

    img.onerror = () => {
      console.error("Erro ao carregar imagem");
    };
  }, []);

  useEffect(() => {
    if (imageLoaded && selectedColor) {
      applyColorFilter();
    }
  }, [selectedColor, imageLoaded]);

  const applyColorFilter = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ajustar tamanho do canvas
    canvas.width = img.width;
    canvas.height = img.height;

    // Desenhar imagem original
    ctx.drawImage(img, 0, 0);

    if (!selectedColor) return;

    // Aplicar filtro de cor nas esquadrias
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Converter hex para RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 0, g: 0, b: 0 };
    };

    const targetColor = hexToRgb(selectedColor.hexCode);

    // Aplicar filtro (simplificado - detecta áreas escuras/metálicas e aplica cor)
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Detectar áreas metálicas/escuras (esquadrias)
      const brightness = (r + g + b) / 3;
      const isMetallic = brightness < 100 && Math.abs(r - g) < 30 && Math.abs(g - b) < 30;

      if (isMetallic) {
        // Aplicar cor selecionada com blend
        const blendFactor = 0.6;
        data[i] = r * (1 - blendFactor) + targetColor.r * blendFactor;
        data[i + 1] = g * (1 - blendFactor) + targetColor.g * blendFactor;
        data[i + 2] = b * (1 - blendFactor) + targetColor.b * blendFactor;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <h4 className="font-bold text-lg mb-4 text-primary flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        Visualize Sua Escolha
      </h4>
      
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse text-gray-400">Carregando visualização...</div>
          </div>
        )}

        {selectedColor && imageLoaded && (
          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
            <p className="text-sm font-bold text-gray-800 mb-1">
              {productLine} - {selectedColor.name}
            </p>
            <div className="flex items-center gap-2">
              <div 
                className="w-20 h-6 rounded border-2 border-gray-300 shadow-sm" 
                style={{ backgroundColor: selectedColor.hexCode }}
              />
              <span className="text-xs text-gray-500 font-mono">{selectedColor.hexCode}</span>
            </div>
          </div>
        )}
      </div>
      
      <p className="text-xs text-muted-foreground mt-3 text-center">
        * Imagem ilustrativa. As cores podem variar conforme iluminação, acabamento e material aplicado.
      </p>

      {selectedColor && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Dica:</strong> A cor {selectedColor.name} é ideal para {
              selectedColor.category === 'wood' 
                ? 'ambientes que buscam aconchego e sofisticação natural' 
                : 'projetos modernos e minimalistas'
            }.
          </p>
        </div>
      )}
    </div>
  );
}
