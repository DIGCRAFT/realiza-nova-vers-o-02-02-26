import { useEffect, useRef, useState } from "react";
import { WoodColor } from "@/types/products";
import QRCode from "qrcode.react";

interface ColorVisualizerProps {
  selectedColor: WoodColor | undefined;
  productLine: string;
}

export default function ColorVisualizer({ selectedColor, productLine }: ColorVisualizerProps) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const qrRef = useRef<HTMLDivElement>(null);

  // Gerar URL de compartilhamento com parâmetros
  useEffect(() => {
    if (selectedColor) {
      const params = new URLSearchParams({
        linha: productLine,
        cor: selectedColor.name,
        hex: selectedColor.hexCode,
      });
      setShareUrl(`${window.location.origin}?${params.toString()}`);
    }
  }, [selectedColor, productLine]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copiado para a área de transferência!");
  };

  const handleDownloadQR = () => {
    const canvas = qrRef.current?.querySelector("canvas") as HTMLCanvasElement;
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `qrcode-${selectedColor?.name || "visualizador"}.png`;
      link.click();
    }
  };

  // Calcular cor RGB a partir do hex
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  };

  const colorRgb = selectedColor ? hexToRgb(selectedColor.hexCode) : { r: 128, g: 128, b: 128 };
  const colorString = `rgb(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b})`;

  // Gerar ripas com variação de brilho (veios de madeira)
  const generateRipas = () => {
    const ripas = [];
    const numberOfRipas = 24;

    for (let i = 0; i < numberOfRipas; i++) {
      // Criar variação de brilho para simular veios de madeira
      const variation = Math.sin(i * 0.5) * 0.15 + 0.1;
      const brightness = 1 + variation;

      // Aplicar variação de brilho à cor
      const adjustedR = Math.min(255, Math.round(colorRgb.r * brightness));
      const adjustedG = Math.min(255, Math.round(colorRgb.g * brightness));
      const adjustedB = Math.min(255, Math.round(colorRgb.b * brightness));

      ripas.push(
        <div
          key={i}
          className="flex-1 relative overflow-hidden"
          style={{
            backgroundColor: `rgb(${adjustedR}, ${adjustedG}, ${adjustedB})`,
            boxShadow: `inset -1px 0 0 rgba(0, 0, 0, 0.1), inset 1px 0 0 rgba(255, 255, 255, 0.1)`,
          }}
        >
          {/* Padrão de veios de madeira */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(0, 0, 0, ${0.05 + Math.random() * 0.05}) 2px,
                rgba(0, 0, 0, ${0.05 + Math.random() * 0.05}) 4px
              )`,
              backgroundSize: `100% 100%`,
            }}
          />
        </div>
      );
    }
    return ripas;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-lg text-primary flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          Visualize Sua Escolha
        </h4>

        {/* Botão de Compartilhamento */}
        {selectedColor && (
          <button
            onClick={() => setIsShareModalOpen(true)}
            className="absolute top-4 right-4 bg-neutral-100 p-2 rounded-full hover:bg-neutral-200 z-10 transition-colors"
            title="Compartilhar visualização"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C9.589 12.938 10 12.052 10 11.11V5a2 2 0 00-2-2H5a2 2 0 00-2 2v.159V5a2 2 0 00-2 2v6a2 2 0 002 2h.159m15.716-1.084a1.5 1.5 0 002.121 0l2.121-2.121a1.5 1.5 0 00-2.121-2.121L15 10.879m0 0l2.121-2.121a1.5 1.5 0 10-2.121-2.121L13 8.758"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Modal de Compartilhamento */}
      {isShareModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Visualizar no Telemóvel</h3>
              <button
                onClick={() => setIsShareModalOpen(false)}
                className="bg-neutral-100 p-2 rounded-full hover:bg-neutral-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* QR Code */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-center">
              <div ref={qrRef}>
                <QRCode value={shareUrl} size={200} level="H" includeMargin={true} />
              </div>
            </div>

            <p className="text-sm text-gray-600 text-center mb-4">
              Digitalize o código QR para visualizar em seu dispositivo móvel.
            </p>

            {/* Botões de Ação */}
            <div className="space-y-3">
              <button
                onClick={handleCopyLink}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
              >
                Copiar Link
              </button>
              <button
                onClick={handleDownloadQR}
                className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium text-sm"
              >
                Baixar QR Code
              </button>
            </div>

            {/* Informações da Cor */}
            {selectedColor && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600 mb-2">
                  <strong>Seleção Atual:</strong>
                </p>
                <p className="text-sm text-gray-800">
                  {productLine} - {selectedColor.name}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Visualizador de Ripas */}
      <div className="relative aspect-video bg-gradient-to-b from-gray-900 to-black rounded-lg overflow-hidden border border-gray-800">
        {/* Ripas Verticais */}
        <div className="flex h-full w-full gap-0.5 p-4 bg-black">
          {selectedColor ? (
            generateRipas()
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
                <p className="text-sm">Selecione uma cor para visualizar</p>
              </div>
            </div>
          )}
        </div>

        {/* Informações da Cor (Canto Inferior Direito) */}
        {selectedColor && (
          <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-700">
            <p className="text-xs font-bold text-gray-300 mb-1">ACABAMENTO</p>
            <p className="text-sm font-semibold text-white">{selectedColor.name}</p>
            <p className="text-xs text-gray-400">{selectedColor.hexCode}</p>
          </div>
        )}

        {/* Ícone de Expansão */}
        <button className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-lg transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v4m12 0h4v-4m0 12h-4v4m4-4v4h4" />
          </svg>
        </button>
      </div>

      <p className="text-xs text-muted-foreground mt-3 text-center">
        * Visualização em ripas de alumínio. As cores podem variar conforme iluminação, acabamento e material aplicado.
      </p>

      {selectedColor && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <strong>Dica:</strong> A cor {selectedColor.name} é ideal para{" "}
            {selectedColor.category === "wood"
              ? "ambientes que buscam aconchego e sofisticação natural, com veios de madeira autênticos"
              : "projetos modernos e minimalistas"}
            .
          </p>
        </div>
      )}
    </div>
  );
}
