# 📚 Exemplo de Estrutura de Arquivos

## Como os arquivos devem ser organizados

### Exemplo 1: Componente UI
```typescript
// src/components/ui/button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### Exemplo 2: Página
```typescript
// src/pages/Home.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton source="Home" message="Olá! Gostaria de saber mais sobre os produtos." />
      
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container py-4">
          <h1 className="text-3xl font-bold">Realiza Alumínio</h1>
        </div>
      </header>

      <main className="container py-12">
        <Card>
          <CardHeader>
            <CardTitle>Bem-vindo</CardTitle>
            <CardDescription>Escolha a linha de produto</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Explorar Produtos</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
```

### Exemplo 3: App.tsx com Rotas
```typescript
// src/App.tsx
import { Router, Route } from "wouter"
import Home from "@/pages/Home"
import LandingPageAluminio from "@/pages/LandingPageAluminio"
import LandingPage4Us from "@/pages/LandingPage4Us"
import LandingPageACM from "@/pages/LandingPageACM"
import BudgetPage from "@/pages/BudgetPage"
import Sobre from "@/pages/Sobre"
import Contato from "@/pages/Contato"

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/lp-aluminio" component={LandingPageAluminio} />
      <Route path="/lp-perfetta" component={LandingPage4Us} />
      <Route path="/lp-acm" component={LandingPageACM} />
      <Route path="/orcamento" component={BudgetPage} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/contato" component={Contato} />
    </Router>
  )
}
```

### Exemplo 4: main.tsx
```typescript
// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Exemplo 5: index.css
```css
/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');

:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.6%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96.1%;
  --secondary-foreground: 0 0% 9%;
  --muted: 0 0% 89.8%;
  --muted-foreground: 0 0% 45.1%;
  --accent: 0 0% 9%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 100%;
  --border: 0 0% 89.8%;
  --input: 0 0% 89.8%;
  --ring: 0 0% 9%;
}

* {
  @apply border-border;
}

body {
  @apply bg-background text-foreground;
}
```

---

## 📌 Dicas Importantes

1. **Imports**: Use caminhos absolutos com `@/` (já configurado no tsconfig)
2. **Componentes UI**: Devem estar em `src/components/ui/`
3. **Páginas**: Devem estar em `src/pages/`
4. **Estilos**: Use Tailwind CSS com classes
5. **Tipos**: Defina interfaces em `src/types/`

## ✅ Pronto!

Agora você tem um exemplo de como estruturar cada tipo de arquivo.
Pode enviar seus arquivos seguindo essa estrutura!
